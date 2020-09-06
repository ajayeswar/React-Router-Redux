import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./Login";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: Login },
  {
    path: "/",
    key: "HOME",
    component: (props) => {
      if (!localStorage.getItem("user")) {
        alert("You need to log in to access app routes");
        return <Redirect to={"/"} />;
      }
      return <RenderRoutes {...props} />;
    },
    routes: [
      {
        path: "/contact",
        key: "CONTACT",
        exact: true,
        component: () => <h1>CONTACT PAGE</h1>,
      },
      {
        path: "/about",
        key: "ABOUT",
        exact: true,
        component: () => <h1>ABOUT PAGE</h1>,
      },
    ],
  },
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

export default ROUTES;
