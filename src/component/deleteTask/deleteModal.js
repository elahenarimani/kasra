import Button from "../button/button";

// import "../styles/modal.scss";
import "./deleteModal.scss"
import { deleteFetch } from "../../redux/taskSlice";
import { useDispatch, useSelector } from "react-redux";
function DeleteModal({ deleteId , setDeleteModal }) {
  const dispatch = useDispatch();
  let { status } = useSelector((state) => state);
  // if (!addModalOpen) return null;
  // if (status === "success ...") {
  //   return <h3>داده ها با موفقیت ارسال شد</h3>;
  // }
  if (status === "loading ...") {
    return <h3>loading ...</h3>;
  }
  if (status === "failed ...") {
    return <h3>failed ..</h3>;
  }
  function handleDeleteTask() {
    console.log("Deleting ID:", deleteId);
    dispatch(deleteFetch(deleteId));
    setDeleteModal(false);
  }
  return (
    <div className="modal-container">
      <div className="modal ">
        <div>
          <h1>Are you sure you want to delete this task?</h1>
        </div>
        <div className="button-wrapper">
          <Button onClickHandler={() => handleDeleteTask()} className={"submit-btn"}>Submit</Button>
          <Button onClickHandler={() => setDeleteModal(false)} className={"cancel-btn "}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}
export default DeleteModal;
