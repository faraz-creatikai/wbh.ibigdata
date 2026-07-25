import { COUNTRY_CODES, countryCodes } from "./countryCodes";

export const trimCountryCodeHelper2 = (num: string) => {
  if (!num) return "";


  let trimmedNum = num;

  for (const code of countryCodes) {
    if (trimmedNum.startsWith(code)) {
      trimmedNum = trimmedNum.slice(code.length);
      break; // stop after first match
    }
  }

  return trimmedNum;
};

export const trimCountryCodeHelper = (num: string): string => {
  if (!num) return "";
  let digits = num.trim().replace(/[^0-9]/g, "");

  // strip a leading '00' international prefix
  if (digits.startsWith("00")) digits = digits.slice(2);

  const sorted = [...COUNTRY_CODES].sort((a, b) => b.code.length - a.code.length);
  for (const { code, minLen, maxLen } of sorted) {
    if (digits.startsWith(code)) {
      const rest = digits.slice(code.length);
      if (rest.length >= minLen && rest.length <= maxLen) return rest;
    }
  }
  return digits;
};
