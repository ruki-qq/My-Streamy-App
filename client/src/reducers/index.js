import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamReducer";
import googleOAuthReducer from "./googleOAuthReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  auth: googleOAuthReducer,
  form: formReducer,
  streams: streamReducer,
  modal: modalReducer,
});
