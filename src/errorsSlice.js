import { createSlice } from "@reduxjs/toolkit";
const errorsSlice = createSlice({
    name: "errors",
  initialState: {
    errors: [],
    status: "",
  },
  reducers: {}
})
// const errors = useSelector((state) => state.formErrors.errors);
// dispatch(removeError(index));
// export const { addError, removeError, clearErrors } = errorsSlice.actions;
export default errorsSlice;