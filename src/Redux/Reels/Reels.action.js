import {
   
    CREATE_REELS_FAILURE,
    CREATE_REELS_REQUEST,
    CREATE_REELS_SUCCESS,
    GET_ALL_REELS_FAILURE,
    GET_ALL_REELS_REQUEST,
    GET_ALL_REELS_SUCCESS,
    GET_USER_REELS_FAILURE,
    GET_USER_REELS_REQUEST,
    GET_USER_REELS_SUCCESS,
    
  } from "./Reels.action.Type";
  import { api, API_BASE_URL } from "../../Config/apii";
  
  export const createReelsAction = (reelsData) => async (dispatch) => {
    dispatch({ type: CREATE_REELS_REQUEST });
    try {
      const { data } = await api.post("/api/reels", reelsData);
      dispatch({ type: CREATE_REELS_SUCCESS, payload: data });
      console.log("created reels", data);
    } catch (error) {
      console.log("ErrorRRRRRRRRRRRRRRRRRRRR", error);
      dispatch({ type: CREATE_REELS_FAILURE, payload: error });
    }
  };
  
  export const getAllReelsAction = () => async (dispatch) => {
    dispatch({ type: GET_ALL_REELS_REQUEST });
    try {
      const { data } = await api.get("api/allReels");
      dispatch({ type: GET_ALL_REELS_SUCCESS, payload: data });
      console.log("Get all reels", data);
    } catch (error) {
      console.log("Error", error);
      dispatch({ type: GET_ALL_REELS_FAILURE, payload: error });
    }
  };
  
  export const getUsersReelsAction  = () => async (dispatch) => {
    dispatch({ type: GET_USER_REELS_REQUEST });
    try {
      const { data } = await api.get("/api/reels/user/allReels");
      dispatch({ type: GET_USER_REELS_SUCCESS, payload: data });
      console.log("Get User all reels", data);
    } catch (error) {
      console.log("Error", error);
      dispatch({ type: GET_USER_REELS_FAILURE, payload: error });
    }
  };
  
  
  
  /*export const getUsersPostAction = () => async (dispatch) => {
      dispatch({ type: GET_USER_POST_REQUEST });
      try {
        const { data } = await api.get(`/api/posts`);
        dispatch({ type: GET_USER_POST_SUCCESS, payload: data });
        console.log("Get user  post", data);
      } catch (error) {
        console.log("Error", error);
        dispatch({ type: GET_USER_POST_FAILURE, payload: error });
      }
    };
   
  
  
    export const LikePostAction = (postId) => async (dispatch) => {
      dispatch({ type: LIKE_POST_REQUEST });
      try {
        const { data } = await api.put(`/api/posts/like/${postId}`);
        dispatch({ type: LIKE_POST_SUCCESS, payload: data });
        console.log("Like  post", data);
      } catch (error) {
        console.log("Error", error);
        dispatch({ type: LIKE_POST_FAILURE, payload: error });
      }
    };
   */