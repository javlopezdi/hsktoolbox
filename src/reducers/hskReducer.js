import { SET_SELECTED_TEMP_HSK, SET_SELECTED_HSK } from "../actions/types";

const hskReducer = (
  state = { selectedTempHsk: "hsk1", selectedHsk: "hsk1" },
  action
) => {
  switch (action.type) {
    case SET_SELECTED_TEMP_HSK:
      return { ...state, selectedTempHsk: action.payload };
    case SET_SELECTED_HSK:
      return { ...state, selectedHsk: action.payload };
    default:
      return state;
  }
};

export default hskReducer;
