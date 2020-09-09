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
              <div className="filters">
                <div className="row">
                  <div className="col">
                    <select onChange={this.updateFilter} className="form-control">
                      <option value="All Vendors">All Vendors</option>
                      <option value="Photographers">Photographers</option>
                      <option value="Bands">Bands</option>
                    </select>
                  </div>
                  <div className="col">
                    <select onChange={this.updateFilter} className="form-control">
                      <option value="All Locations">All Locations</option>
                      <option value="Edinburgh">Edinburgh</option>
                      <option value="Glasgow">Glasgow</option>
                    </select>
                  </div>
                </div>
              </div>
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
