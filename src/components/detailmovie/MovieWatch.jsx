import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import calendarImg from "../../assets/calendar.png";
import starImg from "../../assets/star.png";
import MoviePlayer from "./Player";
import { resizeImage } from "../../share/tools";
import OutlineButton from "../button/OutlineButton";
import SekeletonMovie from "../customSkeletonLoading/SekeletonMovie";
import MovieList from "../movie-list/MovieList";
import ListChat from "../Signin/ListChat";
import SendComment from "../Signin/SendComment";
import Signin from "../Signin/Signin";
import "./MovieWatch.scss";
const MovieWatch = (props) => {
  const { user, messages, id, item } = props;
  return (
    <div>
      {item ? (
        <div
          className="banner"
          style={{
            backgroundImage: `url(${resizeImage(
              item.coverVerticalUrl,
              "900"
            )})`,
          }}
        ></div>
      ) : (
        <SekeletonMovie type="banner" />
      )}

      <div className="mb-3 movie-content container">
        <div className="movie-content__poster">
          <div className="movie-content__poster__img">
            {item ? (
              <LazyLoadImage
                src={resizeImage(item.coverVerticalUrl, "500")}
                effect="blur"
              />
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
          <div className="overview">
            {item ? item.introduction : <SekeletonMovie type="overview" />}
          </div>
        </div>
      </div>
      <div className="container" style={{ zIndex: 2 }}>
        <div className="section mb-3">
          {item ? <MoviePlayer item={item} /> : <SekeletonMovie type="movie" />}
          {item ? (
            <div className="thumbnail">
              <h2 className="mt-2 font-size-22 ">{item.name}</h2>
              <br />
              <div className="thumbnail-icon">
                <div>
                  <img src={starImg} alt="" />
                  <span>
                    {item.score ? `${item.score} / 10` : "No scores rate yet!"}
                  </span>
                </div>
                <div>
                  <img src={calendarImg} alt="" />
                  <span>{item.year}</span>
                </div>
              </div>
            </div>
          ) : (
            <SekeletonMovie type="movie_name" />
          )}

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
          <div className="comments">
            <h3>Comments</h3>
            <div className="section">
              {messages.length > 0 && <ListChat messages={messages} id={id} />}
              {user ? (
                <div>
                  <SendComment />
                </div>
              ) : (
                <Signin />
              )}
            </div>
          </div>

          {item && (
            <div className=" mb-3">
              <div className="section__header mb-2">
                <h2 className="mt-2">Similar</h2>
              </div>
              <div className="section">
                <MovieList
                  items={
                    item.refList.length !== 0 ? item.refList : item.likeList
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieWatch;
