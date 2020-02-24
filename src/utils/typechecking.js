/**
 * Type Checking - by jlee
 *
 * Recall that:
 *   typeof null                 // 'object'
 *   typeof []                   // 'object'
 *   typeof 'foo'                // 'string'
 *   typeof new String('foo')    // 'object'
 *   'foo' == new String('foo')  // true
 *
 * To avoid these errors, we need to use Object.prototype.toString.call()
 *
 * References:
 *   https://toddmotto.com/understanding-javascript-types-and-reliable-type-checking/
 *   http://stackoverflow.com/questions/13926213/checking-the-types-of-function-arguments-in-javascript
 *
 * **/

import moment from 'moment';

export const isString = (str) => {
  return Object.prototype.toString.call(str) === '[object String]'
};

export const isNonEmptyString = (str) => {
  const isString = Object.prototype.toString.call(str) === '[object String]';
  if(!isString){
    return false
  }
  const isNotEmpty = str.trim() !== '';

  return isString && isNotEmpty;
};

export const isValidDateDDMMYY = (dd, mm, yy) => {
  /**
   * Checks if the provided values are:
   * 1. number strings of length 2 (after trimming whitespace),
   * 2. compose a valid date
   * Not tested for years 2100 and beyond
   * DD must come already padded with '0' (e.g. '01', not '1')
   *
   * dd (str): numerical day (e.g. '01', '14')
   * mm (str): numerical month (e.g. '01', '12')
   * yy (str): last two digits of the year (e.g. '12', '06')
   *
   * Returns true if valid, else false
   * **/
  const areAllNonEmptyStrings = (
    isNonEmptyString(dd) &&
    isNonEmptyString(mm) &&
    isNonEmptyString(yy)
  );
  if(!areAllNonEmptyStrings){
    return false
  }

  const isExactlyLengthTwo = (
    (dd.length === 2) &&
    (mm.length === 2) &&
    (yy.length === 2)
  );
  if(!isExactlyLengthTwo){
    return false
  }

  // This takes care of sneaky values like ' 1'
  const isPaddedWithLengthTwo = (
    (dd.trim().length === 2) &&
    (mm.trim().length === 2) &&
    (yy.trim().length === 2)
  );
  if(!isPaddedWithLengthTwo){
    return false
  }

  const isValidMomentDate = moment([dd, mm, yy], 'DD MM YY').isValid();
  if(!isValidMomentDate){
    return false
  }

  return isValidMomentDate;
} ;

export const isValidDateMMMDDYYYY = (date) => {
  /**
   * Checks if the input date is:
   * 1. in the form: 'MMM DD, YYYY',
   * 2. a valid date
   * Does not care about the case of MMM
   * DD must come already padded with '0' (e.g. '01', not '1')
   *
   * date (str): date in the form 'MMM DD, YYYY'
   *
   * Returns true if valid, else false
   * **/

  if(!isNonEmptyString(date)){
    return false
  }
  // is non-empty string

  if(date.length !== 12){
    return false
  }
  // is non-empty string of length 12

  const isValidMomentDate = moment(date, 'MMM DD, YYYY', true).isValid();
  if(!isValidMomentDate){
    return false
  }
  // is a valid date
  return isValidMomentDate;
} ;