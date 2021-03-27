import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import createRootReducer from "./state";

export const store = createStore(
    createRootReducer(),
    compose(applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ))
)
