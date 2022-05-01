import React from "react";
import { Route, Switch } from "react-router-dom";
import DetailMovie from "../pages/DetailMovie/DetailMovie";
import Error from "../pages/Error/Error";
import Home from "../pages/Home";
import ResultSearchFilmPage from "../pages/ResultSearchFilmPage";

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
        <Error />
      </Route>
    </Switch>
  );
}

export default RouteConfig;
