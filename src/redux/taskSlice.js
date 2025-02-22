import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export let taskFetch = createAsyncThunk("tasks/fetchTasks", async () => {
  //get
  return await fetch("https://6166c3df13aa1d00170a66b9.mockapi.io/tasks")
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
});

export let deleteFetch = createAsyncThunk("task/deleteTasks", async (id) => {
  await fetch(`https://6166c3df13aa1d00170a66b9.mockapi.io/tasks/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
  return  id ;
});

export let addFetch = createAsyncThunk(
  "task/addTasks",
  async ({ title, description }) => {
    try {
      const newTask = {
        title: title,
        description: description,
      };
      const response = await fetch(
        `https://6166c3df13aa1d00170a66b9.mockapi.io/tasks/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
);

export let editFetch = createAsyncThunk(
  "task/editTasks",
  async ({title, description, id }) => {
    try {
      const changeTask = {
        title: title,
        description: description,
      };
      const response = await fetch(
        `https://6166c3df13aa1d00170a66b9.mockapi.io/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(changeTask),
        }
      );
      const result = await response.json();
      return { editedResult: result , editedId: id };
    } catch (error) {
      throw error;
    }
  }
);
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

      .addCase(deleteFetch.pending, (state) => {
        state.status = "loading ...";
      })
      .addCase(deleteFetch.fulfilled, (state, action) => {
        state.status = "success ...";
        state.task = state.task.filter((task) => task.id !== action.payload);
      })
      .addCase(deleteFetch.rejected, (state) => {
        state.status = "failed ...";
      })

      .addCase(addFetch.pending, (state) => {
        state.status = "loading ...";
      })
      .addCase(addFetch.fulfilled, (state, action) => {
        state.status = "success ...";
        state.task = state.task.concat(action.payload);
      })
      .addCase(addFetch.rejected, (state) => {
        state.status = "failed ...";
      })

      .addCase(editFetch.pending, (state) => {
        state.status = "loading ...";
      })
      .addCase(editFetch.fulfilled, (state, action) => {
        state.status = "success ...";
        state.task = state.task.map((task) =>
          task.id === action.payload.editedId ? action.payload.editedResult : task
        );
      })
      .addCase(editFetch.rejected, (state) => {
        state.status = "failed ...";
      });
  },
});
export default taskSlice;
