import { createStore, combineReducers } from "redux";
import todo from "./todo";

export default createStore(
  combineReducers({ todo }),
  window.devToolsExtension && window.devToolsExtension()
);
