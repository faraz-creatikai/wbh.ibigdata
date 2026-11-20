"use client";

import { useState } from "react";
import { Loader2, Play } from "lucide-react";
import type { Journey } from "@/types/journey";

export default function RunJourneyButton({ journey }: { journey: Journey }) {
  const [running, setRunning] = useState(false);
  const isActive = journey.status === "active";

  const handleRun = async () => {
    if (running) return;
    setRunning(true);

    try {
      const res = await fetch(
        "https://apiwbh.ibigdata.in/api/journey/worker/run",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_JOURNEY_WORKER_TOKEN}`,
          },
        }
      );

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.message || "Failed to run journey");
      }

      alert(`"${journey.name}" has been started again.`);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to run journey");
    } finally {
      setRunning(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleRun}
      disabled={!isActive || running}
      title={
        isActive
          ? "Run this journey again"
          : "Activate this journey before running it"
      }
      aria-label={`Run ${journey.name}`}
      className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[#DCE7EB] bg-white px-2.5 text-[11px] font-semibold text-[#168B83] transition hover:border-[#168B83] hover:bg-[#EAF8F6] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#DCE7EB] disabled:hover:bg-white"
    >
      {running ? (
        <Loader2 size={14} className="animate-spin" />
      ) : (
        <Play size={14} fill="currentColor" />
      )}
      <span>Run</span>
    </button>
  );
}