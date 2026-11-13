'use client'

import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, Copy, Download, FileWarning, PhoneOff, Search, SkipForward, X, XCircle } from "lucide-react";

export type ImportReportItem = {
    rowNumber: number | null;
    customerName: string;
    contactRaw: string;
    contactNumber: string;
    countryCode: string;
    noContact?: boolean;
    status: "imported" | "duplicate" | "skipped" | "failed";
    reasons: string[];
    warnings: string[];
    id?: string;
};

export type ImportReport = {
    totalRows: number;
    counts: { imported: number; duplicates: number; skipped: number; failed: number; noContact?: number };
    reasonBreakdown: Record<string, number>;
    countryBreakdown: Record<string, number>;
    rows: {
        imported: ImportReportItem[];
        importedTruncated: boolean;
        duplicates: ImportReportItem[];
        noContact?: ImportReportItem[];
        skipped: ImportReportItem[];
        failed: ImportReportItem[];
    };
    generatedAt: string;
};

export type ImportResponse = {
    success: boolean;
    message: string;
    file?: string;
    report?: ImportReport;
};

type TabKey = "skipped" | "failed" | "noContact" | "duplicates" | "imported";

const TAB_META: Record<TabKey, { label: string; tone: string; dot: string }> = {
    skipped: { label: "Skipped", tone: "text-amber-700", dot: "bg-amber-500" },
    failed: { label: "Failed", tone: "text-red-700", dot: "bg-red-500" },
    noContact: { label: "No contact number", tone: "text-violet-700", dot: "bg-violet-500" },
    duplicates: { label: "Duplicates", tone: "text-sky-700", dot: "bg-sky-500" },
    imported: { label: "Imported", tone: "text-emerald-700", dot: "bg-emerald-500" },
};

