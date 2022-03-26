import React from "react";
import { Route, Switch } from "react-router-dom";
import ResultSearchFilmPage from "../pages/ResultSearchFilmPage";
import Home from "../pages/Home";
import DetailMovie from "../pages/DetailMovie/DetailMovie";

function RouteConfig(props) {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/search/:keyWord" exact>
        <ResultSearchFilmPage />
      </Route>
      <Route path="/tv/:id/:category" exact>
        <DetailMovie />
      </Route>
      <Route path="/movie/:id/:category" exact>
        <DetailMovie />
      </Route>
      <Route path="*">
        <h1>Nothing here</h1>
      </Route>
    </Switch>
  );
}

export default RouteConfig;
