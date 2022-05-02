import React from "react";
import "./Input.scss";

const Input = (props) => {
  return (
    <div className={`search-input `}>
      <input
        autoFocus
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange ? (e) => props.onChange(e) : null}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
