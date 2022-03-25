import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../input/Input";
import "./FilmSearch.scss";

function FilmSearch(props) {
  const history = useHistory();

  const [keyWord, setKeyWord] = useState(props.keyWord ? props.keyWord : "");

  const goToSearch = useCallback(() => {
    if (keyWord.trim().length > 0) {
      history.push(`/search/${keyWord}`);
    }
  }, [history, keyWord]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [goToSearch]);

  return (
    <div className="section ">
      <div className="movie-search">
        <Input
          type="text"
          placeholder="Enter keyword"
          value={keyWord}
          onChange={(e) => setKeyWord(e.target.value)}
        />
      </div>
    </div>
  );
}

export default FilmSearch;
