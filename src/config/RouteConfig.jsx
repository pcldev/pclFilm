import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

function RouteConfig(props) {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default RouteConfig;
