import {
  SET_PATIENT_NAME,
  SET_RX_NUMBER,
  SET_DRUG,
  SET_DOSE,
  SET_TAKEHOME_DOSE,
  SET_DATE_RANGE,
  SET_DAY_CARRY,
  SET_CARRY_SCHEME,
  SET_FORM_TYPE,
  ON_PRINT_REQUEST,
  ON_PRINT_FAILURE, ON_PRINT_SUCCESS
} from '../actions/actiontypes';
import {getAllDates} from '../utils/date';
import moment from 'moment';
import openWindow from '../utils/newwindow';
import {PRINT_URL} from '../utils/url';

const onSetPatientName = (patientName) => {
  return dispatch => {
    dispatch({ type: SET_PATIENT_NAME, patientName });
  }
};

const onSetRxNumber = (rxNumber) => {
  return dispatch => {
    dispatch({ type: SET_RX_NUMBER, rxNumber });
  }
};

const onSetFormType = (formType) => {
  return dispatch => {
    dispatch({ type: SET_FORM_TYPE, formType });
  }
};

const onSetDrug = (selectedDrug) => {
  return dispatch => {
    dispatch({ type: SET_DRUG, selectedDrug });
  }
};

const onSetDose = (dose) => {
  return dispatch => {
    dispatch({ type: SET_DOSE, dose });
  }
};

const onSetTakehomeDose = (takehome) => {
  return dispatch => {
    dispatch({ type: SET_TAKEHOME_DOSE, takehome });
  }
};

const onSetDateRange = (daterange) => {
  const start = daterange[0];
  const end = daterange[1];
  console.log('daterange is ', daterange);

  return dispatch => {

    if (!start || !end) {
      dispatch({ type: SET_DATE_RANGE, daterange, timeinterval: null });
      return;
    }

    const timeinterval = moment.duration(end.diff(start)).asDays() + 1; // inclusive date range
    // var t = moment(start).format('MM/DD/YYYY');
    // var g = moment(end).format('MM/DD/YYYY');
    // console.log(t, g, duration);
    console.log('timeinterval is', timeinterval);

    dispatch({ type: SET_DATE_RANGE, daterange, timeinterval });
  }
};

const onDayClick = (day, isCarry) => {
  return dispatch => {
    dispatch({ type: SET_DAY_CARRY, day, isCarry });
  }
};

const onSetCarryScheme = (scheme) => {
  return dispatch => {
    dispatch({ type: SET_CARRY_SCHEME, scheme });
  }
};

export const onPrintFailure = (errorText) => {
  return { type: ON_PRINT_FAILURE, errorText }
};

const onPrintSuccess = (headerdata, logdata) => {
  openWindow(PRINT_URL, {headerdata, logdata});
  return { type: ON_PRINT_SUCCESS }
};

const onPrintRequest = () => {
  return (dispatch, getState) => {
    // do print request here

    const { chart } = getState();
    const {
      patientName,
      selectedDrug,
      rxNumber,
      dose,
      takehome,
      startdate,
      enddate,
      timeinterval
    } = chart;

    let errorText = 'The start or end dates are invalid.';

    if (!patientName) {
      return dispatch(onPrintFailure('Please Enter a Name!'));
    }

    if (!dose) {
      return dispatch(onPrintFailure('Please Enter a Dose!'));
    }

    if (!rxNumber) {
      return dispatch(onPrintFailure('Please Enter an Rx Number!'));
    }

    if (timeinterval <= 0) {
      return dispatch(onPrintFailure(errorText));
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

    return dispatch(onPrintSuccess(headerdata, logdata));
  }
};


export default {
  onSetPatientName,
  onSetRxNumber,
  onSetFormType,
  onSetDrug,
  onSetDose,
  onSetTakehomeDose,
  onSetDateRange,
  onDayClick,
  onSetCarryScheme,
  onPrintRequest
};
