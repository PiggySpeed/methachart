import moment from 'moment';
import {
  ON_DELETE_PRINT_ERROR,
  ON_PRINT_REQUEST,
  ON_PRINT_FAILURE,
  ON_PRINT_SUCCESS
} from './actiontypes';
import { calculateInterval, getAllDates } from '../utils/date';
import openWindow from '../utils/newwindow';
import { PRINT_URL } from '../utils/url';

const WEEKDAYS = {
  [0]: 'Su',
  [1]: 'Mo',
  [2]: 'Tu',
  [3]: 'We',
  [4]: 'Th',
  [5]: 'Fr',
  [6]: 'Sa'
};

export const onDeletePrintError = () => {
  return { type: ON_DELETE_PRINT_ERROR }
};

export const onPrintFailure = (errorText) => {
  console.log(errorText);
  return { type: ON_PRINT_FAILURE, errorText }
};
const onPrintSuccess = (headerdata, logdata) => {
  openWindow(PRINT_URL, {headerdata, logdata});
  //console.log(headerdata,logdata);
  return { type: ON_PRINT_SUCCESS }
};
export const onPrintRequest = () => {
  return (dispatch, getState) => {
    dispatch({ type: ON_PRINT_REQUEST });

    const { chart, dates } = getState();
    const { patientName, selectedDrug, rxNumber, dose, takehome } = chart;
    const { startdate, enddate } = chart; // dates must be in form MMM DD, YYYY
    let errorText = 'The start or end dates are invalid.';

    // Validate Name
    if(!patientName){
      return dispatch(onPrintFailure('Please Enter a Name!'))
    }

    // Validate dose
    if(!dose){
      return dispatch(onPrintFailure('Please Enter a Dose!'))
    }

    // Validate RxNum
    if(!rxNumber){
      return dispatch(onPrintFailure('Please Enter an Rx Number!'))
    }

    // Generate Time Interval and Check if it is Valid
    const timeinterval = calculateInterval(startdate, enddate, 168, err => { errorText = err });
    if(timeinterval === 0){
      return dispatch(onPrintFailure(errorText))
    }

    // Generate Array of Dates and Check if it is Valid
    const allDates = getAllDates(startdate, enddate, 168, err => { errorText = err });
    if(allDates === []){
      return dispatch(onPrintFailure(errorText))
    }

    // Assemble headerdata
    const headerdata = {
        name: patientName,
        selecteddrug: selectedDrug,
        startdate,
        enddate,
        timeinterval,
        timestamp: moment().format('MMM DD, YYYY (HH:mm:ss)')
    };

    // Calculate total dose - calculations must handle the floating-point problem in javascript
    const cx = 10;
    const total = (takehome > 0)
      ? ((dose*cx) + (takehome*cx))/(cx)
      : dose;

    // Assemble logdata
    const logdata = [];
    for(var i = 0; i < allDates.length; i++ ) {
      logdata.push({
        date: allDates[i].date,
        weekday: WEEKDAYS[allDates[i].weekday],
        rxnum: rxNumber,
        witness: dose + ' mL',
        takehome: takehome ? takehome + ' mL' : '-------' ,
        total: total + ' mL',
        carry: false
      })
    }

    return dispatch(onPrintSuccess(headerdata, logdata))
  }
};
