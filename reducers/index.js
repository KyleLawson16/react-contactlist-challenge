import { combineReducers } from "redux";
import { contacts, favorites } from "./contacts";

const reducers = combineReducers({
  contacts,
  favorites
});

export default reducers;
