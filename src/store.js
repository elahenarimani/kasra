import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";
import errorsSlice from "./errorsSlice"

// export const store = createStore(combinedReducers)

let store = configureStore({
    reducer: {
        tasks: taskSlice, 
        formErrors: errorsSlice 
    }
})
export default store