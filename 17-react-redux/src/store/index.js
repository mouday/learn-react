import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { counter } from "./reducers.js";

const store = createStore(counter, applyMiddleware(thunkMiddleware));

export default store;
