import {
  ON_SET_START_DATE,
  ON_SET_END_DATE,
  ON_SET_TIME_INTERVAL,
} from '../actions/actiontypes';
const initialState = {
  startdate: null,
  enddate: null,
  timeinterval: 0
};

const dates = (state = initialState, action) => {
  switch(action.type) {
    case ON_SET_START_DATE: {
      return {...state, startdate: action.startdate}
    }
    case ON_SET_END_DATE: {
      return {...state, enddate: action.enddate}
    }
    case ON_SET_TIME_INTERVAL: {
      return {...state, timeinterval: action.timeinterval}
    }
    default:
      return state
  }
};
export default dates;
