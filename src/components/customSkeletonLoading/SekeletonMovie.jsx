import React from "react";

import "./SekeletonMovie.scss";
function SekeletonMovie(props) {
  switch (props.type) {
    case "hero-slide":
      return <div className="animated-bg hero-slide" />;

    case "banner":
      return <div className="animated-bg banner" />;

    case "list-movie":
      return <div className="animated-bg list-movie" />;

    case "coverVerticalUrl":
      return <div className="animated-bg coverVerticalUrl" />;

    case "coverHorizontalUrl":
      return <div className="animated-bg coverHorizontalUrl" />;

    case "title":
      return <div className="animated-bg title" />;

    case "genres":
      return <div className="animated-bg genres" />;

    case "overview":
      return <div className="animated-bg overview" />;

    case "movie":
      return <div className="animated-bg movie" />;

    case "movie_name":
      return <div className="animated-bg movie_name" />;

    default:
      return <></>;
  }
}

export default SekeletonMovie;
