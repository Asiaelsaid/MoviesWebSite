import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import moviesReducer from "./moviesReducer";

export default combineReducers({
  movies: moviesReducer,
  favorite: favoriteReducer,
});
