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
          <div>
            <input
              className="input-todo text-white todo-bg"
              type="text"
              placeholder="create a new todo..."
            />
            <input className="input-btn" type="radio" />
          </div>
          <div className="todo-bg mt-3 list-todo text-white">
            <ul className="list-unstyled pl-2">
              <li>
                <input type="radio" /> a todo is added
              </li>
              <li>
                <input type="radio" /> a todo is added{" "}
              </li>
              <li>
                <input type="radio" /> a todo is added{" "}
              </li>
              <li>
                <input type="radio" /> a todo is added{" "}
              </li>
              <li>
                <input type="radio" /> a todo is added{" "}
              </li>
              <li>
                <input type="radio" /> a todo is added{" "}
              </li>
              <li>
                <input type="radio" /> a todo is added{" "}
              </li>
            </ul>
            <div className="container">
              <div className="row pt-3 action pb-2">
                <div className=" pl-3 pr-5">Items left</div>
                <div className="d-flex">
                  <div className="pl-3 pr-4">All</div>
                  <div className="pr-4">Active </div>
                  <div className="pr-4">Completed</div>
                </div>
                <div className="col">Clear Completed</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
