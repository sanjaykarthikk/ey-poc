// /src/store/reducers/index.js

import { combineReducers } from "redux";
import someReducer from "./someReducer"; // Import other reducers

const rootReducer = combineReducers({
  someReducer, // Add other reducers here
  // additionalReducer: additionalReducer, (Example)
});

export default rootReducer;
