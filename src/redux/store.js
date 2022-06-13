import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import userReducer from "./userReducer";
import taskReducer from "./taskReducer";

let reducers = combineReducers({
    userReducer,
    taskReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;