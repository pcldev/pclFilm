import React from "react";
import { Link } from "react-router-dom";
import BannerSlide from "../components/bannerSlide/BannerSlide";
import OutlineButton from "../components/button/OutlineButton";
import MovieList from "../components/movie-list/MovieList";

function Home(props) {
  return (
    <>
      <BannerSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList />
        </div>
      </div>
    </>
  );
}

export default Home;
