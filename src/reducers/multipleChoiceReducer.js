import { SET_SELECTED_MULTIPLE_CHOICE_ANSWER } from "../actions/types";

const multipleChoiceReducer = (
  state = { selectedMultipleChoiceAnswer: "" },
  action
) => {
  switch (action.type) {
    case SET_SELECTED_MULTIPLE_CHOICE_ANSWER:
      return { ...state, selectedMultipleChoiceAnswer: action.payload };
    default:
      return state;
  }
};

export default multipleChoiceReducer;
