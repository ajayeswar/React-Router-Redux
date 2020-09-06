import React from "react";
import { Link } from "react-router-dom";

export default function displayMenu(routes) {
  function singleRoute(route) {
    return (
      <li key={route.key}>
        <Link to={route.path}>
          {route.key} ({route.path})
        </Link>
      </li>
    );
  }

  return (
    <ul>
      {routes.map((route) => {
        if (route.routes) {
          return (
            <React.Fragment key={route.key}>
              {singleRoute(route)}
              {displayMenu(route.routes)}
            </React.Fragment>
          );
        }

        return singleRoute(route);
      })}
    </ul>
  );
}
