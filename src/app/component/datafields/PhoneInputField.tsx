// app/component/datafields/PhoneInputField.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { COUNTRY_CODES, isoToFlagEmoji, CountryCodeOption, getCountryLenRule } from "@/app/utils/countryCodes";

interface PhoneInputFieldProps {
  className?: string;
  label: string;
  numberValue: string;
  countryCode: string;
  onNumberChange: (value: string) => void;
  onCountryChange: (code: string) => void;
  error?: string;
}

// Ensures flag glyphs render even on platforms (mainly Windows) whose
// default UI font has no flag coverage — falls back through fonts that do.
const FLAG_FONT_STACK =
  "'Noto Color Emoji', 'Segoe UI Emoji', 'Apple Color Emoji', 'Twemoji Mozilla', sans-serif";

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  className,
  label,
  numberValue,
  countryCode,
  onNumberChange,
  onCountryChange,
  error,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selected: CountryCodeOption =
    COUNTRY_CODES.find((c) => c.code === countryCode) || COUNTRY_CODES[0];

  const filtered = COUNTRY_CODES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.includes(search)
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isLabelUp = focused || dropdownOpen || !!numberValue || !!error;
  const rule = getCountryLenRule(countryCode);

  return (
    <div className={`relative w-full ${className || ""}`} ref={wrapperRef}>
      <div
        className={`peer flex items-stretch w-full border rounded-sm bg-transparent overflow-visible
          ${error ? "border-red-500" : focused ? "border-blue-500" : "border-gray-400 max-sm:dark:border-gray-700"}`}
      >
        {/* Country selector */}
        <button
          type="button"
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="flex items-center cursor-pointer gap-1 px-3 py-3 border-r border-gray-300 max-sm:dark:border-gray-700 shrink-0 hover:bg-gray-50 max-sm:dark:hover:bg-white/5 rounded-l-sm"
        >
          <span className="text-lg leading-none" style={{ fontFamily: FLAG_FONT_STACK }}>
            {isoToFlagEmoji(selected.iso2)}
          </span>
          <span className="text-sm text-gray-600 max-sm:dark:text-gray-400">+{selected.code}</span>
          <ChevronDown size={14} className="text-gray-400" />
        </button>

        {/* Number input — relative wrapper so the label anchors to THIS, not the whole field */}
        <div className="relative flex-1 min-w-0">
          <input
            type="text"
            inputMode="numeric"
            value={numberValue}
            onChange={(e) => {
              const digitsOnly = e.target.value.replace(/[^0-9]/g, "");
              const capped = digitsOnly.slice(0, rule.maxLen);
              onNumberChange(capped);
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder=" "
            className="w-full bg-transparent py-3 px-4 outline-none min-w-0"
          />

          {/* Floating label — now positioned relative to the input itself */}
          <p
            className={`absolute left-2 bg-white max-sm:dark:bg-[var(--color-childbgdark)] px-1 text-sm transition-all duration-300 pointer-events-none
              ${isLabelUp ? "-top-2 text-xs text-blue-500" : "top-3 text-base text-gray-400"}`}
          >
            {label}
          </p>
        </div>
      </div>

      {/* Dropdown list */}
      {dropdownOpen && (
        <div className="absolute z-20 mt-1 w-72 max-h-72 overflow-y-auto bg-white max-sm:dark:bg-[var(--color-childbgdark)] border border-gray-300 max-sm:dark:border-gray-700 rounded-md shadow-lg">
          <input
            autoFocus
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search country..."
            className="w-full p-2 border-b border-gray-200 max-sm:dark:border-gray-700 outline-none bg-transparent text-sm"
          />
          {filtered.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => {
                onCountryChange(c.code);
                if (numberValue.length > c.maxLen) {
                  onNumberChange(numberValue.slice(0, c.maxLen));
                }
                setDropdownOpen(false);
                setSearch("");
              }}
              className={`flex items-center gap-2 cursor-pointer w-full px-3 py-2 text-left text-sm hover:bg-gray-100 max-sm:dark:hover:bg-white/10
                ${c.code === countryCode ? "bg-blue-50 max-sm:dark:bg-blue-900/20" : ""}`}
            >
              <span className="text-lg leading-none" style={{ fontFamily: FLAG_FONT_STACK }}>
                {isoToFlagEmoji(c.iso2)}
              </span>
              <span className="flex-1">{c.name}</span>
              <span className="text-gray-400">+{c.code}</span>
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="p-3 text-sm text-gray-400">No matches</p>
          )}
        </div>
      )}

      {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
    </div>
  );
};

export default PhoneInputField;