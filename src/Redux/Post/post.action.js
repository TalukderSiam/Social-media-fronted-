import {
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_ALL_POST_FAILURE,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_USER_POST_FAILURE,
  GET_USER_POST_REQUEST,
  GET_USER_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
} from "./post.actionType";
import { api, API_BASE_URL } from "../../Config/apii";

export const createPostAction = (postData) => async (dispatch) => {
  dispatch({ type: CREATE_POST_REQUEST });
  try {
    const { data } = await api.post("/api/posts", postData);
    dispatch({ type: CREATE_POST_SUCCESS, payload: data });
    console.log("created post", data);
  } catch (error) {
    console.log("ErrorRRRRRRRRRRRRRRRRRRRR", error);
    dispatch({ type: CREATE_POST_FAILURE, payload: error });
  }
};

export const getAllPostAction = () => async (dispatch) => {
  dispatch({ type: GET_ALL_POST_REQUEST });
  try {
    const { data } = await api.get("api/postss");
    dispatch({ type: GET_ALL_POST_SUCCESS, payload: data });
    console.log("Get all post", data);
  } catch (error) {
    console.log("Error", error);
    dispatch({ type: GET_ALL_POST_FAILURE, payload: error });
  }
};

export const getUsersPostAction  = () => async (dispatch) => {
  dispatch({ type: GET_ALL_POST_REQUEST });
  try {
    const { data } = await api.get("api/posts");
    dispatch({ type: GET_ALL_POST_SUCCESS, payload: data });
    console.log("Get all post", data);
  } catch (error) {
    console.log("Error", error);
    dispatch({ type: GET_ALL_POST_FAILURE, payload: error });
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
  */


  export const LikePostAction = (postId) => async (dispatch) => {
    dispatch({ type: LIKE_POST_REQUEST });
    try {
      const { data } = await api.put(`/api/posts/like/${postId}`);
      dispatch({ type: LIKE_POST_SUCCESS, payload: data });
      console.log("Like  post", data);
    } catch (error) {
      console.log("Erroreee", error);
      dispatch({ type: LIKE_POST_FAILURE, payload: error });
    }
  };

 export const DeletePostAction = (postId) => async (dispatch) => {
    dispatch({ type: DELETE_POST_REQUEST });
    try {
      const { data } = await api.delete(`/api/posts/${postId}`);
      dispatch({ type: DELETE_POST_SUCCESS, payload: data });
      console.log("Delete post", data);
    } catch (error) {
      console.log("Erroreeer ", error);
      dispatch({ type: DELETE_POST_FAILURE, payload: error });
    }
  };


  
