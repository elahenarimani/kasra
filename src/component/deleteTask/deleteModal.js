import "./deleteModal.scss";
import Button from "../button/button";
import { deleteFetch } from "../../redux/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from '@reduxjs/toolkit'
function DeleteModal({ deleteId, setDeleteModal }) {
  const dispatch = useDispatch();
  let { status } = useSelector((state) => state);
  if (status === "loading ...") {
    return <h3>loading ...</h3>;
  }
  if (status === "failed ...") {
    return <h3>failed ..</h3>;
  }
  async function handleDeleteTask() {
    try{
     const resultAction = await dispatch(deleteFetch(deleteId));
     const promiseResult = unwrapResult(resultAction);
     console.log(promiseResult)
    }catch(err){
      throw err;
    }
  //   console.log("Deleting ID:", deleteId);
  //   dispatch(deleteFetch(deleteId));
    setDeleteModal(false);
  }
  return (
    <div className="modal-container">
      <div className="modal ">
        <div>
          <h1>Are you sure you want to delete this task?</h1>
        </div>
        <div className="button-wrapper">
          <Button
            onClickHandler={() => handleDeleteTask()}
            className={"submit-btn"}
          >
            Submit
          </Button>
          <Button
            onClickHandler={() => setDeleteModal(false)}
            className={"cancel-btn "}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
export default DeleteModal;
