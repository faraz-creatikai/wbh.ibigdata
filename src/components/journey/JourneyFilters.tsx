import { Search, SlidersHorizontal } from "lucide-react";
import type {
  JourneyChannelFilter,
  JourneySortOption,
  JourneyStatusFilter,
} from "@/types/journey";

interface JourneyFiltersProps {
  status: JourneyStatusFilter;
  onStatusChange: (status: JourneyStatusFilter) => void;
  search: string;
  onSearchChange: (value: string) => void;
  channel: JourneyChannelFilter;
  onChannelChange: (channel: JourneyChannelFilter) => void;
  sort: JourneySortOption;
  onSortChange: (sort: JourneySortOption) => void;
}

const statusOptions: { label: string; value: JourneyStatusFilter }[] = [
  { label: "All Journeys", value: "all" },
  { label: "Active", value: "active" },
  { label: "Paused", value: "paused" },
  { label: "Draft", value: "draft" },
];

export default function JourneyFilters({
  status,
  onStatusChange,
  search,
  onSearchChange,
  channel,
  onChannelChange,
  sort,
  onSortChange,
}: JourneyFiltersProps) {
  return (
    <section className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between" aria-label="Filter journeys">
     
          <div className="flex w-full flex-col gap-2 xl:w-auto xl:min-w-[420px]">
        <label className="relative w-full">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-crm-muted" />
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search journeys..."
            aria-label="Search journeys"
            className="h-10 w-full rounded-lg border border-crm-border bg-white pl-9 pr-3 text-[12px] text-crm-text outline-none transition placeholder:text-[#9AA9B9] focus:border-crm-primary focus:ring-2 focus:ring-crm-primary/10"
          />
        </label>

        <div className="grid grid-cols-2 gap-2">
          <label className="relative flex min-w-0 items-center gap-2 rounded-lg border border-crm-border bg-white px-3">
            <SlidersHorizontal size={15} className="shrink-0 text-crm-muted" />
            <span className="shrink-0 text-[12px] text-crm-muted">Channel</span>
            <select
              value={channel}
              onChange={(event) => onChannelChange(event.target.value as JourneyChannelFilter)}
              aria-label="Filter by channel"
              className="h-10 w-full min-w-0 bg-transparent text-[12px] font-medium text-crm-text outline-none"
            >
              <option value="all">All channels</option>
              <option value="baileys_whatsapp">Baileys WhatsApp</option>
              <option value="meta_whatsapp">Meta WhatsApp</option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
            </select>
          </label>

          <label className="flex min-w-0 items-center gap-2 rounded-lg border border-crm-border bg-white px-3">
            <span className="shrink-0 text-[12px] text-crm-muted">Sort</span>
            <select
              value={sort}
              onChange={(event) => onSortChange(event.target.value as JourneySortOption)}
              aria-label="Sort journeys"
              className="h-10 w-full min-w-0 bg-transparent text-[12px] font-medium text-crm-text outline-none"
            >
              <option value="updated_desc">Recently updated</option>
              <option value="updated_asc">Oldest updated</option>
              <option value="name_asc">Name A–Z</option>
              <option value="enrolled_desc">Most enrolled</option>
            </select>
          </label>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-1 rounded-lg bg-[#F1F5F9] p-1">
        {statusOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onStatusChange(option.value)}
            aria-pressed={status === option.value}
            className={`rounded-md px-3 py-2 text-[12px] font-semibold transition ${
              status === option.value
                ? "bg-white text-crm-primary-dark shadow-sm"
                : "text-crm-muted hover:text-crm-text"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

 
    </section>
  );
}