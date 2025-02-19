import "./editTask.scss";
import Input from "../input/input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editFetch } from "../../taskSlice";
// import { addFetch } from "../../taskSlice";
//   let { task, status } = useSelector((state) => state);
function EditTask({
  editIDMode,
  editModalOpen,
  setEditOpen,
  inpTitle,
  inpDescription,
}) {
  const dispatch = useDispatch();
  let { task, status } = useSelector((state) => state);
  const [inpTitleEdit, setInpTitleEdit] = useState(inpTitle);
  const [inpDescriptionEdit, setinpDescriptionEdit] = useState(inpDescription);
  function handleeditTask() {
    dispatch(
    editFetch({
         title: inpTitleEdit,
         description: inpDescriptionEdit,
         id:editIDMode.id
       })
    );
    setEditOpen(false)
    // setInpTitleEdit("");
    // setinpDescriptionEdit("");
    //  setAddModalOpen(false);
  }
  // if (status === "success ...") {
  //   return <h3>داده ها با موفقیت ارسال شد</h3>;
  // }
  console.log(task);
  if (status === "loading ...") {
    return <h3>داده ها در حال ارسال است</h3>;
  }
  if (status === "failed ...") {
    return <h3>عملیات با خطا مواجه است</h3>;
  }
  return (
    <div className="form-wrapper">
      <form className="form">
        {console.log(inpTitle)}
        {console.log(task)}
        <label for="title"></label>
        <Input
          valueState={inpTitleEdit}
          inputHandler={setInpTitleEdit}
          className={"input-title"}
          placeholder={"title..."}
          type={"text"}
          required
        />
        <Input
          valueState={inpDescriptionEdit}
          inputHandler={setinpDescriptionEdit}
          className={"input-description"}
          placeholder={"description..."}
          type={"text"}
          required
        />
        <div className="button-control">
          {" "}
          <input
            value={"Submit"}
            type={"submit"}
            className={"submit-input"}
            // formnovalidate="formnovalidate"
            onClick={() => handleeditTask()}
          />
          <input
            value={"Cancel"}
            //   type={"submit"}
            className={"cancel-input"}
            // formnovalidate="formnovalidate"
            onClick={() => setEditOpen(false)}
          />
        </div>
      </form>
    </div>
  );
}
export default EditTask;
