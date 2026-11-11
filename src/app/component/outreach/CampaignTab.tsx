"use client";

/**
 * CampaignsTab — the real "Campaigns" tab for a channel page.
 *
 *   <CampaignsTab
 *     scope="email"                       // "whatsapp" on the WhatsApp workspaces
 *     refreshKey={campaignsKey}           // bump after CampaignDialog saves
 *     onCreate={() => openDialog(null)}
 *     onEdit={(id) => openDialog(id)}
 *   />
 *
 * The dialog itself stays in the page (so the header "Create Campaign" button can open it too).
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { deleteCampaign, getCampaignById, getCampaigns, updateCampaign } from "@/store/masters/outreachcampaign/outreachcampaign";
import {
  campaignMatchesScope,
  channelsForScope,
  type CampaignListItem,
  type CampaignScope,
  type Paginated,
} from "@/store/masters/outreachcampaign/outreachcampaign.interface";
import CampaignCard, { type Notice } from "./CampaignCard";
import { Banner, ICONS, Icon, Pagination, Spinner, btnPrimary, btnSecondary, cx, inputCls, useDebounce } from "./CampaignUi";
import ConfirmModal from "./ConfirmModel";

interface Props {
  scope: CampaignScope;
  refreshKey?: number;
  onCreate: () => void;
  onEdit: (id: string) => void;
}

const LABEL: Record<CampaignScope, string> = { email: "email", whatsapp: "WhatsApp", all: "outreach" };
const REFRESH = "M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5";

export default function CampaignsTab({ scope, refreshKey = 0, onCreate, onEdit }: Props) {
  const [search, setSearch] = useState("");
  const q = useDebounce(search, 400);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [data, setData] = useState<Paginated<CampaignListItem> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);
  const [notice, setNotice] = useState<Notice | null>(null);

  const [deleteTarget, setDeleteTarget] = useState<CampaignListItem | null>(null);
  const [deleteBusy, setDeleteBusy] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const reqId = useRef(0);
  const silent = useRef(false); // background refreshes (after a run) don't dim the list

  /* ───── load ───── */
  useEffect(() => {
    const id = ++reqId.current;
    const quiet = silent.current;
    silent.current = false;
    if (!quiet) setLoading(true);
    setError(null);
    getCampaigns({
      page,
      limit,
      search: q,
      channel: scope === "all" ? undefined : channelsForScope(scope),
    }).then((r) => {
      if (id !== reqId.current) return;
      if (r.ok) setData(r.data);
      else setError(r.error.message);
      setLoading(false);
    });
  }, [q, page, limit, scope, refreshKey, tick]);

  const reload = useCallback((quiet = false) => {
    silent.current = quiet;
    setTick((t) => t + 1);
  }, []);

  // success messages fade; errors stay until dismissed
  useEffect(() => {
    if (!notice || notice.tone === "error") return;
    const id = setTimeout(() => setNotice(null), 7000);
    return () => clearTimeout(id);
  }, [notice]);

  // The backend may not filter by channel yet, so make sure the right cards show either way.
  const items = (data?.data ?? []).filter((c) => campaignMatchesScope(c, scope));
  const total = data?.total ?? 0;

  /* ───── delete ───── */
  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setDeleteBusy(true);
    setDeleteError(null);
    const r = await deleteCampaign(deleteTarget.id);
    setDeleteBusy(false);
    if (!r.ok) return setDeleteError(r.error.message);
    setNotice({ tone: "success", text: `Deleted “${deleteTarget.name}”.` });
    setDeleteTarget(null);
    if (items.length === 1 && page > 1) setPage(page - 1);
    else reload();
  };

  /* ───── pause / resume (the API takes the full form, so load it first) ───── */
  const togglePause = useCallback(
    async (c: CampaignListItem) => {
      const d = await getCampaignById(c.id);
      if (!d.ok) return setNotice({ tone: "error", text: d.error.message });
      const x = d.data.data;
      const next = x.status === "active" ? "paused" : "active";
      const r = await updateCampaign(c.id, {
        name: x.name,
        description: x.description,
        channels: x.channels,
        emailTemplateId: x.emailTemplateId,
        whatsappTemplateId: x.whatsappTemplateId,
        aiAgentId: x.aiAgentId,
        customerIds: x.customerIds,
        status: next,
      });
      if (!r.ok) return setNotice({ tone: "error", text: r.error.message });
      setNotice({
        tone: r.data.removedCustomers > 0 ? "warn" : "success",
        text:
          `“${c.name}” is now ${next}.` +
          (r.data.removedCustomers > 0 ? ` ${r.data.removedCustomers} customer(s) are no longer available to you and were removed.` : ""),
      });
      reload(true);
    },
    [reload]
  );

  /* ───── render ───── */
  return (
    <section className="space-y-4">
      {/* toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="relative min-w-[220px] flex-1 sm:max-w-sm">
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
            <Icon d={ICONS.search} />
          </span>
          <input
            type="search"
            className={cx(inputCls, "pl-9")}
            placeholder="Search campaigns by name"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            aria-label="Search campaigns"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-600">{data ? `${total} campaign${total === 1 ? "" : "s"}` : ""}</span>
          <button type="button" className={cx(btnSecondary, "!px-3")} onClick={() => reload()} disabled={loading} aria-label="Refresh campaigns">
            {loading ? <Spinner /> : <Icon d={REFRESH} />}
          </button>
        </div>
      </div>

      {notice && (
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <Banner tone={notice.tone}>{notice.text}</Banner>
          </div>
          <button type="button" onClick={() => setNotice(null)} className="cursor-pointer pt-2 text-xs font-medium text-slate-500 hover:text-slate-800">
            Dismiss
          </button>
        </div>
      )}

      {error && (
        <div className="space-y-3">
          <Banner tone="error" title="Couldn’t load campaigns">
            {error}
          </Banner>
          <button type="button" className={btnSecondary} onClick={() => reload()}>
            Try again
          </button>
        </div>
      )}

      {/* first load */}
      {loading && !data && (
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
          <Spinner /> Loading campaigns…
        </div>
      )}

      {/* cards */}
      {items.length > 0 && (
        <div className={cx("grid gap-4 lg:grid-cols-2", loading && "opacity-60")} aria-busy={loading}>
          {items.map((c) => (
            <CampaignCard
              key={c.id}
              campaign={c}
              onEdit={onEdit}
              onDelete={(t) => {
                setDeleteError(null);
                setDeleteTarget(t);
              }}
              onTogglePause={togglePause}
              onRunFinished={() => reload(true)}
              onSchedulesChanged={() => reload(true)}
              onNotice={setNotice}
            />
          ))}
        </div>
      )}

      {/* empty */}
      {data && !error && items.length === 0 && (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-lighter)] text-[var(--color-primary)]">
            <Icon d={ICONS.users} className="h-6 w-6" />
          </span>
          {q ? (
            <>
              <p className="text-sm font-medium text-slate-900">No {LABEL[scope]} campaigns match “{q}”</p>
              <button type="button" className={btnSecondary} onClick={() => setSearch("")}>
                Clear search
              </button>
            </>
          ) : (
            <>
              <div>
                <p className="text-sm font-medium text-slate-900">No {LABEL[scope]} campaigns yet</p>
                <p className="mt-1 text-sm text-slate-600">Pick a template and a group of customers, then send in one click.</p>
              </div>
              <button type="button" className={btnPrimary} onClick={onCreate}>
                <Icon d="M12 5v14M5 12h14" />
                Create campaign
              </button>
            </>
          )}
        </div>
      )}

      {data && total > 0 && (
        <Pagination
          page={page}
          limit={limit}
          total={total}
          itemCount={data.data.length}
          onPage={setPage}
          onLimit={(l) => {
            setLimit(l);
            setPage(1);
          }}
          limits={[6, 12, 24]}
          disabled={loading}
        />
      )}

      {deleteTarget && (
        <ConfirmModal
          title={`Delete “${deleteTarget.name}”?`}
          tone="danger"
          confirmLabel="Delete campaign"
          busyLabel="Deleting…"
          busy={deleteBusy}
          error={deleteError}
          onConfirm={confirmDelete}
          onCancel={() => !deleteBusy && setDeleteTarget(null)}
        >
          <p>This also deletes its schedules, run history and reports.</p>
          <p>Messages that were already sent stay sent.</p>
        </ConfirmModal>
      )}
    </section>
  );
}