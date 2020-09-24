import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./Base.js";
import { AuthContext } from "./Auth";

const redir = "/app";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        console.log("loggin in");
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push(redir);
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to={redir} />
  } else {
    console.log("no current user");
  }

  return (
    <div className="login-page">
      <h1>LogIn</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
            <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
            <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default withRouter(Login);