export const countryCodes = [
    "+91",   // India
    "+1",    // USA, Canada
    "+7",    // Russia, Kazakhstan
    "+20",   // Egypt
    "+27",   // South Africa
    "+30",   // Greece
    "+31",   // Netherlands
    "+32",   // Belgium
    "+33",   // France
    "+34",   // Spain
    "+36",   // Hungary
    "+39",   // Italy
    "+40",   // Romania
    "+41",   // Switzerland
    "+43",   // Austria
    "+44",   // UK
    "+45",   // Denmark
    "+46",   // Sweden
    "+47",   // Norway
    "+48",   // Poland
    "+49",   // Germany
    "+51",   // Peru
    "+52",   // Mexico
    "+53",   // Cuba
    "+54",   // Argentina
    "+55",   // Brazil
    "+56",   // Chile
    "+57",   // Colombia
    "+58",   // Venezuela
    "+60",   // Malaysia
    "+61",   // Australia
    "+62",   // Indonesia
    "+63",   // Philippines
    "+64",   // New Zealand
    "+65",   // Singapore
    "+66",   // Thailand
    "+81",   // Japan
    "+82",   // South Korea
    "+84",   // Vietnam
    "+86",   // China
    "+90",   // Turkey
    "+92",   // Pakistan
    "+93",   // Afghanistan
    "+94",   // Sri Lanka
    "+95",   // Myanmar
    "+98",   // Iran
    "+211",  // South Sudan
    "+212",  // Morocco
    "+213",  // Algeria
    "+216",  // Tunisia
    "+218",  // Libya
    "+220",  // Gambia
    "+221",  // Senegal
    "+222",  // Mauritania
    "+223",  // Mali
    "+224",  // Guinea
    "+225",  // Ivory Coast
    "+226",  // Burkina Faso
    "+227",  // Niger
    "+228",  // Togo
    "+229",  // Benin
    "+230",  // Mauritius
    "+231",  // Liberia
    "+232",  // Sierra Leone
    "+233",  // Ghana
    "+234",  // Nigeria
    "+235",  // Chad
    "+236",  // Central African Republic
    "+237",  // Cameroon
    "+238",  // Cape Verde
    "+239",  // Sao Tome and Principe
    "+240",  // Equatorial Guinea
    "+241",  // Gabon
    "+242",  // Congo
    "+243",  // DR Congo
    "+244",  // Angola
    "+245",  // Guinea-Bissau
    "+246",  // Diego Garcia
    "+247",  // Ascension
    "+248",  // Seychelles
    "+249",  // Sudan
    "+250",  // Rwanda
    "+251",  // Ethiopia
    "+252",  // Somalia
    "+253",  // Djibouti
    "+254",  // Kenya
    "+255",  // Tanzania
    "+256",  // Uganda
    "+257",  // Burundi
    "+258",  // Mozambique
    "+260",  // Zambia
    "+261",  // Madagascar
    "+262",  // Reunion
    "+263",  // Zimbabwe
    "+264",  // Namibia
    "+265",  // Malawi
    "+266",  // Lesotho
    "+267",  // Botswana
    "+268",  // Eswatini
    "+269",  // Comoros
    "+290",  // Saint Helena
    "+291",  // Eritrea
    "+297",  // Aruba
    "+298",  // Faroe Islands
    "+299",  // Greenland
    "+350",  // Gibraltar
    "+351",  // Portugal
    "+352",  // Luxembourg
    "+353",  // Ireland
    "+354",  // Iceland
    "+355",  // Albania
    "+356",  // Malta
    "+357",  // Cyprus
    "+358",  // Finland
    "+359",  // Bulgaria
    "+370",  // Lithuania
    "+371",  // Latvia
    "+372",  // Estonia
    "+373",  // Moldova
    "+374",  // Armenia
    "+375",  // Belarus
    "+376",  // Andorra
    "+377",  // Monaco
    "+378",  // San Marino
    "+379",  // Vatican
    "+380",  // Ukraine
    "+381",  // Serbia
    "+382",  // Montenegro
    "+383",  // Kosovo
    "+385",  // Croatia
    "+386",  // Slovenia
    "+387",  // Bosnia & Herzegovina
    "+389",  // North Macedonia
    "+420",  // Czech Republic
    "+421",  // Slovakia
    "+423",  // Liechtenstein
    "+500",  // Falkland Islands
    "+501",  // Belize
    "+502",  // Guatemala
    "+503",  // El Salvador
    "+504",  // Honduras
    "+505",  // Nicaragua
    "+506",  // Costa Rica
    "+507",  // Panama
    "+508",  // Saint Pierre & Miquelon
    "+509",  // Haiti
    "+590",  // Guadeloupe
    "+591",  // Bolivia
    "+592",  // Guyana
    "+593",  // Ecuador
    "+594",  // French Guiana
    "+595",  // Paraguay
    "+596",  // Martinique
    "+597",  // Suriname
    "+598",  // Uruguay
    "+599",  // Netherlands Antilles
    "+670",  // Timor-Leste
    "+672",  // Australian territories
    "+673",  // Brunei
    "+674",  // Nauru
    "+675",  // Papua New Guinea
    "+676",  // Tonga
    "+677",  // Solomon Islands
    "+678",  // Vanuatu
    "+679",  // Fiji
    "+680",  // Palau
    "+681",  // Wallis & Futuna
    "+682",  // Cook Islands
    "+683",  // Niue
    "+685",  // Samoa
    "+686",  // Kiribati
    "+687",  // New Caledonia
    "+688",  // Tuvalu
    "+689",  // French Polynesia
    "+690",  // Tokelau
    "+691",  // Micronesia
    "+692",  // Marshall Islands
    "+850",  // North Korea
    "+852",  // Hong Kong
    "+853",  // Macau
    "+855",  // Cambodia
    "+856",  // Laos
    "+880",  // Bangladesh
    "+886",  // Taiwan
    "+960",  // Maldives
    "+961",  // Lebanon
    "+962",  // Jordan
    "+963",  // Syria
    "+964",  // Iraq
    "+965",  // Kuwait
    "+966",  // Saudi Arabia
    "+967",  // Yemen
    "+968",  // Oman
    "+970",  // Palestine
    "+971",  // UAE
    "+972",  // Israel
    "+973",  // Bahrain
    "+974",  // Qatar
    "+975",  // Bhutan
    "+976",  // Mongolia
    "+977",  // Nepal
    "+992",  // Tajikistan
    "+993",  // Turkmenistan
    "+994",  // Azerbaijan
    "+995",  // Georgia
    "+996",  // Kyrgyzstan
    "+998",  // Uzbekistan
];



