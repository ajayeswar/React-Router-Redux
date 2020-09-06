import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Route from "./RouterWrapper";
import About from "../../components/About/About";
import Home from "../../components/Home/Home";

const history = createBrowserHistory();

function AllRoutes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home} isPrivate={true} signed={true} />
        <Route path='/about' component={About} isPrivate={true} />
      </Switch>
    </Router>
  );
}

export default AllRoutes;
