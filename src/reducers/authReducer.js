import { SIGN_IN, SIGN_OUT, SIGN_UP } from "../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
  isSignedIn: null,
  userInfo: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userInfo: action.payload };
    case SIGN_UP:
      return { ...state, isSignedIn: true, userInfo: action.payload };
    case SIGN_OUT:
      return { ..._.omit(state, "userInfo"), isSignedIn: false };
    default:
      return state;
  }
};

export default authReducer;
