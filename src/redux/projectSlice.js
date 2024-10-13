import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action to fetch projects from the JSON file
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await fetch("/projects.json");
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    const data = await response.json();
    return data;
  }
);

// Define initial state
const initialState = {
  projects: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Create the project slice
const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setLoading(state) {
      state.status = "loading"; // Set loading status
    },
    setProjects(state, action) {
      state.status = "succeeded"; // Set succeeded status
      state.projects = action.payload; // Update projects with fetched data
    },
    setError(state, action) {
      state.status = "failed"; // Set failed status
      state.error = action.payload; // Set error message
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading"; // Set loading status
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded"; // Set succeeded status
        state.projects = action.payload; // Update projects with fetched data
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed"; // Set failed status
        state.error = action.error.message; // Set error message
      });
  },
});

// Export actions
export const { setLoading, setProjects, setError } = projectSlice.actions;

// Export the async thunk
export default projectSlice.reducer; // Export the reducer
