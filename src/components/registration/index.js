import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

const SignUpPage = (props) => {
  const context = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      console.log("reg");
      context.register(email, password, firstName, lastName);
      setRegistered(true);
    }
  };

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (registered === true) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <p style={{ textAlign: "center" }}>
        You must register an username and password to log in{" "}
      </p>
      <input
        style={{ marginRight: "auto", marginLeft: "44%" }}
        value={email}
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <br />
      <input
        style={{ marginRight: "auto", marginLeft: "44%" }}
        value={firstName}
        placeholder="first name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></input>
      <br />
      <input
        style={{ marginRight: "auto", marginLeft: "44%" }}
        value={lastName}
        placeholder="last name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></input>
      <br />
      <input
        style={{ marginRight: "auto", marginLeft: "44%" }}
        value={password}
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <br />
      <input
        style={{ marginRight: "auto", marginLeft: "44%" }}
        value={passwordAgain}
        type="password"
        placeholder="password again"
        onChange={(e) => {
          setPasswordAgain(e.target.value);
        }}
      ></input>
      <br />
      {/* Login web form  */}
      <button
        style={{ marginRight: "auto", marginLeft: "44%" }}
        onClick={register} >
        Register {""}
      </button>
    </>
  )
};

export default SignUpPage;
