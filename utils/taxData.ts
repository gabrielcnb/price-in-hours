// Average effective income tax rates, 2026
// Fonte: Revenue.ie, Gov.br, PwC Tax Summaries, Belastingdienst, GOV.UK
// Includes income tax + mandatory employee social contributions (not employer)
export interface Country {
  code: string;
  name: string;
  flag: string;
  rate: number;   // total effective rate (e.g. 0.27 = 27%)
  symbol: string; // default currency symbol
}

export const COUNTRIES: Country[] = [
  // Effective rates computed against each country's average salary (2026)
  // Ireland: income tax 20% - tax credits €4,000 + USC + PRSI 4.2% + auto-enrolment 1.5% → ~19%
  { code: 'IE', name: 'Ireland',       flag: '🇮🇪', rate: 0.19, symbol: '€'  },
  // Portugal: IRS - specific deduction €4,104 + personal credit €1,678 + SS 11% → ~17%
  { code: 'PT', name: 'Portugal',      flag: '🇵🇹', rate: 0.17, symbol: '€'  },
  // Brazil: 2026 income tax zeroed below R$5k/month (new bands) + progressive INSS → ~9%
  { code: 'BR', name: 'Brazil',        flag: '🇧🇷', rate: 0.09, symbol: 'R$' },
  // UK: Income Tax 20% - personal allowance £12,570 + NI 8% → ~18%
  { code: 'GB', name: 'United Kingdom',flag: '🇬🇧', rate: 0.18, symbol: '£'  },
  // Germany: Einkommensteuer + SS employee (KV+RV+AV+PV ~20.55%) excluding Soli → ~33%
  { code: 'DE', name: 'Germany',       flag: '🇩🇪', rate: 0.33, symbol: '€'  },
  // France: income tax + CSG/CRDS + retraite complementaire (employee chomage = 0% since 2018) → ~26%
  { code: 'FR', name: 'France',        flag: '🇫🇷', rate: 0.26, symbol: '€'  },
  // Spain: IRPF + SS employee 6.35% → ~24%
  { code: 'ES', name: 'Spain',         flag: '🇪🇸', rate: 0.24, symbol: '€'  },
  // Italy: IRPEF + contributi previdenziali employee ~9.49% → ~27%
  { code: 'IT', name: 'Italy',         flag: '🇮🇹', rate: 0.27, symbol: '€'  },
  // Netherlands: Box 1 covers income tax + national insurance + arbeidskorting/heffingskorting credits → ~19%
  { code: 'NL', name: 'Netherlands',   flag: '🇳🇱', rate: 0.19, symbol: '€'  },
  // Belgium: IPP + cotisations sociales employee ~13.07% → ~38%
  { code: 'BE', name: 'Belgium',       flag: '🇧🇪', rate: 0.38, symbol: '€'  },
  // Austria: ESt + SV-Beiträge employee ~18.12% → ~30%
  { code: 'AT', name: 'Austria',       flag: '🇦🇹', rate: 0.30, symbol: '€'  },
  // Switzerland: average canton + federal + employee AHV/IV/EO ~6.575% → ~18%
  { code: 'CH', name: 'Switzerland',   flag: '🇨🇭', rate: 0.18, symbol: 'CHF'},
  // Sweden: kommunalskatt ~32% + statlig + ATP → ~40%
  { code: 'SE', name: 'Sweden',        flag: '🇸🇪', rate: 0.40, symbol: 'kr' },
  // Norway: inntektsskatt + trygdeavgift 7.9% → ~27%
  { code: 'NO', name: 'Norway',        flag: '🇳🇴', rate: 0.27, symbol: 'kr' },
  // Denmark: personskat + AM-bidrag 8% (no separate social security) → ~36%
  { code: 'DK', name: 'Denmark',       flag: '🇩🇰', rate: 0.36, symbol: 'kr' },
  // Finland: ansiotulovero + SS employee ~8.65% → ~30%
  { code: 'FI', name: 'Finland',       flag: '🇫🇮', rate: 0.30, symbol: '€'  },
  // USA: federal 16% + FICA 7.65% + average state ~5% → ~22%
  { code: 'US', name: 'United States', flag: '🇺🇸', rate: 0.22, symbol: '$'  },
  // Canada: federal + average provincial + CPP/EI → ~23%
  { code: 'CA', name: 'Canada',        flag: '🇨🇦', rate: 0.23, symbol: '$'  },
  // Australia: income tax + Medicare 2% → ~21%
  { code: 'AU', name: 'Australia',     flag: '🇦🇺', rate: 0.21, symbol: '$'  },
  // New Zealand: PAYE + ACC levy → ~19%
  { code: 'NZ', name: 'New Zealand',   flag: '🇳🇿', rate: 0.19, symbol: '$'  },
  // Japan: shotokuzei + juuminzei + employee kenko/nenkin → ~22%
  { code: 'JP', name: 'Japan',         flag: '🇯🇵', rate: 0.22, symbol: '¥'  },
  // Poland: PIT 12% + employee ZUS → ~21%
  { code: 'PL', name: 'Poland',        flag: '🇵🇱', rate: 0.21, symbol: 'zł' },
  { code: 'OTHER', name: 'Other (no tax)', flag: '🌍', rate: 0, symbol: '€' },
];

export function getCountry(code: string): Country {
  return COUNTRIES.find(c => c.code === code) ?? COUNTRIES[COUNTRIES.length - 1];
}
