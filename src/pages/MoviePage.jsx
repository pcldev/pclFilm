import React, { useCallback, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useParams } from "react-router-dom";
import filmApi from "../api/fillmApi";
import MovieWatch from "../components/detailmovie/MovieWatch";
import { auth, db } from "../config/firebase";
import useAsync from "../hooks/useAsync";
import { FilmNotFound } from "../share/constants";
import Error from "./Error/Error";

function DetailMovie(props) {
  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [checkFilmExisted, setCheckFilmExisted] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await filmApi.getMovieDetail({
        id,
        category: props.type === "tv" ? 1 : 0,
      });
      document.title = `${
        response.data ? `Watching ${response.data.name}` : FilmNotFound
      }`;
      if (!response.data) setCheckFilmExisted(false);
      window.scrollTo(0, 0);
      return response.data;
    } catch (err) {
      return <Error message={err.message} />;
    }
  }, [id, props.type]);

  useAsync(fetchData, setItem);

  useEffect(() => {
    db.collection("comments")
      .orderBy("createdAt", "desc")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  if (checkFilmExisted === true)
    return <MovieWatch user={user} messages={messages} id={id} item={item} />;
  else if (checkFilmExisted === false) return <Error message={FilmNotFound} />;
}

export default DetailMovie;
