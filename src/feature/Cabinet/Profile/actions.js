import { api } from "../../../helpers/api";

export const PROFILE_REQUEST_PROCESS = "PROFILE_REQUEST_PROCESS";
export const PROFILE_REQUEST_ERROR = "PROFILE_REQUEST_ERROR";
export const PROFILE_REQUEST_SUCCESS = "PROFILE_REQUEST_SUCCESS";

export const profileRequestProcess = () => ({
  type: PROFILE_REQUEST_PROCESS
});

export const profileRequestSuccess = data => ({
  type: PROFILE_REQUEST_SUCCESS,
  data
});

export const profileRequestError = error => ({
  type: PROFILE_REQUEST_ERROR,
  error
});

export const profileFetchRequest = () => async dispatch => {
  try {
    dispatch(profileRequestProcess());

    const data = await api("get", "users");

    dispatch(profileRequestSuccess(data));
  } catch (error) {
    dispatch(profileRequestError(error.response ? error.response.data : error));
  }
};
