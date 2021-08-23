import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import routeReducer from "./routeReducer";
import dialogReducer from "./dialogReducer";
import authReducer from "./authReducer";
import hskReducer from "./hskReducer";
import multipleChoiceReducer from "./multipleChoiceReducer";

export default combineReducers({
  route: routeReducer,
  form: formReducer,
  dialog: dialogReducer,
  auth: authReducer,
  hsk: hskReducer,
  multipleChoice: multipleChoiceReducer,
});
