import axios from "axios";
import { api, API_BASE_URL } from "../../Config/apii";
import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_REQUEST, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "./auth.actionType";

export const loginUserAction = (loginData) => async (dispatch) => { 
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/signin`,
      loginData.data
    );
    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }
    console.log("Login success", data);
    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log("......", error);
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export const registerUserAction = (loginData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/auth/signup`,
      loginData.data
    );
    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }
    console.log("Register success", data);
    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log("......", error);
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export const getProfileAction = (jwt) => async (dispatch) => {
  dispatch({ type: GET_PROFILE_REQUEST });
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}/api/users/profile`,
       // Empty data object if there's no data to send in the request body
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    
    
    console.log("Profile", data);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: data  });
  } catch (error) {
    console.log("......", error);
    dispatch({ type: GET_PROFILE_FAILURE, payload: error });
  }
};

export const updateAction = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST });
  try {
    const { data } = await api.put(
      `${API_BASE_URL}/api/users`,
       reqData
    );
    
    
    console.log("Update Profile", data);
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.log("......", error);
    dispatch({ type: UPDATE_PROFILE_FAILURE, payload: error });
  }
};
