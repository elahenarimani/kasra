import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export let taskFetch = createAsyncThunk("tasks/fetchTasks", () => {
  return fetch("https://6166c3df13aa1d00170a66b9.mockapi.io/tasks")
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
});



export let postFetch = createAsyncThunk("post/fetchPost", (title,description) => {
  return fetch("https://6166c3df13aa1d00170a66b9.mockapi.io/tasks", {
    method:"POST",
    body:JSON.stringify({title,description})
  })
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
      })
      .addCase(postFetch.pending, (state) => {
        state.status = "loading ...";
      })
      .addCase(postFetch.fulfilled, (state, action) => {
        state.status = "success ...";
        state.task = action.payload;
      })
      .addCase(postFetch.rejected, (state) => {
        state.status = "failed ...";
      })
  },
  // addToTask: (state , action)=>{
  //   state.push({id:Date.now(), title:action.payload.title ,description:action.payload.description ,image:action.payload.image})
  // }
});
export const {
  addToTask
} =taskSlice.actions;
export default taskSlice;

