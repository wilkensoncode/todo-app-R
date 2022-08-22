import React from "react";
import "./addTodo.css";

const AddTodo = () => {
  function handleTodo() {
    console.log(1);
  }

  return (
    <>
      <form className="container d-flex justify-content-center form-container">
        <div className="addTodo-container todo-form-container">
          <div className="box-shodow">
            <input
              className="input-todo text-white todo-bg"
              type="text"
              placeholder="create a new todo..."
            />
            <input className="input-btn" type="radio" />
          </div>
          <div className="todo-bg mt-4 list-todo text-white box-shodow">
            <ul className="list-unstyled pl-2">
              <li className="border-bottom border-dark">
                <input type="radio" /> a todo is added
              </li>
              <li className="border-bottom border-dark">
                <input type="radio" /> a todo is added
              </li>
              <li className="border-bottom border-dark">
                <input type="radio" /> a todo is added
              </li>
              <li className="border-bottom border-dark">
                <input type="radio" /> a todo is added
              </li>
            </ul>
            <div className="container">
              <div className="row action pb-2">
                <div className=" pl-3 pr-5 btn text-white">Items left</div>
                <div className="d-flex">
                  <div className="pl-3 pr-4 btn text-white">All</div>
                  <div className="pr-4 btn text-white">Active </div>
                  <div className="pr-4 btn text-white">Completed</div>
                </div>
                <div className="col btn text-white">Clear Completed</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
