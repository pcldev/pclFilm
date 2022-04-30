import React from "react";
import "./SekeletonMovie.scss";
function SekeletonMovie(props) {
  return <div className={`animated-bg ${props.type}`}/>
}

export default SekeletonMovie;
