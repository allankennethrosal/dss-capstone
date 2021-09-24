import React from "react";
import { Route, Redirect } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

const HomeRedirect = ({ component: Component, ...rest }) => {
  // state of authed user
  const user = useSelector(state => state.auth.user);

  if (!user) {
    return (
      <Route
        {...rest}
        render={props => {
          return <Component {...props} />;
        }}
      ></Route>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default HomeRedirect;
