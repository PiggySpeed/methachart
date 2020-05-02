export const METHADONE = 'METHADONE';
export const KADIAN = 'KADIAN';
export const SUBOXONE = 'SUBOXONE';
export const DILAUDID = 'DILAUDID';

export const MEDICATIONS = [
  { key: METHADONE, value: METHADONE, text: METHADONE },
  { key: KADIAN, value: KADIAN, text: KADIAN },
  { key: SUBOXONE, value: SUBOXONE, text: SUBOXONE },
  { key: DILAUDID, value: DILAUDID, text: DILAUDID },
];

export function getDosageUnit(med) {
  return {
    METHADONE: 'mL',
    KADIAN: 'mg',
    SUBOXONE: 'mg',
    DILAUDID: 'mg'
  }[med];
}

export const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
export const WEEKDAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
export const WEEKENDS = ['SUN', 'SAT'];

export const SCHEME_WEEKENDS = 'SCHEME_WEEKENDS';
export const SCHEME_WEEKDAYS = 'SCHEME_WEEKDAYS';

export const FORMTYPE_MAIN = 'FORMTYPE_MAIN';
export const FORMTYPE_TEMP = 'FORMTYPE_TEMP';

export const IS_DEV = process.env.NODE_ENV === 'development';
export const PRINT_URL =  IS_DEV ? 'http://localhost:8000/print.html' : window.location.pathname.replace("index.html", "").slice(1) + "print/print.html";
// `file://${path.join(__dirname, '/dist/index.html')}`

