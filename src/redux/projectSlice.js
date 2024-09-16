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

// Create the project slice
const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.projects = action.payload; // Update projects with fetched data
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
