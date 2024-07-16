import { Switch } from "@mui/material";
import {
  CREATE_POST_FAILURE,
  CREATE_POST_SUCCESS,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_USER_POST_FAILURE,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
} from "./post.actionType";
import { GET_PROFILE_REQUEST } from "../Auth/auth.actionType";
import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import { CREATE_COMMENT_SUCCESS } from "../Comment/Comment.actiontype";

const initialState = {
  post: null,
  loading: false,
  error: null,
  posts: [],
  like: null,
  comments:[],
  newComment:null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST_REQUEST:
    case GET_PROFILE_REQUEST:
    case LIKE_POST_REQUEST:
      return { ...state, error: null, loading: false };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        posts: [action.payload, ...state.post],
        loading: false,
        error: null,
      };
      case GET_ALL_POST_SUCCESS:
        return {
            ...state,
            post: action.payload,
            comments:action.payload.comments,
            loading: false,
            error: null,
        }
        case LIKE_POST_SUCCESS :
            return{
                ...state,
                like: action.payload,
                posts:state.posts.map((item)=>item.id===action.payload.id? action.payload:item),
                loading: false,
                error: null,
            }

            case CREATE_COMMENT_SUCCESS :
                return{
                    ...state,
                    newComment:action.payload,
                    loading: false,
                    error: null,
                }

    case CREATE_POST_FAILURE:
    case GET_USER_POST_FAILURE:
    case LIKE_POST_FAILURE:
      return {
        ...state,

        loading: false,
        error: action.payload,
      };

      default:
        return state
  }
};
