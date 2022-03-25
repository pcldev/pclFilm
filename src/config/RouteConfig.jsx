import React from "react";
import { Route, Switch } from "react-router-dom";
import ResultSearchFilmPage from "../pages/ResultSearchFilmPage";
import Home from "../pages/Home";

function RouteConfig(props) {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/search/:keyWord">
        <ResultSearchFilmPage />
      </Route>
    </Switch>
  );
}

export default RouteConfig;
