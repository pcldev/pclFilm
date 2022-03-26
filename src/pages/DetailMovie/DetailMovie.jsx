import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NavLink, useParams } from "react-router-dom";
import filmApi from "../../api/fillmApi";
import OutlineButton from "../../components/button/OutlineButton";
import MovieList from "../../components/movie-list/MovieList";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";

import "./DeatailMovie.scss";
import Player from "./Player";

function DetailMovie(props) {
  const { id, category } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchDetailMovie = async () => {
      const response = await filmApi.getMovieDetail({ id, category });
      setItem(response.data);
      window.scrollTo(0, 0);
    };
    fetchDetailMovie();
  }, [id, category]);

  console.log(item);
  return (
    <>
      {item ? (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${item.coverVerticalUrl})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div className="movie-content__poster__img">
                <LazyLoadImage src={item.coverVerticalUrl} effect="blur" />
              </div>
            </div>
            <div className="movie-content__info">
              <div className="title">{item.name}</div>
              <div className="genres">
                {item.tagNameList &&
                  item.tagNameList.map((tagName, index) => (
                    <span key={index} className="genres__item">
                      {tagName}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.introduction}</p>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              <Player item={item} />
              <h2 className="mt-2 font-size-22 ">{item.name}</h2>

              {item.episodeVo.length > 1 && (
                <div className="container section mt-2 mb-2 episode">
                  <h3>Episodes</h3>
                  {item.episodeVo.map((ele, index) => (
                    <NavLink
                      to={`/tv/${id}/${ele.seriesNo}`}
                      activeClassName="active"
                      key={index}
                    >
                      <OutlineButton className="small">
                        {ele.seriesNo}
                      </OutlineButton>
                    </NavLink>
                  ))}
                </div>
              )}
              <div className="section mb-3">
                <div className="section__header mb-2">
                  <h2 className="mt-2">Similar</h2>
                </div>
                <MovieList
                  items={
                    item.refList.length !== 0 ? item.refList : item.likeList
                  }
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="mg-8">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
}

export default DetailMovie;
