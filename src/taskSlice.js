import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export let taskFetch = createAsyncThunk("tasks/fetchTasks", () => {
  return fetch("https://6166c3df13aa1d00170a66b9.mockapi.io/tasks")
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
});
const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: [],
    status: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(taskFetch.pending, (state) => {
        state.status = "loading ...";
      })
      .addCase(taskFetch.fulfilled, (state, action) => {
        state.status = "success ...";
        state.task = action.payload;
      })
      .addCase(taskFetch.rejected, (state) => {
        state.status = "failed ...";
      });
  },
});
export default taskSlice;

