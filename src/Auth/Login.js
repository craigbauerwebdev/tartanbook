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
      <div className="form-wrap">
        <h1>LogIn</h1>
        <form onSubmit={handleLogin}>
          <label>
            Email</label>
              <input name="email" type="email" placeholder="Email" />
          
          <label>
            Password</label>
              <input name="password" type="password" placeholder="Password" />
          
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  )
}

export default withRouter(Login);