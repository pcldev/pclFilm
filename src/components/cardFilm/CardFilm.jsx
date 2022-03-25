import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./CardFilm.scss";

function CardFilm(props) {
  let { id, category, imageUrl, title, type } = props;
  category = category ? category : 0;
  let link;
  if (type === "MOVIE") {
    link = `/movie/${id}/${category}`;
  } else if (type === "TV") {
    link = `/tv/${id}/${category}`;
  }
  return (
    <Link to={link}>
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
