// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice"; // This should work correctly now

export const store = configureStore({
  reducer: {
    projects: projectReducer, // Make sure this references the correct reducer
  },
});
