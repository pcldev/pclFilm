import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import filmApi from "../api/fillmApi";
import ListFilm from "../components/cardFilm/ListFilm";
import SekeletonMovie from "../components/customSkeletonLoading/SekeletonMovie";
import LoadingSpinner from "../components/spinner/LoadingSpinner";

function ResultSearchFilmPage(props) {
  const [items, setItems] = useState();
  const params = useParams();
  useEffect(() => {
    try {
      const fetchResultSearchFilm = async () => {
        const response = await filmApi.postSearchFilmKeyWord(params.keyWord);
        setItems(response.data.searchResults);
      };
      fetchResultSearchFilm();
    } catch (err) {
      console.log(err);
    }
  }, [params.keyWord]);

  return <ListFilm items={items} />;
}

export default ResultSearchFilmPage;
