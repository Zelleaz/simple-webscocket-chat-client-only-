import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./reducers/userReducer/userReducer";
import {messageReducer} from "./reducers/messageReducer/messageReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    user: userReducer,
    messages: messageReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

export type Action<T, P> = {
    type: T,
    payload: P
}