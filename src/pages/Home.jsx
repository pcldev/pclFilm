import React, { useEffect, useState } from "react";
import filmApi from "../api/fillmApi";
import BannerSlide from "../components/bannerSlide/BannerSlide";
import MovieList from "../components/movie-list/MovieList";
import Error from "./Error/Error";

function Home(props) {
  const [items, setItems] = useState(null);
  const [movieItems, setMovieItems] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await filmApi.getSearchLeaderBoard();
        document.title = "pclfilm";
        setMovieItems(response.data.list);
      } catch (err) {
        return <Error message={err.message} />;
      }
    };
    getMovies();
  }, []);
  useEffect(() => {
    try {
      const fetchListFilm = async () => {
        const response = await filmApi.getHome();
        setItems(
          response.data?.recommendItems
            .filter((item) => !item.bannerProportion)
            .filter((item) => item.homeSectionName !== "")
        );
      };
      fetchListFilm();
    } catch (err) {
      return <Error message={err.message} />;
    }
  }, []);
  return (
    <>
      <div>
        <BannerSlide movieItems={movieItems} />
        <div className="container">
          <div className="section mb-3">
            <div className="section__header mb-2"></div>
            <MovieList items={items} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
