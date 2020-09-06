import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function RouterWrapper({ component, isPrivate, ...rest }) {
  const signed = true;

  if (isPrivate && !signed) {
    return <Redirect to='/signIn' />;
  }

  if (!isPrivate && signed) {
    return <Redirect to='/' />;
  }

  return <Route {...rest} component={component} />;
}
