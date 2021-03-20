import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Header from "./Template/Header";
import Footer from "./Template/Footer";
import Login from './Auth/Login';
import Tartanbook from './Tartanbook';
//import Vendors from './Content/Vendors';
import Faqs from './Content/Faqs';
import { AuthProvider } from './Auth/Auth';
import PrivateRoute from './Auth/PrivateRoute';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    //this.sortBy = this.sortBy.bind(this);
  }

  componentDidMount() {}

  render() { 
    return (
      <div className="App">    
        <AuthProvider>
          <HashRouter>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <PrivateRoute 
                path="/app" 
                component={Tartanbook} 
              />
            </Switch>    
          </HashRouter>  
        </AuthProvider>  
      </div>
    );
  }
}

export default App;
