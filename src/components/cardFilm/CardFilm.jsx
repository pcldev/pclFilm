import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./CardFilm.scss";

function CardFilm(props) {
  let { id, category, imageUrl, title } = props;

  //category = category ? category : 0;
  let link = "/";

  if (category === 0 || props.domainType === 0) {
    link = `/movie/${id}/${category ? category + 1 : props.domainType + 1}`;
  } else if (category === 1 || props.domainType === 1) {
    link = `/tv/${id}/${category ? category - 1 : props.domainType - 1}`;
  }
  return (
    <Link to={link} title={title}>
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
