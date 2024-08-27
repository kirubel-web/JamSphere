import { combineReducers } from "@reduxjs/toolkit";
import songsReducer from "./songs/songsSlice";

const rootReducer = combineReducers({
  songs: songsReducer,
});

export default rootReducer;