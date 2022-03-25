import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./CardFilm.scss";

function CardFilm(props) {
  const { imageUrl, title } = props;

  const link = "/";
  return (
    <Link to="/">
      <div className="movie-card">
        <img src={imageUrl} alt="" />
        <Button>
          <i className="bx bx-play">Watch</i>
        </Button>
      </div>
      <h3>{title}</h3>
    </Link>
  );
}

export default CardFilm;
