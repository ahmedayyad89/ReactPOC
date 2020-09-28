import {
  PROFILE_REQUEST_PROCESS,
  PROFILE_REQUEST_ERROR,
  PROFILE_REQUEST_SUCCESS
} from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: ""
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_REQUEST_PROCESS:
      return { ...state, isError: false, errorMessage: "", isLoading: true };
    case PROFILE_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case PROFILE_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };
    default:
      return state;
  }
};
