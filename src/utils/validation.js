/**
 * Validation
 *
 * Functions in this file are used to validate input date coming from the UI
 * or other sources (such as actions). These functions, in combination with
 * date.js and typechecking.js, will ensure that data being submitted to the
 * print log will show up exactly what the user intended.
 *
 * All of these functions are backed by tests.
 *
 * **/


export const isStringPosNum  = (input) => {
  /**
   * Checks if the provided string is:
   * 1. A string,
   * 2. A positive number or zero
   * Remember that an empty string is coerced to 0 rather than NaN
   * Allows values with positive signs or leading zeros (e.g. '+1', '01'),
   * they get coerced to proper values anyways.
   *
   * input (str): input to be tested (e.g. '12', 'a7')
   *
   * Returns true if valid, else false
   *
   * Reference: http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
   * **/

  const isString = Object.prototype.toString.call(input) === '[object String]';
  if(!isString){
    return false
  }

  const numericInput = +input;
  const isNumeric = (numericInput == input) && ( ('' + input).trim().length > 0 );
  if(!isNumeric){
    return false
  }

  return numericInput >= 0;
};

