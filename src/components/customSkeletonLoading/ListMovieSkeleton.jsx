import React from "react";
import SekeletonMovie from "./SekeletonMovie";
import "./ListMovieSkeleton.scss";
function ListMovieSkeleton(props) {
  return [1, 2, 3, 4, 5, 6, 7].map((item) => (
    <div key={item}>
      <SekeletonMovie type="title" />
      <div className="list_movie">
        {[1, 2, 3, 4, 5, 6, 7].map((second_item) => (
          <SekeletonMovie key={second_item} type="movie_item" />
        ))}
      </div>
    </div>
  ));
}

export default ListMovieSkeleton;
