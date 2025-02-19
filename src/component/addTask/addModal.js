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
