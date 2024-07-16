import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import authReduce from "./Auth/auth.reducer";
import { postReducer } from "./Post/post.reducer";

const rootReducers=combineReducers({
    auth:authReduce,
    post:postReducer
})

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk));