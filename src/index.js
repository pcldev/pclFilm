import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import SearchInputContextProvider from "./store/searchInput-context";

ReactDOM.render(
  <ErrorBoundary>
    <SearchInputContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchInputContextProvider>
  </ErrorBoundary>,

  document.getElementById("root")
);
