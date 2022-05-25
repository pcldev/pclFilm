import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import filmApi from "../../api/fillmApi";
import { SearchInputContext } from "../../store/searchInput-context";
import Input from "../input/Input";
import "./FilmSearch.scss";
import SuggestionBox from "./SuggestionBox";

function FilmSearch(props) {
  const history = useHistory();
  const searchInputCtx = useContext(SearchInputContext);
  const { keyWord, setKeyWord, suggestions, setSuggestions } = searchInputCtx;
  const [focus, setFocus] = useState(false);
  const typingTimeoutRef = useRef(null);

  const container = useRef(null);

  const goToSearch = () => {
    if (keyWord.trim().length > 0) {
      history.push(`/search/${keyWord}`);
    }
  };

  useEffect(() => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    setSuggestions([]);

    if (!keyWord.trim()) return;

    typingTimeoutRef.current = setTimeout(async () => {
      const reponse = await filmApi.postSearchFilm(keyWord.trim());
      const data = [];
      reponse.data.searchResults.forEach((result) => {
        data.push(result.replaceAll("<em>", "").replaceAll("</em>", ""));
      });

      setSuggestions(data);
    }, 500);
  }, [keyWord]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (keyWord.trim() !== "") {
      goToSearch();
      setKeyWord("");
      setSuggestions([]);
    }
  };

  const clearInput = () => {
    setKeyWord("");
    setSuggestions([]);
  };

  const onFocus = () => {
    if (!focus) {
      setFocus(true);
    }
  };

  const onBlur = () => {
    if (focus) {
      setTimeout(() => {
        setFocus(false);
      }, 150);
    }
  };
  return (
    <div className="section mv-container">
      <div className="movie-search" ref={container}>
        <form onSubmit={handleSubmitForm}>
          <Input
            type="text"
            placeholder="Search..."
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </form>

        {suggestions.length > 0 && (
          <SuggestionBox
            onClick={clearInput}
            suggestions={suggestions}
            className={`mt-1 pd-10 ${focus ? "" : "display-none"}`}
          />
        )}
      </div>
    </div>
  );
}

export default FilmSearch;
