import { SET_IS_DIALOG_OPEN } from "../actions/types";

const dialogReducer = (state = { isDialogOpen: false }, action) => {
  switch (action.type) {
    case SET_IS_DIALOG_OPEN:
      return { ...state, isDialogOpen: action.payload };
    default:
      return state;
  }
};

export default dialogReducer;
