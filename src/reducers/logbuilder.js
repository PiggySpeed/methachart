import {
  ON_NAME_BLUR,
  ON_RXNUM_BLUR,
  ON_SET_DRUG,
  ON_DOSE_BLUR,
  ON_TAKEHOME_BLUR
} from '../actions/actiontypes';
const initialState = {
  selecteddrug: {
    displayname: "Methadone",
    drugname: "Methadone 10mg/ml",
    din: "02394596",
    pseudodin: "66999997"
  },
  name: '',
  dose: 0,
  takehome: 0,
  startdate: '',
  enddate: '',
  timeinterval: 0,
  maxinterval: 100
};

const LogBuilder = (state = initialState, action) => {
  switch(action.type) {
    case ON_NAME_BLUR: {
      return {...state, name: action.name }
    }
    case ON_RXNUM_BLUR: {
      return {...state, rxnum: action.rxnum }
    }
    case ON_SET_DRUG: {
      return {...state, selecteddrug: action.selecteddrug }
    }
    case ON_DOSE_BLUR: {
      return {...state, dose: action.dose }
    }
    case ON_TAKEHOME_BLUR: {
      return {...state, takehome: action.takehome }
    }
    default:
      return state
  }
};
export default LogBuilder;
