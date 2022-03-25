import React from "react";
import Button from "./Button";
import "./Button.scss";
function OutlineButton(props) {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}

export default OutlineButton;
