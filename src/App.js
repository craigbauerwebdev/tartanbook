import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login';
import TartanBook from './TartanBook';


function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
        <Router>
          <p>Header</p>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/home">
              <TartanBook />
            </Route>
          </Switch>
          <p>Footer</p>
        </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
