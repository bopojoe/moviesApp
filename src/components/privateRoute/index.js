import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

const PrivateRoute = (props) => {
  const context = useContext(AuthContext);
  // Destructure props from <privateRoute>
  const { component: Component, ...rest } = props;
  return context.isAuthenticated === true ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect
      to="/login"
    />
  );
};

export default PrivateRoute;
