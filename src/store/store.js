import { createStore } from "redux";
import rootReducer from "./reducers"; // Assuming you have a rootReducer

const store = createStore(
  rootReducer,
  // Optionally, add middleware and enhancers here
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