export default function ImportReportDialog({
    open,
    result,
    fileBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "",
    onClose,
}: {
    open: boolean;
    result: ImportResponse | null;
    fileBaseUrl?: string;
    onClose: () => void; // e.g. () => router.push("/customer")
}) {
    const report = result?.report;
    const [tab, setTab] = useState<TabKey>("skipped");
    const [query, setQuery] = useState("");

    // open on the most important non-empty tab
    useEffect(() => {
        if (!report) return;
        const c = report.counts;
        setQuery("");
        setTab(
            c.failed ? "failed"
                : c.skipped ? "skipped"
                    : c.noContact ? "noContact"
                        : c.duplicates ? "duplicates"
                            : "imported"
        );
    }, [report]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    const rows = useMemo(() => {
        if (!report) return [];
        const list = report.rows[tab] ?? [];
        const q = query.trim().toLowerCase();
        if (!q) return list;
        return list.filter((r) =>
            [r.rowNumber, r.customerName, r.contactRaw, r.contactNumber, r.reasons.join(" "), r.warnings.join(" ")]
                .join(" ")
                .toLowerCase()
                .includes(q)
        );
    }, [report, tab, query]);

    if (!open || !result) return null;

    const counts = report?.counts;
    const total = report?.totalRows ?? 0;
    const savedCount = counts?.imported ?? 0;
    const noContactCount = counts?.noContact ?? 0;
    const duplicateCount = counts?.duplicates ?? 0;
    const cleanCount = Math.max(savedCount - duplicateCount - noContactCount, 0);
    const problemCount = (counts?.skipped ?? 0) + (counts?.failed ?? 0);
    const pct = (n: number) => (total ? `${(n / total) * 100}%` : "0%");
    const reasons = Object.entries(report?.reasonBreakdown ?? {}).sort((a, b) => b[1] - a[1]);
    const countries = Object.entries(report?.countryBreakdown ?? {}).sort((a, b) => b[1] - a[1]);

    const tabCount = (k: TabKey) => counts?.[k] ?? 0;

    // hide the "No contact number" tab when there is nothing in it
    const visibleTabs = (Object.keys(TAB_META) as TabKey[]).filter(
        (k) => k !== "noContact" || noContactCount > 0
    );

    const copyReasons = () => {
        const lines = [...(report?.rows.skipped ?? []), ...(report?.rows.failed ?? [])].map(
            (r) => `Row ${r.rowNumber}\t${r.customerName}\t${r.contactRaw}\t${r.reasons.join("; ")}`
        );
        navigator.clipboard.writeText(lines.join("\n"));
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="import-report-title"
            onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 border-b border-gray-200 px-8 py-5">
                    <div>
                        <h2 id="import-report-title" className="text-2xl font-bold text-gray-900">
                            Import report
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            {total} rows read from your file. {savedCount} saved
                            {problemCount ? `, ${problemCount} need attention.` : ", nothing needs attention."}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close report"
                        className="rounded-full p-2 text-gray-500 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
                    >
                        <X size={20} />
                    </button>
                </div>

                {!report ? (
                    <div className="px-8 py-12 text-center text-gray-700">
                        <FileWarning className="mx-auto mb-3 text-gray-400" size={36} />
                        {result.message}
                    </div>
                ) : (
                    <div className="flex-1 overflow-y-auto">
                        {/* Proportional outcome bar */}
                        <div className="px-8 pt-6">
                            <div className="flex h-3 w-full overflow-hidden rounded-full bg-gray-100" aria-hidden>
                                <div className="bg-emerald-500" style={{ width: pct(cleanCount) }} />
                                <div className="bg-violet-500" style={{ width: pct(noContactCount) }} />
                                <div className="bg-sky-500" style={{ width: pct(duplicateCount) }} />
                                <div className="bg-amber-500" style={{ width: pct(counts!.skipped) }} />
                                <div className="bg-red-500" style={{ width: pct(counts!.failed) }} />
                            </div>
                            <dl className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-5">
                                <Stat icon={<CheckCircle2 size={16} />} dot="bg-emerald-500" label="Imported" value={cleanCount} />
                                <Stat icon={<PhoneOff size={16} />} dot="bg-violet-500" label="Imported, no contact" value={noContactCount} />
                                <Stat icon={<Copy size={16} />} dot="bg-sky-500" label="Imported as duplicate" value={duplicateCount} />
                                <Stat icon={<SkipForward size={16} />} dot="bg-amber-500" label="Skipped" value={counts!.skipped} />
                                <Stat icon={<XCircle size={16} />} dot="bg-red-500" label="Failed" value={counts!.failed} />
                            </dl>
                        </div>

                        {/* Leads imported with the 1010101010 placeholder */}
                        {noContactCount > 0 && (
                            <div className="mx-8 mt-6 flex items-start gap-4 rounded-xl border border-violet-200 bg-violet-50 p-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                                    <PhoneOff size={20} />
                                </div>
                                <div className="flex-1 text-sm text-violet-900">
                                    <p className="font-semibold">
                                        {noContactCount} lead{noContactCount === 1 ? "" : "s"} imported without a contact number
                                    </p>
                                    <p className="mt-1 text-violet-800">
                                        These rows had <span className="font-mono font-semibold">1010101010</span> as the contact number,
                                        so they were saved with <span className="font-mono">+91 1010101010</span> as a placeholder.
                                        Open each lead and add the real number once you have it.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setTab("noContact")}
                                    className="shrink-0 rounded-lg bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
                                >
                                    View leads
                                </button>
                            </div>
                        )}

                        {/* Why rows were rejected + country spread */}
                        {(reasons.length > 0 || countries.length > 0) && (
                            <div className="mt-6 grid gap-6 px-8 md:grid-cols-5">
                                <section className="md:col-span-3">
                                    <h3 className="mb-2 text-sm font-semibold text-gray-800">Why rows were not imported</h3>
                                    {reasons.length === 0 ? (
                                        <p className="text-sm text-gray-500">No rejected rows.</p>
                                    ) : (
                                        <ul className="divide-y divide-gray-100 rounded-lg border border-gray-200">
                                            {reasons.map(([reason, n]) => (
                                                <li key={reason} className="flex items-start justify-between gap-4 px-4 py-2.5 text-sm">
                                                    <span className="text-gray-700">{reason}</span>
                                                    <span className="shrink-0 font-semibold tabular-nums text-gray-900">{n}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </section>
                                <section className="md:col-span-2">
                                    <h3 className="mb-2 text-sm font-semibold text-gray-800">Saved by country code</h3>
                                    <ul className="flex flex-wrap gap-2">
                                        {countries.length === 0 && <li className="text-sm text-gray-500">Nothing saved.</li>}
                                        {countries.map(([cc, n]) => (
                                            <li key={cc} className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">
                                                +{cc} <span className="ml-1 font-semibold tabular-nums text-gray-900">{n}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
                        )}

                        {/* Row-level table */}
                        <div className="mt-6 px-8 pb-6">
                            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200">
                                <div role="tablist" className="flex flex-wrap gap-1">
                                    {visibleTabs.map((k) => (
                                        <button
                                            key={k}
                                            role="tab"
                                            aria-selected={tab === k}
                                            onClick={() => setTab(k)}
                                            className={`-mb-px flex items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-medium ${
                                                tab === k ? `border-gray-900 text-gray-900` : "border-transparent text-gray-500 hover:text-gray-800"
                                            }`}
                                        >
                                            <span className={`h-2 w-2 rounded-full ${TAB_META[k].dot}`} />
                                            {TAB_META[k].label}
                                            <span className="tabular-nums text-gray-500">{tabCount(k)}</span>
                                        </button>
                                    ))}
                                </div>
                                <label className="relative mb-2">
                                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        placeholder="Search name, number or reason"
                                        className="w-72 rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-500"
                                    />
                                </label>
                            </div>

                            <div className="mt-3 max-h-[320px] overflow-auto rounded-lg border border-gray-200">
                                <table className="w-full min-w-[820px] text-left text-sm">
                                    <thead className="sticky top-0 bg-gray-50 text-gray-600">
                                        <tr>
                                            <th className="px-4 py-2.5 font-medium">Row</th>
                                            <th className="px-4 py-2.5 font-medium">Name</th>
                                            <th className="px-4 py-2.5 font-medium">Contact in file</th>
                                            <th className="px-4 py-2.5 font-medium">Saved as</th>
                                            <th className="px-4 py-2.5 font-medium">
                                                {tab === "skipped" || tab === "failed" ? "Reason" : "Notes"}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {rows.length === 0 && (
                                            <tr>
                                                <td colSpan={5} className="px-4 py-10 text-center text-gray-500">
                                                    {query ? "No rows match your search." : "No rows in this group."}
                                                </td>
                                            </tr>
                                        )}
                                        {rows.map((r, i) => {
                                            const text = [...r.reasons, ...r.warnings];
                                            return (
                                                <tr key={`${r.rowNumber}-${i}`} className="align-top hover:bg-gray-50">
                                                    <td className="px-4 py-2.5 tabular-nums text-gray-500">{r.rowNumber ?? "–"}</td>
                                                    <td className="px-4 py-2.5 text-gray-900">
                                                        {r.customerName || <span className="text-gray-400">(empty)</span>}
                                                    </td>
                                                    <td className="px-4 py-2.5 font-mono text-[13px] text-gray-700">
                                                        {r.contactRaw || <span className="text-gray-400">(empty)</span>}
                                                    </td>
                                                    <td className="px-4 py-2.5 font-mono text-[13px] text-gray-700">
                                                        {r.contactNumber ? (
                                                            <>
                                                                +{r.countryCode} {r.contactNumber}
                                                                {r.noContact && (
                                                                    <span className="ml-2 rounded-full bg-violet-100 px-2 py-0.5 font-sans text-[11px] font-medium text-violet-700">
                                                                        No contact
                                                                    </span>
                                                                )}
                                                            </>
                                                        ) : "–"}
                                                    </td>
                                                    <td className="px-4 py-2.5">
                                                        {text.length === 0 ? (
                                                            <span className="text-gray-400">–</span>
                                                        ) : (
                                                            <ul className="space-y-1">
                                                                {text.map((t, j) => (
                                                                    <li key={j} className={`flex gap-1.5 ${TAB_META[tab].tone}`}>
                                                                        <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                                                                        <span>{t}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            {tab === "imported" && report.rows.importedTruncated && (
                                <p className="mt-2 text-xs text-gray-500">
                                    Showing the first 200 imported rows. Download the summary for the full list.
                                </p>
                            )}
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 bg-gray-50 px-8 py-4">
                    <div className="flex gap-3">
                        {result.file && (
                            <a
                                href={`${fileBaseUrl}${result.file}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
                            >
                                <Download size={16} /> Download full summary (.xlsx)
                            </a>
                        )}
                        {problemCount > 0 && (
                            <button
                                onClick={copyReasons}
                                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
                            >
                                <Copy size={16} /> Copy rejected rows
                            </button>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-lg cursor-pointer bg-[var(--color-primary,#2563eb)] px-6 py-2 text-sm font-semibold text-white hover:opacity-90"
                    >
                        Go to customers
                    </button>
                </div>
            </div>
        </div>
    );
}

function Stat({ icon, dot, label, value }: { icon: React.ReactNode; dot: string; label: string; value: number }) {
    return (
        <div className="flex items-center gap-3">
            <span className={`h-9 w-1 rounded-full ${dot}`} />
            <div>
                <dt className="flex items-center gap-1.5 text-xs text-gray-500">
                    {icon}
                    {label}
                </dt>
                <dd className="text-2xl font-bold tabular-nums text-gray-900">{value}</dd>
            </div>
        </div>
    );
}