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
  SET_DAY_CARRY
} from '../actions/actiontypes';
import {METHADONE} from '../constants/constants';


const initialState = {
  patientName: '',
  rxNumber: null,

  selectedDrug: METHADONE,
  dose: null,
  takehome: null,
  startdate: null, // type: Date
  enddate: null,   // type: Date
  daterange: [new Date(), new Date()],
  timeinterval: 0,

  // modify on blur
  carries: {
    SUN: {
      label: 'Su',
      isCarry: false
    },
    MON: {
      label: 'M',
      isCarry: false
    },
    TUE: {
      label: 'Tu',
      isCarry: false
    },
    WED: {
      label: 'W',
      isCarry: false
    },
    THU: {
      label: 'Th',
      isCarry: false
    },
    FRI: {
      label: 'F',
      isCarry: false
    },
    SAT: {
      label: 'Sa',
      isCarry: false
    }
  }
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
    case SET_DATE_RANGE: {
      return {...state, daterange: action.daterange};
    }
    case SET_TIME_INTERVAL: {
      return {...state, timeinterval: action.timeinterval};
    }
    case SET_DAY_CARRY: {
      return {
        ...state,
        carries: {
          ...state.carries,
          [action.day]: {
            ...state.carries[action.day],
            isCarry: action.isCarry
          }
        }
      };
    }
    default:
      return state;
  }
};

export default chart;
