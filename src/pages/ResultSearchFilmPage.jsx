import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import filmApi from "../api/fillmApi";
import ListFilm from "../components/cardFilm/ListFilm";
import Error from "./Error/Error";

function ResultSearchFilmPage(props) {
  const [items, setItems] = useState();
  const params = useParams();
  useEffect(() => {
    try {
      document.title = "pclfilm";
      const fetchResultSearchFilm = async () => {
        const response = await filmApi.postSearchFilmKeyWord(params.keyWord);
        setItems(response.data.searchResults);
      };
      fetchResultSearchFilm();
    } catch (err) {
      return <Error message={err.message} />;
    }
  }, [params.keyWord]);

  return (
    <div className="mt-8rem pd-20">
      <h2 className="container">Search results for "{params.keyWord}"</h2>
      {items && items.length === 0 ? (
        <Error message="No film couldn't not be found!" />
      ) : (
        <ListFilm items={items} />
      )}
    </div>
  );
}

export default ResultSearchFilmPage;
