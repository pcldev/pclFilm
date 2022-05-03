import React from "react";
import "./SekeletonMovie.scss";
function SekeletonMovie(props) {
  return <div className={`animated-bg ${props.type}`}>{props.children}</div>;
}

export default SekeletonMovie;
