import {
  SET_IS_DIALOG_OPEN,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  SET_SELECTED_TEMP_HSK,
  SET_SELECTED_HSK,
  SET_SELECTED_MULTIPLE_CHOICE_ANSWER,
} from "./types";
import history from "../history";

export const setIsDialogOpen = (isDialogOpen) => {
  return {
    type: SET_IS_DIALOG_OPEN,
    payload: isDialogOpen,
  };
};

export const signIn = (formValues) => (dispatch) => {
  dispatch({ type: SIGN_IN, payload: formValues });
  history.push("/hsk1/progress");
};

export const signUp = (formValues) => (dispatch) => {
  dispatch({ type: SIGN_UP, payload: formValues });
  history.push("/usersettings");
};

export const signOut = () => (dispatch) => {
  dispatch({ type: SIGN_OUT });
  history.push("/");
};

export const setSelectedTempHsk = (selectedTempHsk) => {
  return {
    type: SET_SELECTED_TEMP_HSK,
    payload: selectedTempHsk,
  };
};

export const setSelectedHsk = (selectedHsk) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_HSK,
    payload: selectedHsk,
  });
  history.push(`/${selectedHsk}/progress`);
};

export const setSelectedMultipleChoiceAnswer = (
  selectedMultipleChoiceAnswer
) => {
  return {
    type: SET_SELECTED_MULTIPLE_CHOICE_ANSWER,
    payload: selectedMultipleChoiceAnswer,
  };
};
