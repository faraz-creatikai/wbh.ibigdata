'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { getCustomer } from '@/store/customer';
import { getCampaign } from '@/store/masters/campaign/campaign';
import { getTypesByCampaign } from '@/store/masters/types/types';
import { getSubtypeByCampaignAndType } from '@/store/masters/subtype/subtype';
import { getCity } from '@/store/masters/city/city';
import { getLocationByCity } from '@/store/masters/location/location';
import { getsubLocationByCityLoc } from '@/store/masters/sublocation/sublocation';
import CustomDropdown, { DropdownOption } from '../CustomDropdown';
import { assignCustomer } from '@/store/customer';
import toast from 'react-hot-toast';

interface RecipientItem {
  _id: string;
  name: string;
  email?: string;
  role?: string; // "city_admin" | "user" | ...
  city?: string;
}

export interface AssignCustomersPopupProps {
  isOpen: boolean;
  onClose: () => void;

  // Recipients (Step 1) — owned by parent, same as your old fetchUsers/users flow
  users: RecipientItem[];
  isFetchingUsers: boolean;
  fetchUsers: () => void;

  // Optional: if the admin pre-selected rows in the customer table before
  // clicking "Assign", pre-check them in Step 2 (still fully editable there)
  initialSelectedCustomerIds?: string[];

  onAssigned?: () => void; // e.g. getCustomers()
}

const PAGE_SIZE = 20;

const SearchIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" strokeWidth={2} />
    <path d="m21 21-4.35-4.35" strokeWidth={2} strokeLinecap="round" />
  </svg>
);
const XIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const ChevronLeft = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);
const Spinner = ({ className = '' }: { className?: string }) => (
  <div className={`rounded-full border-2 border-current border-t-transparent animate-spin ${className}`} />
);
const CheckboxIcon = ({ checked, indeterminate }: { checked: boolean; indeterminate?: boolean }) => (
  <div
    className="w-4 h-4 rounded-[4px] flex items-center justify-center flex-shrink-0 transition-all duration-150"
    style={{
      background: checked ? 'var(--color-primary)' : indeterminate ? '#bae6fd' : '#fff',
      border: checked ? '2px solid var(--color-primary)' : indeterminate ? '2px solid var(--color-primary)' : '2px solid #cbd5e1',
    }}
  >
    {checked && (
      <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none">
        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
    {!checked && indeterminate && (
      <div className="w-2 h-0.5 rounded-full" style={{ background: 'var(--color-primary)' }} />
    )}
  </div>
);

const RoleBadge = ({ role }: { role?: string }) => {
  if (!role) return null;
  const isCityAdmin = role === 'city_admin';
  return (
    <span
      className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${
        isCityAdmin ? 'bg-indigo-50 text-indigo-700' : 'bg-teal-50 text-teal-700'
      }`}
    >
      {isCityAdmin ? 'City Admin' : 'User'}
    </span>
  );
};

const AssignCustomersPopup: React.FC<AssignCustomersPopupProps> = ({
  isOpen,
  onClose,
  users,
  isFetchingUsers,
  fetchUsers,
  initialSelectedCustomerIds = [],
  onAssigned,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [action, setAction] = useState<'assign' | 'remove'>('assign');

  // ── Step 1: recipients ──
  const [recipientSearch, setRecipientSearch] = useState('');
  const [selectedRecipients, setSelectedRecipients] = useState<Set<string>>(new Set());

  // ── Step 2: customers ──
  const [customersList, setCustomersList] = useState<any[]>([]);
  const [loadingCustomers, setLoadingCustomers] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const [campaigns, setCampaigns] = useState<DropdownOption[]>([]);
  const [types, setTypes] = useState<DropdownOption[]>([]);
  const [subtypes, setSubtypes] = useState<DropdownOption[]>([]);
  const [citys, setCitys] = useState<DropdownOption[]>([]);
  const [locations, setLocations] = useState<DropdownOption[]>([]);
  const [sublocations, setSublocations] = useState<DropdownOption[]>([]);

  const [loadingCampaigns, setLoadingCampaigns] = useState(false);
  const [loadingTypes, setLoadingTypes] = useState(false);
  const [loadingSubtypes, setLoadingSubtypes] = useState(false);
  const [loadingCity, setLoadingCity] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [loadingSubLocation, setLoadingSubLocation] = useState(false);

  const [filterCampaign, setFilterCampaign] = useState<DropdownOption | null>(null);
  const [filterType, setFilterType] = useState<DropdownOption | null>(null);
  const [filterSubType, setFilterSubType] = useState<DropdownOption | null>(null);
  const [filterCity, setFilterCity] = useState<DropdownOption | null>(null);
  const [filterLocation, setFilterLocation] = useState<DropdownOption | null>(null);
  const [filterSubLocation, setFilterSubLocation] = useState<DropdownOption | null>(null);

  const activeFilterCount =
    (filterCampaign ? 1 : 0) + (filterType ? 1 : 0) + (filterSubType ? 1 : 0) +
    (filterCity ? 1 : 0) + (filterLocation ? 1 : 0) + (filterSubLocation ? 1 : 0);

  const clearAllFilters = () => {
    setFilterCampaign(null); setFilterType(null); setFilterSubType(null);
    setFilterCity(null); setFilterLocation(null); setFilterSubLocation(null);
  };

  // ── Reset + bootstrap on open ──
  useEffect(() => {
    if (!isOpen) return;

    setStep(1);
    setAction('assign');
    setRecipientSearch('');
    setSelectedRecipients(new Set());
    setSearch('');
    setSelected(new Set(initialSelectedCustomerIds));
    setSuccessMsg('');
    setVisibleCount(PAGE_SIZE);
    clearAllFilters();
    setCustomersList([]);

    fetchUsers(); // reuse your existing fetch — same source as the old ListPopup

    const loadMasters = async () => {
      setLoadingCampaigns(true);
      setLoadingCity(true);
      try {
        const [campRes, cityRes] = await Promise.all([getCampaign(), getCity()]);
        if (campRes) setCampaigns(campRes.map((c: any) => ({ _id: c._id, Name: c.Name })));
        if (cityRes) setCitys(cityRes.map((c: any) => ({ _id: c._id, Name: c.Name })));
      } finally {
        setLoadingCampaigns(false);
        setLoadingCity(false);
      }
    };
    loadMasters();
  }, [isOpen]);

  // Load customers only once entering step 2 (avoid wasted call if user cancels on step 1)
  useEffect(() => {
    if (!isOpen || step !== 2 || customersList.length > 0) return;
    const load = async () => {
      setLoadingCustomers(true);
      try {
        const res: any = await getCustomer();
        if (res) setCustomersList(Array.isArray(res.data) ? res.data : (Array.isArray(res) ? res : []));
      } finally {
        setLoadingCustomers(false);
        setTimeout(() => searchRef.current?.focus(), 60);
      }
    };
    load();
  }, [isOpen, step]);

  useEffect(() => {
    setFilterType(null); setFilterSubType(null); setTypes([]); setSubtypes([]);
    if (!filterCampaign) return;
    const load = async () => {
      setLoadingTypes(true);
      try {
        const res = await getTypesByCampaign(filterCampaign._id);
        if (res) setTypes(res.map((t: any) => ({ _id: t._id, Name: t.Name })));
      } finally { setLoadingTypes(false); }
    };
    load();
  }, [filterCampaign]);

  useEffect(() => {
    setFilterSubType(null); setSubtypes([]);
    if (!filterCampaign || !filterType) return;
    const load = async () => {
      setLoadingSubtypes(true);
      try {
        const res = await getSubtypeByCampaignAndType(filterCampaign._id, filterType._id);
        if (res) setSubtypes(res.map((s: any) => ({ _id: s._id, Name: s.Name })));
      } finally { setLoadingSubtypes(false); }
    };
    load();
  }, [filterType, filterCampaign]);

  useEffect(() => {
    setFilterLocation(null); setFilterSubLocation(null); setLocations([]); setSublocations([]);
    if (!filterCity) return;
    const load = async () => {
      setLoadingLocation(true);
      try {
        const res = await getLocationByCity(filterCity._id);
        if (res) setLocations(res.map((t: any) => ({ _id: t._id, Name: t.Name })));
      } finally { setLoadingLocation(false); }
    };
    load();
  }, [filterCity]);

  useEffect(() => {
    setFilterSubLocation(null); setSublocations([]);
    if (!filterCity || !filterLocation) return;
    const load = async () => {
      setLoadingSubLocation(true);
      try {
        const res = await getsubLocationByCityLoc(filterCity._id, filterLocation._id);
        if (res) setSublocations(res.map((s: any) => ({ _id: s._id, Name: s.Name })));
      } finally { setLoadingSubLocation(false); }
    };
    load();
  }, [filterLocation, filterCity]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [search, filterCampaign, filterType, filterSubType, filterCity, filterLocation, filterSubLocation]);

  // ── Step 1 derived data ──
  const filteredRecipients = useMemo(() => {
    if (!recipientSearch.trim()) return users;
    const q = recipientSearch.toLowerCase();
    return users.filter(
      (u) =>
        u.name?.toLowerCase().includes(q) ||
        u.email?.toLowerCase().includes(q) ||
        u.city?.toLowerCase().includes(q) ||
        u.role?.toLowerCase().includes(q)
    );
  }, [users, recipientSearch]);

  const toggleRecipient = (id: string) => {
    setSelectedRecipients((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const recipientLabel = useMemo(() => {
    if (selectedRecipients.size === 0) return '';
    const names = users
      .filter((u) => selectedRecipients.has(u._id))
      .map((u) => u.name);
    if (names.length <= 2) return names.join(', ');
    return `${names[0]}, ${names[1]} +${names.length - 2} more`;
  }, [selectedRecipients, users]);

  // ── Step 2 derived data ──
  const filtered = useMemo(() => {
    let result = customersList;
    if (filterCampaign) result = result.filter((c) => c.Campaign === filterCampaign.Name);
    if (filterType) result = result.filter((c) => c.CustomerType === filterType.Name);
    if (filterSubType) result = result.filter((c) => c.CustomerSubType === filterSubType.Name);
    if (filterCity) result = result.filter((c) => c.City === filterCity.Name);
    if (filterLocation) result = result.filter((c) => c.Location === filterLocation.Name);
    if (filterSubLocation) result = result.filter((c) => c.SubLocation === filterSubLocation.Name);

    if (!search.trim()) return result;
    const q = search.toLowerCase();
    return result.filter(
      (c) =>
        c.customerName?.toLowerCase().includes(q) ||
        c.Campaign?.toLowerCase().includes(q) ||
        c.CustomerType?.toLowerCase().includes(q) ||
        c.Location?.toLowerCase().includes(q)
    );
  }, [customersList, search, filterCampaign, filterType, filterSubType, filterCity, filterLocation, filterSubLocation]);

  const visibleFiltered = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const remaining = filtered.length - visibleCount;

  const allSelected = filtered.length > 0 && filtered.every((c) => selected.has(c._id));
  const someSelected = filtered.some((c) => selected.has(c._id)) && !allSelected;

  const toggleOne = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (allSelected) filtered.forEach((c) => next.delete(c._id));
      else filtered.forEach((c) => next.add(c._id));
      return next;
    });
  };

  const goToStep2 = () => {
    if (selectedRecipients.size === 0) {
      toast.error('Please select at least one recipient');
      return;
    }
    setStep(2);
  };

  const handleSubmit = async () => {
    if (selected.size === 0) {
      toast.error('Please select at least one customer');
      return;
    }
    if (submitting) return;
    setSubmitting(true);

    try {
      const payload = {
        assignToId: Array.from(selectedRecipients),
        action,
        customerIds: Array.from(selected),
      };

      const result = await assignCustomer(payload);

      if (result?.success) {
        setSuccessMsg(action === 'remove' ? 'Unassigned!' : 'Assigned!');
        toast.success(
          action === 'remove' ? 'Customers unassigned successfully' : 'Customers assigned successfully'
        );
        setTimeout(() => {
          setSuccessMsg('');
          onAssigned?.();
          onClose();
        }, 900);
      } else {
        toast.error(result?.message || 'Something went wrong');
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: 'rgba(15,23,42,0.4)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-2xl bg-white flex flex-col overflow-hidden"
        style={{
          borderRadius: '20px 20px 0 0',
          maxHeight: '96dvh',
          height: '96dvh',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.12)',
          animation: 'sheet-up 0.25s cubic-bezier(0.34,1.56,0.64,1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 flex-shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            {step === 2 && (
              <button
                onClick={() => setStep(1)}
                className="w-8 h-8 -ml-1 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer flex-shrink-0"
              >
                <ChevronLeft />
              </button>
            )}
            <div className="min-w-0">
              <h3 className="text-[16px] font-bold text-gray-900 leading-tight tracking-tight">
                {step === 1
                  ? action === 'remove'
                    ? 'Remove From Whom?'
                    : 'Assign To Whom?'
                  : action === 'remove'
                  ? 'Remove Which Customers?'
                  : 'Assign Which Customers?'}
              </h3>
              {step === 2 && recipientLabel && (
                <p className="text-[12px] text-gray-400 mt-0.5 truncate">
                  {action === 'remove' ? 'Removing from' : 'Assigning to'}{' '}
                  <span className="font-semibold text-gray-600">{recipientLabel}</span>
                </p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer flex-shrink-0"
          >
            <XIcon />
          </button>
        </div>

        {/* ── Step indicator ── */}
        <div className="flex items-center gap-2 px-5 pb-3 flex-shrink-0">
          <div className={`h-1.5 flex-1 rounded-full transition-colors ${step >= 1 ? 'bg-[var(--color-primary)]' : 'bg-gray-200'}`} />
          <div className={`h-1.5 flex-1 rounded-full transition-colors ${step >= 2 ? 'bg-[var(--color-primary)]' : 'bg-gray-200'}`} />
        </div>

        {/* ── Assign / Remove toggle (applies globally) ── */}
        <div className="px-5 pb-3 flex-shrink-0">
          <div className="flex gap-1 p-1 bg-gray-100 rounded-lg text-sm font-medium w-fit">
            <button
              onClick={() => setAction('assign')}
              className={`px-4 py-1.5 rounded-md cursor-pointer transition-all ${
                action === 'assign' ? 'bg-white text-[var(--color-primary)] shadow-sm' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Assign
            </button>
            <button
              onClick={() => setAction('remove')}
              className={`px-4 py-1.5 rounded-md cursor-pointer transition-all ${
                action === 'remove' ? 'bg-white text-red-500 shadow-sm' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Remove
            </button>
          </div>
        </div>

        {/* ══════════════ STEP 1: RECIPIENTS ══════════════ */}
        {step === 1 && (
          <>
            <div className="px-5 pb-2 flex-shrink-0">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  value={recipientSearch}
                  onChange={(e) => setRecipientSearch(e.target.value)}
                  placeholder="Search by name, email, city, or role…"
                  className="w-full pl-9 pr-4 py-2.5 text-[13px] rounded-xl border outline-none transition-all bg-gray-50 border-gray-200 focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 text-gray-800"
                />
              </div>
            </div>

            {selectedRecipients.size > 0 && (
              <div className="px-5 pb-2 flex-shrink-0">
                <span className="text-[11px] font-semibold text-[var(--color-primary)] bg-[var(--color-primary-lighter)] px-2.5 py-1 rounded-full">
                  {selectedRecipients.size} selected
                </span>
              </div>
            )}

            <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#e2e8f0 transparent' }}>
              {isFetchingUsers ? (
                <div className="flex flex-col items-center justify-center py-16 gap-3">
                  <Spinner className="w-7 h-7 text-[var(--color-primary-light)] border-t-[var(--color-primary)]" />
                  <p className="text-[13px] text-gray-400">Loading recipients…</p>
                </div>
              ) : filteredRecipients.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 gap-2">
                  <p className="text-[13px] text-gray-400">No matching city admins or users found.</p>
                </div>
              ) : (
                <ul className="divide-y divide-gray-50">
                  {filteredRecipients.map((u) => {
                    const isSelected = selectedRecipients.has(u._id);
                    return (
                      <li
                        key={u._id}
                        onClick={() => toggleRecipient(u._id)}
                        className="flex items-center cursor-pointer gap-3 px-5 py-3.5 transition-colors hover:bg-gray-50"
                        style={{ background: isSelected ? '#f0f9ff' : 'transparent' }}
                      >
                        <CheckboxIcon checked={isSelected} />
                        <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-lighter)] text-[var(--color-primary)] flex items-center justify-center font-bold text-[12px] flex-shrink-0">
                          {u.name?.charAt(0).toUpperCase() || '?'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-[13px] font-semibold text-gray-800 truncate">{u.name}</p>
                            <RoleBadge role={u.role} />
                          </div>
                          <p className="text-[11px] text-gray-400 truncate mt-0.5">
                            {[u.email, u.city].filter(Boolean).join(' · ')}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="flex-shrink-0 border-t border-gray-100 px-5 py-4 bg-[#fafafa]">
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl cursor-pointer text-[13px] font-semibold border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={goToStep2}
                  disabled={selectedRecipients.size === 0}
                  className="flex-[2] py-3 rounded-xl cursor-pointer text-[13px] font-bold text-white transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: 'var(--color-primary)' }}
                >
                  Next: Select Customers ({selectedRecipients.size})
                </button>
              </div>
            </div>
          </>
        )}

        {/* ══════════════ STEP 2: CUSTOMERS ══════════════ */}
        {step === 2 && (
          <>
            <div className="px-5 pb-2 flex-shrink-0">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <SearchIcon />
                </span>
                <input
                  ref={searchRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search customer name, location, type…"
                  className="w-full pl-9 pr-4 py-2.5 text-[13px] rounded-xl border outline-none transition-all bg-gray-50 border-gray-200 focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 text-gray-800"
                />
              </div>
            </div>

            <div className="px-5 pb-3 flex-shrink-0">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Filters</span>
                {activeFilterCount > 0 && (
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md transition-colors cursor-pointer text-[var(--color-primary)] bg-[var(--color-primary-lighter)] hover:bg-[var(--color-primary-light)]"
                  >
                    Clear All ({activeFilterCount})
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <CustomDropdown options={campaigns} value={filterCampaign?._id ?? null} onChange={(opt) => setFilterCampaign(opt)} placeholder="Campaign" loading={loadingCampaigns} />
                <CustomDropdown options={types} value={filterType?._id ?? null} onChange={(opt) => setFilterType(opt)} placeholder="Type" loading={loadingTypes} disabled={!filterCampaign} />
                <CustomDropdown options={subtypes} value={filterSubType?._id ?? null} onChange={(opt) => setFilterSubType(opt)} placeholder="Sub-type" loading={loadingSubtypes} disabled={!filterType} />
                <CustomDropdown options={citys} value={filterCity?._id ?? null} onChange={(opt) => setFilterCity(opt)} placeholder="City" loading={loadingCity} />
                <CustomDropdown options={locations} value={filterLocation?._id ?? null} onChange={(opt) => setFilterLocation(opt)} placeholder="Location" loading={loadingLocation} disabled={!filterCity} />
                <CustomDropdown options={sublocations} value={filterSubLocation?._id ?? null} onChange={(opt) => setFilterSubLocation(opt)} placeholder="Sub-location" loading={loadingSubLocation} disabled={!filterLocation} />
              </div>
            </div>

            {!loadingCustomers && filtered.length > 0 && (
              <div
                className="flex items-center gap-2.5 px-5 py-2.5 border-t border-b border-gray-100 flex-shrink-0 cursor-pointer transition-colors"
                style={{ background: someSelected || allSelected ? '#f0f9ff' : '#fafafa' }}
                onClick={toggleAll}
              >
                <CheckboxIcon checked={allSelected} indeterminate={someSelected} />
                <span className="text-[12px] font-semibold text-gray-700 select-none">
                  {allSelected ? 'Deselect all customers' : 'Select all customers'}
                </span>
                <span className="ml-auto text-[11px] font-medium text-gray-400">{filtered.length} available</span>
              </div>
            )}

            <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#e2e8f0 transparent' }}>
              {loadingCustomers ? (
                <div className="flex flex-col items-center justify-center py-16 gap-3">
                  <Spinner className="w-7 h-7 text-[var(--color-primary-light)] border-t-[var(--color-primary)]" />
                  <p className="text-[13px] text-gray-400">Loading customers…</p>
                </div>
              ) : filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 gap-2">
                  <p className="text-[13px] text-gray-400">No customers found.</p>
                  {activeFilterCount > 0 && (
                    <button onClick={clearAllFilters} className="text-[12px] font-semibold text-[var(--color-primary)] cursor-pointer">
                      Clear filters
                    </button>
                  )}
                </div>
              ) : (
                <ul className="divide-y divide-gray-50">
                  {visibleFiltered.map((c) => {
                    const isSelected = selected.has(c._id);
                    return (
                      <li
                        key={c._id}
                        onClick={() => toggleOne(c._id)}
                        className="flex items-center cursor-pointer gap-3 px-5 py-3.5 transition-colors hover:bg-gray-50"
                        style={{ background: isSelected ? '#f0f9ff' : 'transparent' }}
                      >
                        <CheckboxIcon checked={isSelected} />
                        <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-lighter)] text-[var(--color-primary)] flex items-center justify-center font-bold text-[12px] flex-shrink-0">
                          {c.customerName?.charAt(0).toUpperCase() || 'C'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-semibold text-gray-800 truncate">{c.customerName || 'Unnamed Customer'}</p>
                          <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                            {c.Campaign && <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-700">{c.Campaign}</span>}
                            {c.CustomerType && <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700">{c.CustomerType}</span>}
                            {(c.Location || c.City) && (
                              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-violet-50 text-violet-700 truncate max-w-[140px]">
                                📍 {c.Location || c.City}
                              </span>
                            )}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}

              {hasMore && (
                <button
                  onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
                  className="w-full cursor-pointer py-3 text-[12px] font-medium border-t border-gray-100 transition-colors text-gray-500 hover:text-[var(--color-primary)] hover:bg-gray-50"
                >
                  Load {Math.min(PAGE_SIZE, remaining)} more ({remaining} left)
                </button>
              )}
            </div>

            <div className="flex-shrink-0 border-t border-gray-100 px-5 py-4 bg-[#fafafa]">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 rounded-xl cursor-pointer text-[13px] font-semibold border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={selected.size === 0 || submitting}
                  className="flex-[2] py-3 rounded-xl cursor-pointer text-[13px] font-bold text-white flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    background: action === 'remove' ? '#ef4444' : 'var(--color-primary)',
                    boxShadow: selected.size > 0 ? '0 4px 12px rgba(2,132,199,0.3)' : 'none',
                  }}
                >
                  {submitting ? (
                    <Spinner className="w-4 h-4 border-white border-t-transparent/30" />
                  ) : successMsg ? (
                    successMsg
                  ) : (
                    `${action === 'remove' ? 'Remove' : 'Assign'} ${selected.size} Customer${selected.size === 1 ? '' : 's'}`
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes sheet-up {
          from { transform: translateY(24px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default AssignCustomersPopup;