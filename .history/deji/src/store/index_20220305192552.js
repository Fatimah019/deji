/**
 * @description Redux Thunk is a middleware that allow me to call action creators that return a function instead of an action object
 */
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
