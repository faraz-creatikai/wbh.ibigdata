import { COUNTRY_CODES, countryCodes, getCountryLenRule } from "./countryCodes";

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

export const trimCountryCodeHelper = (
  num: string,
  countryCode: string
): string => {
  if (!num) return "";

  let digits = num.trim().replace(/[^0-9]/g, "");

  // Remove international 00 prefix only when followed by the selected country code
  if (digits.startsWith(`00${countryCode}`)) {
    digits = digits.slice(2);
  }

  // Remove selected country code if present
  if (digits.startsWith(countryCode)) {
    const rest = digits.slice(countryCode.length);
    const { minLen, maxLen } = getCountryLenRule(countryCode);

    if (rest.length >= minLen && rest.length <= maxLen) {
      return rest;
    }
  }

  return digits;
};
