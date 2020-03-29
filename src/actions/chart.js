import {
  SET_PATIENT_NAME,
  SET_RX_NUMBER,
  SET_DRUG,
  SET_DOSE,
  SET_TAKEHOME_DOSE,
  SET_START_DATE,
  SET_END_DATE,
  SET_DATE_RANGE,
  SET_TIME_INTERVAL,
  SET_DAY_CARRY,
  SET_CARRY_SCHEME
} from '../actions/actiontypes';

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

const onSetStartDate = (startdate) => {
  return dispatch => {
    dispatch({ type: SET_START_DATE, startdate });
  }
};

const onSetEndDate = (enddate) => {
  return dispatch => {
    dispatch({ type: SET_END_DATE, enddate });
  }
};

const onSetDateRange = (daterange) => {
  return dispatch => {
    dispatch({ type: SET_DATE_RANGE, daterange });
  }
};

const onSetTimeInterval = (timeinterval) => {
  return dispatch => {
    dispatch({ type: SET_TIME_INTERVAL, timeinterval });
  }
};

const onDayClick = (day, isCarry) => {
  return dispatch => {
    dispatch({ type: SET_DAY_CARRY, day, isCarry });
  }
};

const onSetCarryScheme = (scheme) => {
  return dispatch => {
    dispatch({ type: SET_CARRY_SCHEME, scheme })
  }
};


export default {
  onSetPatientName,
  onSetRxNumber,
  onSetDrug,
  onSetDose,
  onSetTakehomeDose,
  onSetStartDate,
  onSetEndDate,
  onSetDateRange,
  onSetTimeInterval,
  onDayClick,
  onSetCarryScheme
};
