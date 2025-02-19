// import "./addModal.scss";
// import Input from "../input/input";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addFetch } from "../../taskSlice";
// function AddModal({ addModalOpen, setAddModalOpen }) {
//   const dispatch = useDispatch();
//   let { task, status } = useSelector((state) => state);
//   const [inpTitle, setInpTitle] = useState("");
//   const [inpDescription, setinpDescription] = useState("");
//   function handleaddTask() {
//     dispatch(
//       addFetch({
//         title: inpTitle,
//         description: inpDescription,
//       })
//     );
//     setInpTitle("");
//     setinpDescription("");
//     setAddModalOpen(false);
//   }
//   if (status === "success ...") {
//     return <h3>داده ها با موفقیت ارسال شد</h3>;
//   }
//   if (status === "loading ...") {
//     return <h3>داده ها در حال ارسال است</h3>;
//   }
//   if (status === "failed ...") {
//     return <h3>عملیات با خطا مواجه است</h3>;
//   }
//   return (
//     <div className="form-wrapper">
//       <form className="form">
//         {console.log(inpTitle)}
//         {console.log(task)}
//         <label for="title"></label>
//         <Input
//           valueState={inpTitle}
//           inputHandler={setInpTitle}
//           className={"input-title"}
//           placeholder={"title..."}
//           type={"text"}
//           required
//         />
//         <Input
//           valueState={inpDescription}
//           inputHandler={setinpDescription}
//           className={"input-description"}
//           placeholder={"description..."}
//           type={"text"}
//           required
//         />
//         <input
//           value={"Submit"}
//           type={"submit"}
//           className={"submit-input"}
//           // formnovalidate="formnovalidate"
//           onClick={() => handleaddTask()}
//         />
//       </form>
//     </div>
//   );
// }
// export default AddModal;

import React from "react";
import "./addModal.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addFetch } from "../../taskSlice";
const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(5, "Too Short!")
    .max(800, "Too Long!")
    .required("Required"),
});
function AddModal({ addModalOpen, setAddModalOpen }) {
  const dispatch = useDispatch();
  let { task, status } = useSelector((state) => state);
  // if (!addModalOpen) return null;
  // if (status === "success ...") {
  //   return <h3>داده ها با موفقیت ارسال شد</h3>;
  // }
  if (status === "loading ...") {
    return <h3>داده ها در حال ارسال است</h3>;
  }
  if (status === "failed ...") {
    return <h3>عملیات با خطا مواجه است</h3>;
  }
  function handleAddTask(values) {
    dispatch(addFetch(values)); // ارسال اطلاعات به Redux
    setAddModalOpen(false); // بستن مدال بعد از ارسال
  }
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        {console.log("add")}
        <h1>Add Task</h1>
        <Formik
          initialValues={{
            title: "",
            description: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={handleAddTask}
        >
          {({ errors, touched, validateField, validateForm }) => (
            <Form>
              <div className="field-wrapper">
                <Field name="title" />
                {errors.title && touched.title ? (
                  <div className="error">{errors.title}</div>
                ) : null}
              </div>
              <div>
                <Field name="description" as="textarea" className="field-wrapper" />
                {errors.description && touched.description ? (
                  <div className="error">{errors.description}</div>
                ) : null}
              </div>
              <div className="button-wrapper">
                <button type="submit" className="submit-btn ">
                  Submit
                </button>
                <button
                  type="button"
                  className="cancel-btn "
                  onClick={() => setAddModalOpen(false)}
                >
                  cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default AddModal;
