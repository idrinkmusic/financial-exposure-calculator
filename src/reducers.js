import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
  REQUEST_PERSON_DETAILS,
  RECEIVE_PERSON_DETAILS,
  REQUEST_FACILITY_DETAILS,
  RECEIVE_FACILITY_DETAILS,
  REQUEST_EXPOSURE_DETAILS,
  RECEIVE_EXPOSURE_DETAILS
} from "./actions";

const selectedPersonId = (
  state = {
    isFetching: false,
    id: null,
    personDetails: {},
    facilityDetails: {},
    exposureDetails: {}
  },
  action
) => {
  switch (action.type) {
    case REQUEST_PERSON_DETAILS:
      return Object.assign({}, state, {
        id: action.personId,
        isFetching: true
      });
    case RECEIVE_PERSON_DETAILS:
      return Object.assign({}, state, {
        personDetails: action.person,
        isFetching: true
      });
    case RECEIVE_FACILITY_DETAILS:
      return Object.assign({}, state, {
        facilityDetails: action.facility,
        isFetching: true
      });
    case RECEIVE_EXPOSURE_DETAILS:
      return Object.assign({}, state, {
        exposureDetails: action.exposure,
        isFetching: false
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  selectedPersonId,
  form: formReducer
});

export default rootReducer;
