import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { REQUEST_PERSON_DETAILS, RECEIVE_PERSON_DETAILS } from "./actions";

const selectedPersonId = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_PERSON_DETAILS:
    case RECEIVE_PERSON_DETAILS:
      return [...state, { personId: action.personId }];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  selectedPersonId,
  form: formReducer
});

export default rootReducer;
