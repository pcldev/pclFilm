import React from "react";

import "./Input.scss";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange ? (e) => props.onChange(e) : null}
    />
  );
};

export default Input;
