import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import filmApi from "../api/fillmApi";
import ListFilm from "../components/cardFilm/ListFilm";
import LoadingSpinner from "../components/spinner/LoadingSpinner";

function ResultSearchFilmPage(props) {
  const [items, setItems] = useState();
  const params = useParams();
  useEffect(() => {
    try {
      const fetchResultSearchFilm = async () => {
        const response = await filmApi.postSearchFilmKeyWord(params.keyWord);
        console.log(response.data.searchResults);
        setItems(response.data.searchResults);
      };
      fetchResultSearchFilm();
    } catch (err) {
      console.log(err);
    }
  }, [params.keyWord]);

  return items ? (
    <ListFilm items={items} />
  ) : (
    <p className="centered">
      <LoadingSpinner />
    </p>
  );
}

export default ResultSearchFilmPage;
