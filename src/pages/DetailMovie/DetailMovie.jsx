import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NavLink, useParams } from "react-router-dom";
import filmApi from "../../api/fillmApi";
import OutlineButton from "../../components/button/OutlineButton";
import SekeletonMovie from "../../components/customSkeletonLoading/SekeletonMovie";
import MovieList from "../../components/movie-list/MovieList";

import "./DetailMovie.scss";
import MoviePlayer from "./Player";

function DetailMovie(props) {
  const { id, category } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchDetailMovie = async () => {
      const response = await filmApi.getMovieDetail({
        id,
        category: category - 1,
      });
      document.title = `Watching ${response.data.name}`;
      setItem(response.data);
      window.scrollTo(0, 0);
    };
    fetchDetailMovie();
  }, [id, category]);

  console.log(item)

  return (
    <>
      {
        <>
          {item ? (
            <div
              className="banner"
              style={{
                backgroundImage: `url(${item.coverVerticalUrl})`,
              }}
            ></div>
          ) : (
            <SekeletonMovie type="banner" />
          )}

          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div className="movie-content__poster__img">
                {item ? (
                  <LazyLoadImage src={item.coverVerticalUrl} effect="blur" />
                ) : (
                  <SekeletonMovie type="coverVerticalUrl" />
                )}
              </div>
            </div>
            <div className="movie-content__info">
              <div className="title">
                {item ? item.name : <SekeletonMovie type="title" />}
              </div>
              <div className="genres">
                {item ? (
                  item.tagNameList?.map((tagName, index) => (
                    <span key={index} className="genres__item">
                      {tagName}
                    </span>
                  ))
                ) : (
                  <SekeletonMovie type="genres" />
                )}
              </div>
              <p className="overview">
                {item ? item.introduction : <SekeletonMovie type="overview" />}
              </p>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              {item ? (
                <MoviePlayer item={item} />
              ) : (
                <SekeletonMovie type="movie" />
              )}
              <h2 className="mt-2 font-size-22 ">
                {item ? item.name : <SekeletonMovie type="movie_name" />}
              </h2>
              {item && item.episodeVo.length > 1 && (
                <div className="container section mt-2 mb-2 episode">
                  <h3>Episodes</h3>
                  <div className="episodes">
                    {item.episodeVo.map((ele, index) => (
                      <NavLink
                        to={`/tv/${id}/${ele.seriesNo - 1}`}
                        activeClassName="active"
                        key={index}
                      >
                        <OutlineButton className="small">
                          {ele.seriesNo}
                        </OutlineButton>
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
              {item && (
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
              )}
            </div>
          </div>
        </>
      }
    </>
  );
}

export default DetailMovie;
