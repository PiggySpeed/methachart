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

export const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
export const WEEKDAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
export const WEEKENDS = ['SUN', 'SAT'];

export const SCHEME_WEEKENDS = 'SCHEME_WEEKENDS';
export const SCHEME_WEEKDAYS = 'SCHEME_WEEKDAYS';

export const FORMTYPE_MAIN = 'FORMTYPE_MAIN';
export const FORMTYPE_TEMP = 'FORMTYPE_TEMP';

export var PRINT_URL = window.location.pathname.replace("index.html", "").slice(1) + "components/print/print.html";
