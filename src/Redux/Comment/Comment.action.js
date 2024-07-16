import { CREATE_COMMENT_FAILURE, CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS } from "./Comment.actiontype";
import { api, API_BASE_URL } from "../../Config/apii";

export const createCommentAction = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_COMMENT_REQUEST });
    try {
      const { data } = await api.post(`/api/comment/post/${reqData.postId}`, reqData.data);
      dispatch({ type: CREATE_COMMENT_SUCCESS, payload: data });
      console.log("created comment", data);
    } catch (error) {
      console.log("Error", error);
      dispatch({ type: CREATE_COMMENT_FAILURE, payload: error });
    }
  };