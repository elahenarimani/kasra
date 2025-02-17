import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice"

// export const store = createStore(combinedReducers)

let store = configureStore({
    reducer : taskSlice.reducer
})
export default store