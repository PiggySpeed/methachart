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
  ON_PRINT_FAILURE,
  ON_PRINT_SUCCESS,
  ON_PRINT_TEMP_SUCCESS,
  ON_PRINT_MAR_SUCCESS,
} from '../actions/actiontypes';
import moment from 'moment';
import openPrintWindow from '../utils/openPrintWindow';
import {
  FORMTYPE_TEMP,
  FORMTYPE_MAIN,
  getDosageUnit} from '../constants/constants';

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
  // console.log('daterange is ', daterange);

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

const onPrintSuccess = (data) => {
  openPrintWindow(data);
  return { type: ON_PRINT_SUCCESS }
};

const onPrintTempSuccess = (data) => {
  openPrintWindow(data);
  return { type: ON_PRINT_TEMP_SUCCESS }
};

const onPrintMARSuccess = (data) => {
  openPrintWindow(data);
  return { type: ON_PRINT_MAR_SUCCESS }
};


const onPrintMARRequest = () => {
  return (dispatch, getState) => {
    const {
      patientName,
      selectedDrug
    } = getState().chart;

    const header = {
      formtype: FORMTYPE_TEMP,
      name: patientName,
      selecteddrug: selectedDrug,
      timestamp: moment().format('MMM DD, YYYY (HH:mm:ss)')
    };

    return dispatch(onPrintMARSuccess({header}));
  }
};

const onPrintTempRequest = () => {
  return (dispatch, getState) => {
    const {
      patientName,
      rxNumber,
      selectedDrug
    } = getState().chart;

    const header = {
      formtype: FORMTYPE_TEMP,
      name: patientName,
      rxnum: rxNumber,
      selecteddrug: selectedDrug,
      timestamp: moment().format('MMM DD, YYYY (HH:mm:ss)')
    };

    return dispatch(onPrintTempSuccess({header}));
  }
};

const onPrintRequest = () => {
  return (dispatch, getState) => {
    const {
      patientName,
      selectedDrug,
      rxNumber,
      dose,
      takehome,
      daterange,
      timeinterval,
      carries
    } = getState().chart;

    let errorText = 'The start or end dates are invalid.';

    if (!patientName) {
      return dispatch(onPrintFailure('Please Enter a Name!'));
    }

    if (!dose) {
      // allows '0' value
      return dispatch(onPrintFailure('Please Enter a Dose!'));
    }

    if (!rxNumber) {
      return dispatch(onPrintFailure('Please Enter an Rx Number!'));
    }

    if (timeinterval <= 0) {
      return dispatch(onPrintFailure(errorText));
    }

    // Convert strings to numbers
    const doseFloat = parseFloat(dose) || 0;
    const takehomeFloat = parseFloat(takehome) || 0;

    // Calculate total dose - calculations must handle the floating-point problem in javascript
    const cx = 10;
    const total = (takehomeFloat > 0)
      ? ((doseFloat*cx) + (takehomeFloat*cx))/(cx)
      : doseFloat;

    // Assemble logdata
    const logData = [];
    let curr = daterange[0].clone();
    const end = daterange[1].clone();
    let n = 0;
    let lastSeenDWIIndex = -1;
    let runningCarryTotal = 0;
    while (curr <= end) {
      const isCarry = carries[curr.format('ddd').toUpperCase()].isCarry;

      // Sum up the carry dosages and retroactively
      // apply the dosage additions to the last DWI row
      if (isCarry) {
        runningCarryTotal += doseFloat + takehomeFloat;
      }
      if (!isCarry || curr.isSame(end)) {
        if (runningCarryTotal > 0) {
          logData[lastSeenDWIIndex].carrydose += runningCarryTotal;
          logData[lastSeenDWIIndex].total += runningCarryTotal;
          runningCarryTotal = 0;
        }
        if (!isCarry) {
          lastSeenDWIIndex = n;
        }
      }

      logData.push({
        date: curr.format('MMM DD, YYYY'),
        weekday: curr.format('dd'),
        rxnum: rxNumber,
        witness: doseFloat,
        takehome: takehomeFloat,
        total,
        carry: isCarry,
        carrydose: 0,
        unit: getDosageUnit(selectedDrug)
      });
      curr = curr.add(1, 'days');
      n++;
    }

    if (!(Array.isArray(logData) && logData.length)) {
      return dispatch(onPrintFailure(errorText));
    }

    const header = {
      formtype: FORMTYPE_MAIN,
      name: patientName,
      rxnum: rxNumber,
      selecteddrug: selectedDrug,
      startdate: daterange[0].format('MMM DD, YYYY'),
      enddate: daterange[1].format('MMM DD, YYYY'),
      timeinterval: Number(timeinterval.toPrecision(1)),
      timestamp: moment().format('MMM DD, YYYY (HH:mm:ss)')
    };

    return dispatch(onPrintSuccess({header, logData}));
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
  onPrintRequest,
  onPrintTempRequest,
  onPrintMARRequest
};
