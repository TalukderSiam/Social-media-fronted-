import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import authReduce from "./Auth/auth.reducer";
import { postReducer } from "./Post/post.reducer";
import { REELSReducer } from "./Reels/Reels.reducer";

const rootReducers=combineReducers({
    auth:authReduce,
    post:postReducer,
    reels:REELSReducer,
})

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk));