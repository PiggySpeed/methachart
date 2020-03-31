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
import {
  METHADONE,
  SCHEME_WEEKDAYS,
  SCHEME_WEEKENDS
} from '../constants/constants';


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
  carryScheme: null,
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
    case SET_CARRY_SCHEME: {
      if (action.scheme === SCHEME_WEEKDAYS) {
        return {
          ...state,
          carryScheme: SCHEME_WEEKDAYS,
          carries: {
            SUN: { ...state.carries.SUN, isCarry: false },
            MON: { ...state.carries.MON, isCarry: true },
            TUE: { ...state.carries.TUE, isCarry: true },
            WED: { ...state.carries.WED, isCarry: true },
            THU: { ...state.carries.THU, isCarry: true },
            FRI: { ...state.carries.FRI, isCarry: true },
            SAT: { ...state.carries.SAT, isCarry: false }
          }
        }
      } else if (action.scheme === SCHEME_WEEKENDS) {
        return {
          ...state,
          carryScheme: SCHEME_WEEKENDS,
          carries: {
            SUN: { ...state.carries.SUN, isCarry: true },
            MON: { ...state.carries.MON, isCarry: false },
            TUE: { ...state.carries.TUE, isCarry: false },
            WED: { ...state.carries.WED, isCarry: false },
            THU: { ...state.carries.THU, isCarry: false },
            FRI: { ...state.carries.FRI, isCarry: false },
            SAT: { ...state.carries.SAT, isCarry: true }
          }
        }
      }

      return { ...state, carryScheme: action.carryScheme }
    }

    default:
      return state;
  }
};

export default chart;