// import "./editTask.scss";
// import Input from "../input/input";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { editFetch } from "../../taskSlice";
// function EditTask({
//   editIDMode,
//   editModalOpen,
//   setEditOpen,
//   inpTitle,
//   inpDescription,
// }) {
//   const dispatch = useDispatch();
//   let { task, status } = useSelector((state) => state);
//   const [inpTitleEdit, setInpTitleEdit] = useState(inpTitle);
//   const [inpDescriptionEdit, setinpDescriptionEdit] = useState(inpDescription);
//   function handleeditTask() {
//     dispatch(
//     editFetch({
//          title: inpTitleEdit,
//          description: inpDescriptionEdit,
//          id:editIDMode.id
//        })
//     );
//     setEditOpen(false)
//   }
//   if (status === "success ...") {
//     return <h3>داده ها با موفقیت ارسال شد</h3>;
//   }
//   console.log(task);
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
//           valueState={inpTitleEdit}
//           inputHandler={setInpTitleEdit}
//           className={"input-title"}
//           placeholder={"title..."}
//           type={"text"}
//           required
//         />
//         <Input
//           valueState={inpDescriptionEdit}
//           inputHandler={setinpDescriptionEdit}
//           className={"input-description"}
//           placeholder={"description..."}
//           type={"text"}
//           required
//         />
//         <div className="button-control">
//           {" "}
//           <input
//             value={"Submit"}
//             type={"submit"}
//             className={"submit-input"}
//             onClick={() => handleeditTask()}
//           />
//           <input
//             value={"Cancel"}
//             className={"cancel-input"}
//             onClick={() => setEditOpen(false)}
//           />
//         </div>
//       </form>
//     </div>
//   );
// }
// export default EditTask;

import React from "react";
import "../styles/modal.scss";
// import "./editModal.scss"
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { editFetch } from "../../taskSlice";
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
function EditModal({
  editIDMode,
  editModalOpen,
  setEditModalOpen,
  inpTitle,
  inpDescription,
}) {
  const dispatch = useDispatch();
  let { status } = useSelector((state) => state);
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
  // function handleAddTask(values) {
  //   dispatch(editFetch(values)); // ارسال اطلاعات به Redux
  //   setAddModalOpen(false); // بستن مدال بعد از ارسال
  // }

  function handleeditTask(values) {
    dispatch(
      editFetch(
      {...values , id:editIDMode.id}
      )
    );
    setEditModalOpen(false);
  }
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        {console.log("add")}
        <h1>Edit Task</h1>
        <Formik
          initialValues={{
            title: inpTitle || "",
            description: inpDescription || "",
          }}
          validationSchema={SignupSchema}
          onSubmit={handleeditTask}
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
                <Field
                  name="description"
                  as="textarea"
                  className="field-wrapper"
                />
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
                  onClick={() => setEditModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default EditModal;
