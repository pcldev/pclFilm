import React from "react";
import { Route, Switch } from "react-router-dom";
import ResultSearchFilmPage from "../pages/ResultSearchFilmPage";
import Home from "../pages/Home";
import DetailMovie from "../pages/DetailMovie/DetailMovie";
import ScrollToTop from "../components/scrollTop/ScrollToTop";

function RouteConfig(props) {
  return (
    <Switch>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </ScrollToTop>

      <Route path="/search/:keyWord">
        <ResultSearchFilmPage />
      </Route>
      <Route path="/tv/:id/:category">
        <DetailMovie />
      </Route>
      <Route path="/movie/:id/:category">
        <DetailMovie />
      </Route>
    </Switch>
  );
}

export default RouteConfig;
