import { SET_CURRENT_ROUTE } from "../actions/types";

const routeReducer = (state = { currentRoute: "/" }, action) => {
  switch (action.type) {
    case SET_CURRENT_ROUTE:
      return { ...state, currentRoute: action.payload };
    default:
      return state;
  }
};

export default routeReducer;
