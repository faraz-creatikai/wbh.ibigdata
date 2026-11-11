"use client";

/**
 * CustomerSelector — pick customers for a campaign.
 *  - search + filters go to the same GET /customer endpoint your customer screen uses
 *  - server-side pagination (Skip / Limit)
 *  - selection is kept across pages and filters (it lives in the parent as a Map)
 *  - "Select all matching" adds up to the campaign cap in one go
 *  - "Selected" view lets you review / remove picks
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { fetchCustomerPage } from "@/store/masters/outreachcampaign/outreachcampaign";
import {
  EMPTY_CUSTOMER_FILTERS,
  MAX_CAMPAIGN_CUSTOMERS,
  type CustomerFilters,
  type CustomerLite,
  type CustomerPage,
  type SelectedCustomers,
} from "@/store/masters/outreachcampaign/outreachcampaign.interface";
import { Banner, Icon, ICONS, Pagination, Spinner, btnSecondary, checkboxCls, cx, inputCls, useDebounce } from "./CampaignUi";

interface Props {
  selected: SelectedCustomers;
  onChange: (next: SelectedCustomers) => void;
  max?: number;
  /** highlight rows that have no email / phone for the chosen channels */
  needsEmail?: boolean;
  needsPhone?: boolean;
}

type Row = CustomerLite & { unknown?: boolean };

const placeholder = (id: string): Row => ({
  id,
  customerName: "Previously saved customer",
  ContactNumber: "",
  CountryCode: "",
  Email: "",
  City: "",
  Campaign: "",
  LeadTemperature: "",
  LeadType: "",
  CustomerType: "",
  unknown: true,
});

const FILTER_FIELDS: { key: keyof CustomerFilters; label: string; placeholder: string }[] = [
  { key: "city", label: "City", placeholder: "e.g. Jaipur" },
  { key: "campaign", label: "Source campaign", placeholder: "e.g. Diwali offer" },
  { key: "leadTemperature", label: "Lead temperature", placeholder: "e.g. Hot" },
  { key: "leadType", label: "Lead type", placeholder: "e.g. Buyer" },
  { key: "customerType", label: "Customer type", placeholder: "e.g. Residential" },
  { key: "statusType", label: "Status", placeholder: "e.g. Verified" },
];

const tempTone = (t: string) =>
  /hot/i.test(t) ? "bg-red-100 text-red-800" : /warm/i.test(t) ? "bg-amber-100 text-amber-800" : /cold/i.test(t) ? "bg-sky-100 text-sky-800" : "bg-slate-100 text-slate-700";

