import React from "react";
import "./header.css";
import AddTodo from "../addTodo/AddTodo";
import themeIcon from "../../assets/images/icon-sun.svg";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <div className="wrapper container-fuild">
      <div className="container">
        <div className="d-flex justify-content-center ">
          <div className="title-container">
            <p className="title">todo</p>
            <a href="">
              <img src={themeIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
