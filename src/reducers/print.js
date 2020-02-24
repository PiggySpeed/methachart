import {
  ON_DELETE_PRINT_ERROR,
  ON_PRINT_REQUEST,
  ON_PRINT_FAILURE,
  ON_PRINT_SUCCESS
} from '../actions/actiontypes';

const printData = (state = { errorText: '' }, action) => {
  switch(action.type) {
    case ON_DELETE_PRINT_ERROR: {
      return { errorText: '' };
    }
    case ON_PRINT_REQUEST: {
      return { errorText: '' };
    }
    case ON_PRINT_FAILURE: {
      return { errorText: action.errorText };
    }
    case ON_PRINT_SUCCESS: {
      return { errorText: '' };
    }
    default:
      return state;
  }
};
export default printData;
