import { createStore, applyMiddleware } from "redux";
import Reducer from "./Reducers";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);

const Store = createStore(Reducer, {}, middleware);

export default Store;
