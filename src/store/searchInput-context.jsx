import { createContext, useState } from "react";

export const SearchInputContext = createContext({
  keyWord: "",
  suggestions: [],
  setKeyWord: () => {},
  setSuggestions: () => {},
});

const SearchInputContextProvider = (props) => {
  const [keyWord, setKeyWord] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const onSetKeyWord = (keywordText) => {
    setKeyWord(keywordText);
  };
  const onSetSuggestion = (suggestionArr) => {
    setSuggestions(suggestionArr);
  };

  const contextValue = {
    keyWord,
    suggestions,
    setKeyWord: onSetKeyWord,
    setSuggestions: onSetSuggestion,
  };

  return (
    <SearchInputContext.Provider value={contextValue}>
      {props.children}
    </SearchInputContext.Provider>
  );
};

export default SearchInputContextProvider;
