/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "../contexts/UserContext";

function PrivateRoute(props) {
  const { children, ...rest } = props;
  const { isUserLoggedIn } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={() => (isUserLoggedIn ? children : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
