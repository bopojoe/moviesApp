import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { Link } from "react-router-dom";
//import { MoviesContext } from "./moviesContext";

const LoginPage = (props) => {
  const context = useContext(AuthContext);
  //const moviesContext = useContext(MoviesContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(email, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    // moviesContext.setAuthenticated(context.isAuthenticated);
    return <Redirect to={from} />;
  }
  return (
    <>
      <p style={{ textAlign: "center" }}>
        Please Log in or Sign up to the application {" "}
      </p>
      <input
        style={{ marginRight: "auto", marginLeft: "44%" }}
        id="email"
        placeholder="email"
        onChange={(e) => {
           setEmail(e.target.value);
        }}
      ></input>
      <br />
      <input
        style={{ marginRight: "auto", marginLeft: "44%" }}
        id="password"
        type="password"
        placeholder="password"
        onChange={(e) => {
           setPassword(e.target.value);
        }}
      ></input>
      <br />
      {/* Login web form  */}
      <button
        style={{ marginRight: "auto", marginLeft: "44%" }}
        onClick={login}
      >
        Log in
      </button>
      <p style={{ textAlign: "center" }}>
        Not Registered?
        <Link to="/register">Sign Up!</Link>
      </p>
    </>
  );
};

export default LoginPage;
