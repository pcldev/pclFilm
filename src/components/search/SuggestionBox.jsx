import React from "react";
import { NavLink } from "react-router-dom";
import "./SuggestionBox.scss";
function SuggestionBox(props) {
  const suggestions = props.suggestions;
  const onClearInput = () => {
    props.onClick();
  };
  return (
    <div className={`suggestion-box ${props.className}`}>
      {suggestions.map((suggestion, index) => (
        <NavLink
          onClick={onClearInput}
          key={index}
          to={`/search/${suggestion}`}
        >
          {suggestion}
        </NavLink>
      ))}
    </div>
  );
}

export default SuggestionBox;
