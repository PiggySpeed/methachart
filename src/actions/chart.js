import {
  SET_PATIENT_NAME,
  SET_RX_NUMBER,
  SET_DRUG,
  SET_DOSE,
  SET_TAKEHOME_DOSE,
  SET_START_DATE,
  SET_END_DATE,
  SET_TIME_INTERVAL
} from '../actions/actiontypes';

export const onSetPatientName = (patientName) => {
  return dispatch => {
    dispatch({ type: SET_PATIENT_NAME, patientName });
  }
};

export const onSetRxNumber = (rxNumber) => {
  return dispatch => {
    dispatch({ type: SET_RX_NUMBER, rxNumber });
  }
};

export const onSetDrug = (selectedDrug) => {
  return dispatch => {
    dispatch({ type: SET_DRUG, selectedDrug });
  }
};

export const onSetDose = (dose) => {
  return dispatch => {
    dispatch({ type: SET_DOSE, dose });
  }
};

export const onSetTakehomeDose = (takehome) => {
  return dispatch => {
    dispatch({ type: SET_TAKEHOME_DOSE, takehome });
  }
};

export const onSetStartDate = (startdate) => {
  return dispatch => {
    dispatch({ type: SET_START_DATE, startdate });
  }
};

export const onSetEndDate = (enddate) => {
  return dispatch => {
    dispatch({ type: SET_END_DATE, enddate });
  }
};

export const onSetTimeInterval = (timeinterval) => {
  return dispatch => {
    dispatch({ type: SET_TIME_INTERVAL, timeinterval });
  }
};


