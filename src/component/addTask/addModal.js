import "./addModal.scss";
import Input from "../input/input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addToTask} from "../../taskSlice";
function AddModal ({ addModalOpen,setAddModalOpen }) {
    const dispatch = useDispatch();
    let { task, status } = useSelector((state) => state);
  const [inpTitle, setInpTitle] = useState("");
  const [inpDescription, setinpDescription] = useState("");
//   let { task, status } = useSelector((state) => state);
//   function addTask(){

//   }
  return (
    <form>
        {console.log(inpTitle)}
        {console.log(task)}
      <label for="title"></label>
      <Input
        valueState={inpTitle}
        inputHandler={setInpTitle}
        className={"input-title"}
        placeholder={"title..."}
        type={"text"}
        required
      />
      <Input
        valueState={inpDescription}
        inputHandler={setinpDescription}
        className={"input-description"}
        placeholder={"description..."}
        type={"text"}
        required
      />
      <input
        value={"Submit"}
        type={"submit"}
        className={"submit-input"}
        // formnovalidate="formnovalidate"
          onClick={()=>dispatch(addToTask({title:inpTitle , description:inpDescription, image:"aaaa"}))}
      />
    </form>
  );
}
export default AddModal;
