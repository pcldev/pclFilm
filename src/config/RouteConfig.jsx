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
      <Route path="/search/:keyWord">
        <ResultSearchFilmPage />
      </Route>
      <Route path="/tv/:id"></Route>
      <Route path="/movie/:id/:category">
        <DetailMovie />
      </Route>
    </Switch>
  );
}

export default RouteConfig;
