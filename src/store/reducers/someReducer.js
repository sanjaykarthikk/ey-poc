// /src/store/reducers/someReducer.js

const initialState = {
  // Initial state properties
};

const someReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_TYPE":
      return {
        ...state,
        // update state properties
      };
    default:
      return state;
  }
};

export default someReducer;
