import React from "react";
import "../styles/modal.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addFetch } from "../../redux/taskSlice";
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
  let { status } = useSelector((state) => state);
  if (status === "loading ...") {
    return <h3>loading ...</h3>;
  }
  if (status === "failed ...") {
    return <h3>failed ...</h3>;
  }
  function handleAddTask(values) {
    dispatch(addFetch(values));  
    setAddModalOpen(false);  
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
export default AddModal;
