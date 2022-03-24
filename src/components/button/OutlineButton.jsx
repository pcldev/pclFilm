import React from "react";
import "./Button.scss";
function OutlineButton(props) {
  return (
    <button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default OutlineButton;
