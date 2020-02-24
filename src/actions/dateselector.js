import {
  ON_SET_START_DATE,
  ON_SET_END_DATE,
  ON_SET_TIME_INTERVAL,

  ON_PRINT_FAILURE
} from './actiontypes';
/**
 * We have to import ON_PRINT_FAILURE because including the onPrintFailure action in the
 * print.js file will cause Mocha to break. Mocha has a problem with the openWindow method it
 * imports, because the file that it belongs to uses a global window object which somehow
 * raises an error when trying to run the tests. This is the best workaround I can think of for now.
 * -jlee 13/12/16
 *
 * **/

import { createDate, calculateInterval, getAllDates } from '../utils/date';

export const onSetStartDate = (dd, mm, yy) => {
  return dispatch => {
    // Date validation occurs in createDate
    const startdate = createDate(dd, mm, yy);
    dispatch({ type: ON_SET_START_DATE, startdate })
  }
};

export const onSetEndDate = (dd, mm, yy) => {
  return dispatch => {
    // Date validation occurs in createDate
    const enddate = createDate(dd, mm, yy);
    dispatch({ type: ON_SET_END_DATE, enddate })
  }
};

export const onSetTimeInterval = () => {
  return (dispatch, getState) => {
    const { dates } = getState();

    // date validation occurs in calculateInterval, returns 0 if invalid
    const timeinterval = calculateInterval(dates.startdate, dates.enddate, 169, err => dispatch({ type: ON_PRINT_FAILURE, errorText: err }) );
    dispatch({
      type: ON_SET_TIME_INTERVAL,
      timeinterval
    })
  }
};
