import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login';
import TartanBook from './TartanBook';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vendors: null
    };
    //this.mobileMenu = this.mobileMenu.bind(this);
  }

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/http://tartanweddings.com/wp-json/wp/v2/tartanbook", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({ vendors: json })
      })
      .catch(e => {
        console.log("error: ", e);
      });
  }

  render() {

    if(this.state.vendors) {
      return (
        <div className="App">
          {/* <AuthProvider> */}
            <Router>
              <header>
                <h1>Tartan Book</h1>
              </header>
              <Switch>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route path="/home">
                  <TartanBook data={this.state.vendors} />
                </Route>
              </Switch>
              <p>Footer</p>
            </Router>
          {/* </AuthProvider> */}
        </div>
      );
    } else {
      return 'loading...';
    }
  }
}

export default App;
