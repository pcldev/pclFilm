import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BannerSlide from "../components/bannerSlide/BannerSlide";
import OutlineButton from "../components/button/OutlineButton";
import MovieList from "../components/movie-list/MovieList";

import filmApi from "../api/fillmApi";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
function Home(props) {
  const [items, setItems] = useState(null);
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await filmApi.getSearchLeaderBoard();
        setMovieItems(response.data.list);
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);
  useEffect(() => {
    try {
      const fetchListFilm = async () => {
        const response = await filmApi.getHome();
        console.log(response);
        setItems(
          response.data.recommendItems
            .filter((item) => !item.bannerProportion)
            .filter((item) => item.homeSectionName !== "")
        );
      };
      fetchListFilm();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      {items && movieItems ? (
        <React.Fragment>
          <BannerSlide movieItems={movieItems} />
          <div className="container">
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Trending Movies</h2>
                <Link to="/movie">
                  <OutlineButton className="small">View more</OutlineButton>
                </Link>
              </div>
              <MovieList items={items} />
            </div>
          </div>
        </React.Fragment>
      ) : (
        <p className="centered">
          <LoadingSpinner />
        </p>
      )}
    </>
  );
}

export default Home;
