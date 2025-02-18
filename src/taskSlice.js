import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export let taskFetch = createAsyncThunk("tasks/fetchTasks", async () => {
  //get
  return await fetch("https://6166c3df13aa1d00170a66b9.mockapi.io/tasks")
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
});

export let deletekFetch = createAsyncThunk("task/deleteTasks", async (id) => {
  return await fetch(
    `https://6166c3df13aa1d00170a66b9.mockapi.io/tasks/${id}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => {
      throw error;
    });
});

// export let postFetch = createAsyncThunk("post/fetchPost", (title,description) => {
//   return fetch("https://6166c3df13aa1d00170a66b9.mockapi.io/tasks", {
//     method:"POST",
//     body:JSON.stringify({title,description})
//   })
//     .then((response) => response.json())
//     .catch((error) => {
//       throw error;
//     });
// });
const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: [],
    status: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    //state update
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
      // .addCase(postFetch.pending, (state) => {
      //   state.status = "loading ...";
      // })
      // .addCase(postFetch.fulfilled, (state, action) => {
      //   state.status = "success ...";
      //   state.task = action.payload;
      // })
      // .addCase(postFetch.rejected, (state) => {
      //   state.status = "failed ...";
      // })
      // .addCase(deletekFetch.pending, (state) => {
      //   state.status = "loading ...";
      // })
      .addCase(deletekFetch.fulfilled, (state, action) => {
        state.status = "success ...";
        state.task = state.task.filter((task) => task.id !== action.payload.id);
      });
    // .addCase(deletekFetch.rejected, (state) => {
    //   state.status = "failed ...";
    // })
  },
  // addToTask: (state , action)=>{
  //   state.push({id:Date.now(), title:action.payload.title ,description:action.payload.description ,image:action.payload.image})
  // }
});
export const { addToTask } = taskSlice.actions;
export default taskSlice;