// app/utils/countryCodes.ts
export interface CountryCodeOption {
  code: string;   // dial code, no '+'
  iso2: string;   // for flag emoji
  name: string;
  minLen: number;
  maxLen: number;
}

export const COUNTRY_CODES: CountryCodeOption[] = [
  { code: "91",  iso2: "IN", name: "India",         minLen: 10, maxLen: 10 },
  { code: "971", iso2: "AE", name: "UAE",            minLen: 9,  maxLen: 9 },
  { code: "966", iso2: "SA", name: "Saudi Arabia",   minLen: 9,  maxLen: 9 },
  { code: "974", iso2: "QA", name: "Qatar",          minLen: 8,  maxLen: 8 },
  { code: "973", iso2: "BH", name: "Bahrain",        minLen: 8,  maxLen: 8 },
  { code: "968", iso2: "OM", name: "Oman",           minLen: 8,  maxLen: 8 },
  { code: "965", iso2: "KW", name: "Kuwait",         minLen: 7,  maxLen: 8 },
  { code: "977", iso2: "NP", name: "Nepal",          minLen: 10, maxLen: 10 },
  { code: "880", iso2: "BD", name: "Bangladesh",     minLen: 10, maxLen: 10 },
  { code: "92",  iso2: "PK", name: "Pakistan",       minLen: 10, maxLen: 10 },
  { code: "94",  iso2: "LK", name: "Sri Lanka",      minLen: 9,  maxLen: 9 },
  { code: "65",  iso2: "SG", name: "Singapore",      minLen: 8,  maxLen: 8 },
  { code: "60",  iso2: "MY", name: "Malaysia",       minLen: 9,  maxLen: 10 },
  { code: "44",  iso2: "GB", name: "United Kingdom", minLen: 10, maxLen: 10 },
  { code: "1",   iso2: "US", name: "US / Canada",    minLen: 10, maxLen: 10 },
  { code: "61",  iso2: "AU", name: "Australia",      minLen: 9,  maxLen: 9 },
];

export const DEFAULT_COUNTRY_CODE = "91";

export const getCountryLenRule = (code: string) =>
  COUNTRY_CODES.find((c) => c.code === code) ??
  { code, iso2: "", name: code, minLen: 6, maxLen: 11 };

// Converts "IN" -> 🇮🇳 using regional indicator symbols
export const isoToFlagEmoji = (iso2: string): string => {
  if (!iso2 || iso2.length !== 2) return "🏳️";
  return String.fromCodePoint(
    ...[...iso2.toUpperCase()].map((c) => 127397 + c.charCodeAt(0))
  );
};