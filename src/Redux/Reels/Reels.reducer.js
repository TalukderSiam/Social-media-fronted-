import { Switch } from "@mui/material";
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
    LIKE_REELS_FAILURE,
    LIKE_REELS_REQUEST,
    LIKE_REELS_SUCCESS,
    
  } from "./Reels.action.Type";
  import { api, API_BASE_URL } from "../../Config/apii";
  

import { GET_PROFILE_REQUEST } from "../Auth/auth.actionType";
import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import { CREATE_COMMENT_SUCCESS } from "../Comment/Comment.actiontype";

const initialState = {
  REELS: null,
  loading: false,
  error: null,
  REELSs: [],
  like: null,
  comments:[],
  newComment:null,
  likes:[]
};

export const REELSReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_REELS_REQUEST:
    case CREATE_REELS_REQUEST:
    case LIKE_REELS_REQUEST:
    case GET_USER_REELS_REQUEST:
      return { ...state, error: null, loading: false };

    case CREATE_REELS_SUCCESS:
      return {
        ...state,
        REELS: action.payload,
        REELSs: [action.payload, ...state.REELSs],
        loading: false,
        error: null,
      } 
      case GET_ALL_REELS_SUCCESS:
      case GET_USER_REELS_SUCCESS:
        return {
            ...state,
            REELSs: action.payload,
            comments:action.payload.comments,
            likes:action.payload.likes,
            loading: false,
            error: null,
        }
        case LIKE_REELS_SUCCESS:
            return{
                ...state,
                like: action.payload,
                REELSs:state.REELSs.map((item)=>item.id===action.payload.id? action.payload:item),
                likes: [action.payload, ...state.likes],
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

    case CREATE_REELS_FAILURE:
    case GET_USER_REELS_FAILURE:
    case GET_ALL_REELS_FAILURE:
    case LIKE_REELS_FAILURE:
      return {
        ...state,

        loading: false,
        error: action.payload,
      }

      default:
        return state
  }
};