export default function CustomerSelector({ selected, onChange, max = MAX_CAMPAIGN_CUSTOMERS, needsEmail, needsPhone }: Props) {
  const [filters, setFilters] = useState<CustomerFilters>(EMPTY_CUSTOMER_FILTERS);
  const debounced = useDebounce(filters, 450);
  const [showFilters, setShowFilters] = useState(false);
  const [view, setView] = useState<"all" | "selected">("all");
  const [page, setPage] = useState(1);
  const [selPage, setSelPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [data, setData] = useState<CustomerPage>({ items: [], total: 0, hasMore: false });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<{ tone: "info" | "warn"; text: string } | null>(null);
  const [bulkBusy, setBulkBusy] = useState(false);
  const reqId = useRef(0);

  /* ───── load a page ───── */
  useEffect(() => {
    if (view !== "all") return;
    const id = ++reqId.current;
    setLoading(true);
    setError(null);
    fetchCustomerPage(debounced, page, limit).then((r) => {
      if (id !== reqId.current) return; // stale response
      if (r.ok) setData(r.data);
      else setError(r.error.message);
      setLoading(false);
    });
  }, [debounced, page, limit, view]);

  /* ───── edit mode: fill in names for ids that came from the saved campaign ───── */
  useEffect(() => {
    let next: SelectedCustomers | null = null;
    for (const c of data.items) {
      if (selected.get(c.id) === null) {
        next ??= new Map(selected);
        next.set(c.id, c);
      }
    }
    if (next) onChange(next);
  }, [data.items, selected, onChange]);

  /* ───── rows for the current view ───── */
  const selectedRows = useMemo<Row[]>(
    () => [...selected.entries()].map(([id, c]) => c ?? placeholder(id)),
    [selected]
  );
  const selTotalPages = Math.max(1, Math.ceil(selectedRows.length / limit));
  const curSelPage = Math.min(selPage, selTotalPages);
  const rows: Row[] = view === "all" ? data.items : selectedRows.slice((curSelPage - 1) * limit, curSelPage * limit);

  /* ───── filters ───── */
  const setFilter = <K extends keyof CustomerFilters>(key: K, value: CustomerFilters[K]) => {
    setFilters((f) => ({ ...f, [key]: value }));
    setPage(1);
  };
  const activeFilterCount =
    FILTER_FIELDS.filter((f) => String(filters[f.key]).trim()).length +
    (filters.startDate && filters.endDate ? 1 : 0) +
    (filters.isFavourite ? 1 : 0);
  const resetFilters = () => {
    setFilters({ ...EMPTY_CUSTOMER_FILTERS, keyword: filters.keyword, sort: filters.sort });
    setPage(1);
  };

  /* ───── selection ───── */
  const capNotice = () => setNotice({ tone: "warn", text: `A campaign can have at most ${max} customers.` });

  const toggle = (c: Row) => {
    const next = new Map(selected);
    if (next.has(c.id)) next.delete(c.id);
    else {
      if (next.size >= max) return capNotice();
      next.set(c.id, c);
    }
    setNotice(null);
    onChange(next);
  };

  const pageAll = rows.length > 0 && rows.every((r) => selected.has(r.id));
  const pageSome = rows.some((r) => selected.has(r.id));

  const togglePage = () => {
    const next = new Map(selected);
    let capped = false;
    if (pageAll) rows.forEach((r) => next.delete(r.id));
    else
      for (const r of rows) {
        if (next.has(r.id)) continue;
        if (next.size >= max) {
          capped = true;
          break;
        }
        next.set(r.id, r);
      }
    if (capped) capNotice();
    else setNotice(null);
    onChange(next);
  };

  const selectAllMatching = async () => {
    if (selected.size >= max) return capNotice();
    setBulkBusy(true);
    setNotice(null);
    const r = await fetchCustomerPage(debounced, 1, max);
    setBulkBusy(false);
    if (!r.ok) return setNotice({ tone: "warn", text: r.error.message });

    const next = new Map(selected);
    let added = 0;
    for (const c of r.data.items) {
      if (next.get(c.id) === null) next.set(c.id, c);
      else if (!next.has(c.id)) {
        if (next.size >= max) break;
        next.set(c.id, c);
        added++;
      }
    }
    onChange(next);
    const more = (r.data.total ?? 0) > r.data.items.length || r.data.items.some((c) => !next.has(c.id));
    setNotice({
      tone: more ? "warn" : "info",
      text: `Added ${added} customer${added === 1 ? "" : "s"}.${more ? ` Only the first ${max} matches fit in one campaign. Narrow the filters to pick the rest.` : ""}`,
    });
  };

  const clearAll = () => {
    setNotice(null);
    onChange(new Map());
    setView("all");
  };

  /* ───── cells ───── */
  const phoneCell = (c: Row) => {
    if (c.ContactNumber === "Forbidden") return <span className="italic text-slate-400">Hidden</span>;
    if (!c.ContactNumber) return needsPhone && !c.unknown ? <span className="text-amber-700">No phone</span> : <span className="text-slate-400">—</span>;
    const cc = c.CountryCode ? `+${c.CountryCode.replace(/^\+/, "")} ` : "";
    return `${cc}${c.ContactNumber}`;
  };
  const emailCell = (c: Row) =>
    c.Email ? c.Email : needsEmail && !c.unknown ? <span className="text-amber-700">No email</span> : <span className="text-slate-400">—</span>;

  const pct = Math.min(100, Math.round((selected.size / max) * 100));
  const total = data.total;

  return (
    <div className="space-y-4">
      {/* selection summary */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-[180px]">
            <p className="text-sm text-slate-700">
              <span className="text-base font-semibold text-slate-900">{selected.size}</span> of {max} customers selected
            </p>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuenow={selected.size} aria-valuemax={max}>
              <div className={cx("h-full rounded-full", pct >= 100 ? "bg-amber-500" : "bg-[var(--color-primary)]")} style={{ width: `${pct}%` }} />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div role="tablist" className="flex rounded-lg border border-slate-300 bg-white p-0.5 text-sm">
              {(["all", "selected"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  role="tab"
                  aria-selected={view === v}
                  onClick={() => setView(v)}
                  className={cx(
                    "cursor-pointer rounded-md px-3 py-1.5 font-medium",
                    view === v ? "bg-[var(--color-primary)] text-white" : "text-slate-700 hover:bg-slate-100"
                  )}
                >
                  {v === "all" ? "All customers" : `Selected (${selected.size})`}
                </button>
              ))}
            </div>
            {selected.size > 0 && (
              <button type="button" className={cx(btnSecondary, "!px-3 !py-1.5")} onClick={clearAll}>
                <Icon d={ICONS.trash} /> Clear all
              </button>
            )}
          </div>
        </div>
      </div>

      {/* search + filters */}
      {view === "all" && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative min-w-[220px] flex-1">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                <Icon d={ICONS.search} />
              </span>
              <input
                type="search"
                className={cx(inputCls, "pl-9")}
                placeholder="Search by name, phone, email, city, reference…"
                value={filters.keyword}
                onChange={(e) => setFilter("keyword", e.target.value)}
                aria-label="Search customers"
              />
            </div>
            <select
              value={filters.sort}
              onChange={(e) => setFilter("sort", e.target.value as "asc" | "desc")}
              className={cx(inputCls, "!w-auto")}
              aria-label="Sort order"
            >
              <option value="desc">Recently updated first</option>
              <option value="asc">Oldest first</option>
            </select>
            <button
              type="button"
              className={cx(btnSecondary, activeFilterCount > 0 && "!border-[var(--color-primary)]")}
              onClick={() => setShowFilters((s) => !s)}
              aria-expanded={showFilters}
            >
              <Icon d={ICONS.filter} />
              Filters
              {activeFilterCount > 0 && (
                <span className="rounded-full bg-[var(--color-primary)] px-1.5 text-xs text-white">{activeFilterCount}</span>
              )}
            </button>
          </div>

          {showFilters && (
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {FILTER_FIELDS.map((f) => (
                  <label key={f.key} className="block text-xs font-medium text-slate-700">
                    {f.label}
                    <input
                      className={cx(inputCls, "mt-1")}
                      placeholder={f.placeholder}
                      value={String(filters[f.key])}
                      onChange={(e) => setFilter(f.key, e.target.value as never)}
                    />
                  </label>
                ))}
                <label className="block text-xs font-medium text-slate-700">
                  Added from
                  <input type="date" className={cx(inputCls, "mt-1")} value={filters.startDate} onChange={(e) => setFilter("startDate", e.target.value)} />
                </label>
                <label className="block text-xs font-medium text-slate-700">
                  Added until
                  <input type="date" className={cx(inputCls, "mt-1")} value={filters.endDate} onChange={(e) => setFilter("endDate", e.target.value)} />
                </label>
                <label className="flex cursor-pointer items-center gap-2 self-end pb-2.5 text-sm text-slate-700">
                  <input type="checkbox" className={checkboxCls} checked={filters.isFavourite} onChange={(e) => setFilter("isFavourite", e.target.checked)} />
                  Favourites only
                </label>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs text-slate-500">
                  {!!filters.startDate !== !!filters.endDate ? "Set both dates to apply the date range." : "Filters apply as you type."}
                </p>
                <button type="button" onClick={resetFilters} className="cursor-pointer text-sm font-medium text-[var(--color-primary-dark)] hover:underline">
                  Reset filters
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <p className="text-slate-600">
              {loading && data.items.length === 0 ? "Loading customers…" : total !== null ? `${total} customer${total === 1 ? "" : "s"} match` : "Customers"}
            </p>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-2 font-medium text-[var(--color-primary-dark)] hover:underline disabled:cursor-not-allowed disabled:opacity-50"
              onClick={selectAllMatching}
              disabled={bulkBusy || loading || data.items.length === 0}
            >
              {bulkBusy && <Spinner />}
              {total !== null ? `Select all ${Math.min(total, max)} matching` : "Select all matching"}
            </button>
          </div>
        </div>
      )}

      {notice && <Banner tone={notice.tone === "warn" ? "warn" : "info"}>{notice.text}</Banner>}
      {error && view === "all" && <Banner tone="error">{error}</Banner>}

      {/* table */}
      <div className={cx("overflow-x-auto rounded-lg border border-slate-200", loading && view === "all" && "opacity-60")} aria-busy={loading}>
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-slate-50 text-xs text-slate-600">
            <tr>
              <th className="w-10 px-3 py-2.5">
                <input
                  type="checkbox"
                  className={checkboxCls}
                  checked={pageAll}
                  ref={(el) => {
                    if (el) el.indeterminate = pageSome && !pageAll;
                  }}
                  onChange={togglePage}
                  disabled={rows.length === 0}
                  aria-label={pageAll ? "Unselect everyone on this page" : "Select everyone on this page"}
                />
              </th>
              {["Name", "Phone", "Email", "City", "Source campaign"].map((h) => (
                <th key={h} className="px-3 py-2.5 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((c) => {
              const on = selected.has(c.id);
              return (
                <tr key={c.id} onClick={() => toggle(c)} className={cx("cursor-pointer", on ? "bg-[var(--color-primary-lighter)]/70" : "hover:bg-slate-50")}>
                  <td className="px-3 py-2.5">
                    <input
                      type="checkbox"
                      className={checkboxCls}
                      checked={on}
                      onChange={() => toggle(c)}
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Select ${c.customerName}`}
                    />
                  </td>
                  <td className="px-3 py-2.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={cx("font-medium", c.unknown ? "italic text-slate-500" : "text-slate-900")}>{c.customerName || "Unnamed"}</span>
                      {c.LeadTemperature && <span className={cx("rounded px-1.5 py-0.5 text-[11px]", tempTone(c.LeadTemperature))}>{c.LeadTemperature}</span>}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-slate-700">{phoneCell(c)}</td>
                  <td className="max-w-[220px] truncate px-3 py-2.5 text-slate-700">{emailCell(c)}</td>
                  <td className="px-3 py-2.5 text-slate-700">{c.City || <span className="text-slate-400">—</span>}</td>
                  <td className="px-3 py-2.5 text-slate-700">{c.Campaign || <span className="text-slate-400">—</span>}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {rows.length === 0 && (
          <div className="flex flex-col items-center gap-2 px-4 py-10 text-center text-sm text-slate-600">
            {loading && view === "all" ? (
              <Spinner className="h-5 w-5" />
            ) : view === "selected" ? (
              <>Nobody selected yet. Switch to “All customers” and tick the people you want to reach.</>
            ) : (
              <>
                No customers match these filters.
                {activeFilterCount > 0 && (
                  <button type="button" onClick={resetFilters} className="cursor-pointer font-medium text-[var(--color-primary-dark)] hover:underline">
                    Reset filters
                  </button>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {view === "all" ? (
        <Pagination page={page} limit={limit} total={total} hasMore={data.hasMore} itemCount={data.items.length} onPage={setPage} onLimit={(l) => { setLimit(l); setPage(1); setSelPage(1); }} disabled={loading} />
      ) : (
        <Pagination page={curSelPage} limit={limit} total={selectedRows.length} itemCount={rows.length} onPage={setSelPage} onLimit={(l) => { setLimit(l); setPage(1); setSelPage(1); }} />
      )}
    </div>
  );
}