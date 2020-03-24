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
import {METHADONE} from '../constants/constants';


const initialState = {
  patientName: '',
  rxNumber: null,

  selectedDrug: METHADONE,
  dose: null,
  takehome: null,
  startdate: null,
  enddate: null,
  timeinterval: 0
};

const chart = (state = initialState, action) => {
  switch (action.type) {
    case SET_PATIENT_NAME: {
      return {...state, patientName: action.patientName};
    }
    case SET_RX_NUMBER: {
      return {...state, rxNumber: action.rxNumber};
    }
    case SET_DRUG: {
      return {...state, selectedDrug: action.selectedDrug};
    }
    case SET_DOSE: {
      return {...state, dose: action.dose};
    }
    case SET_TAKEHOME_DOSE: {
      return {...state, takehome: action.takehome};
    }
    case SET_START_DATE: {
      return {...state, startdate: action.startdate};
    }
    case SET_END_DATE: {
      return {...state, enddate: action.enddate};
    }
    case SET_TIME_INTERVAL: {
      return {...state, timeinterval: action.timeinterval};
    }
    default:
      return state;
  }
};

export default chart;
