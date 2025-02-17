import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { add, remove } from "./redux/reducers/todos/todosReducer";
import { useEffect, useMemo, useState } from "react";
import { taskFetch } from "./taskSlice";
import { isAsyncThunkAction } from "@reduxjs/toolkit";
import Button from "./component/button";

function App() {
  const dispatch = useDispatch();
  let { task, status } = useSelector((state) => state);

  const [currentPage, setCurrentPage] = useState(1);
  const filteredData = useMemo(() => {
    return task.map((item) => item);
  }, [task]);
  useEffect(() => {
    dispatch(taskFetch());
  }, []);

  // const todoList = useSelector((state)=> state.todo)
  if (status === "loading ...") {
    return <h3>عملیات در حال انجام است</h3>;
  }
  if (status === "failed ...") {
    return <h3>عملیات با خطا مواجه است</h3>;
  }
  function handlePrevPage() {
    console.log("hi");
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function handleNextPage() {
    if (currentPage < Math.ceil(filteredData.length / 20)) {
      setCurrentPage(currentPage + 1);
    }
  }

  //  let slisedTask=filteredData.slice(indexOfFirstTask , indexOfLastTask)
  // function sliceTask(){
  //   let indexOfLastTask = currentPage * 20;
  //   let indexOfFirstTask =indexOfLastTask -20;
  //   let slisedTask=filteredData.slice(indexOfFirstTask , indexOfLastTask)
  //     return slisedTask
  // }
  return (
    <div className="App">
      <div className="task-wrapper">
        {filteredData
          ?.slice(currentPage * 20 - 20, currentPage * 20)
          .map((item) => (
            <div key={item.id} className="task">
              <p>{item.title} {item.id}</p>
              <p className="task-description" >{item.description}</p>
              <div className="img-wrapper">
                <img aria-label="nature" src={item.image} />
              </div>
            </div>
          ))}
      </div>
      <p>{console.log(filteredData)}</p>
      <p>{currentPage}</p>
      <footer>
        <Button
          className="icon-prev"
          onClickHandler={handlePrevPage}
          disabled={currentPage === 1}
        >
          <GrFormPrevious />
        </Button>
        <Button
          className="icon-next"
          onClickHandler={handleNextPage}
          disabled={currentPage === Math.ceil(filteredData.length / 20)}
        >
          <GrFormNext />
        </Button>
      </footer>
    </div>
  );
}
export default App;
