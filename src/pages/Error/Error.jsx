import React from "react";
import { NavLink } from "react-router-dom";
import ErrorImg from "../../assets/Error.png";
import "./Error.scss";
function Error(props) {
  return (
    <div className="error">
      <img src={ErrorImg} alt="" />
      <h2>{props.message || "We couldn't found this page!"}</h2>
      <p>
        You can click <NavLink to="/">here</NavLink> to go Home Page :&gt;
      </p>
    </div>
  );
}

export default Error;
