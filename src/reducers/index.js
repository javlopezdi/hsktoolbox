import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import dialogReducer from "./dialogReducer";
import authReducer from "./authReducer";
import hskReducer from "./hskReducer";
import multipleChoiceReducer from "./multipleChoiceReducer";

export default combineReducers({
  form: formReducer,
  dialog: dialogReducer,
  auth: authReducer,
  hsk: hskReducer,
  multipleChoice: multipleChoiceReducer,
});
