import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./CardFilm.scss";

function CardFilm(props) {
  const { imageUrl, title } = props;

  const link = "/";
  return (
    <Link to="/">
      <div className="movie-card">
        <LazyLoadImage src={imageUrl} effect="blur" />
        <Button>
          <i className="bx bx-play">Watch</i>
        </Button>
      </div>
      <h3>{title}</h3>
    </Link>
  );
}

export default CardFilm;
