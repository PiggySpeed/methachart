export const METHADONE = 'METHADONE';
export const KADIAN = 'KADIAN';
export const SUBOXONE = 'SUBOXONE';
export const ARVS = 'ARVS';
export const HEPC = 'HEPC';

export const MEDICATIONS = [
  { key: METHADONE, value: METHADONE, text: METHADONE },
  { key: KADIAN, value: KADIAN, text: KADIAN },
  { key: SUBOXONE, value: SUBOXONE, text: SUBOXONE },
  { key: ARVS, value: ARVS, text: ARVS },
  { key: HEPC, value: HEPC, text: HEPC }
];

export function isMAR(med) {
  return (med === ARVS || med === HEPC);
}

export function getDosageUnit(med) {
  const unit = {
    METHADONE: 'mL',
    KADIAN: 'mg',
    SUBOXONE: 'mg'
  }[med];

  return unit || null;
}

export const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
export const WEEKDAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
export const WEEKENDS = ['SUN', 'SAT'];

export const SCHEME_WEEKENDS = 'SCHEME_WEEKENDS';
export const SCHEME_WEEKDAYS = 'SCHEME_WEEKDAYS';

export const FORMTYPE_MAIN = 'FORMTYPE_MAIN';
export const FORMTYPE_TEMP = 'FORMTYPE_TEMP';
export const FORMTYPE_MAR = 'FORMTYPE_MAR';

