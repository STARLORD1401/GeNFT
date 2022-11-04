import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { getUser } from "../helpers/auth";

const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuthProtected && getUser() !== null) {
        return (
          <Navigate
            to={{ pathname: "/form-page", state: { from: props.location } }}
          />
        );
      }
      return <Component {...props} />;
    }}
  />
);

export default AppRoute;
