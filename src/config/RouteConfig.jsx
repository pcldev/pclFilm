import React, { useContext } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import DetailMovie from "../pages/MoviePage";
import Error from "../pages/Error/Error";
import Home from "../pages/Home";
import ResultSearchFilmPage from "../pages/ResultSearchFilmPage";
import { SearchInputContext } from "../store/searchInput-context";
function RouteConfig(props) {
  const location = useLocation();
  const searchInputCtx = useContext(SearchInputContext);
  const { setKeyWord } = searchInputCtx;

  React.useEffect(() => {
    setKeyWord("");
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/search/:keyWord" exact>
        <ResultSearchFilmPage />
      </Route>
      <Route path="/tv/:id/:category" exact>
        <DetailMovie type="tv" />
      </Route>
      <Route path="/movie/:id/:category" exact>
        <DetailMovie type="movie" />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
}

export default RouteConfig;
