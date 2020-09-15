import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login';
import TartanBook from './TartanBook';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allVendors: null,
      sortedVendors: null,
      vendorType: "AllVendors",
      location: "AllLocations"
    };
    this.sortBy = this.sortBy.bind(this);
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
        this.setState({ 
          allVendors: json,
          sortedVendors: json
        })
      })
      .catch(e => {
        console.log("error: ", e);
      });
  }

  sortBy(e, sortType) {
    if (sortType === "vendorType") {
      this.setState({
        vendorType: e.target.value
      }, () => this.filterStuff());
    } else if (sortType === "location") {
      this.setState({
        location: e.target.value
      }, () => this.filterStuff());
    }
  }

  filterStuff = () => {
    const 
      {allVendors, vendorType, location} = this.state,
      obj = { vendor: vendorType, location: location };
    this.setState({ 
      sortedVendors: allVendors.filter(v => {
        console.log("Orig: ", v.vendor_type, "ToMatch: ", obj.vendor);
        console.log("Orig: ", v.location, "ToMatch: ", obj.location);
        return (
          v.vendor_type === obj.vendor || 
          obj.vendor === "AllVendors") && 
          (v.location === obj.location || 
          obj.location === "AllLocations"
        );
        /* if(obj.vendor === "AllVendors" && obj.location === "AllLocations") {
          return allVendors;
        } else if (obj.vendor === "AllVendors") {
          return v.location === obj.location;
        } else if (obj.location === "AllLocations") {
          return v.vendor_type === obj.vendor;
        } else {
          return v.vendor_type === obj.vendor && v.location === obj.location;
        }   */ 
      })
    })
  }

  render() {
    if (this.state.sortedVendors) {
      return (
        <div className="App">
          {/* <AuthProvider> */}
            <Router>
              <header>
                <h1>Tartan Book</h1>
                <div className="filters">
                  <div className="row">
                    <div className="col">
                      <select onChange={(e) => this.sortBy(e, "vendorType")} className="form-control">
                        <option value="AllVendors">All Vendors</option>
                        <option value="Photographers">Photographers</option>
                        <option value="Bands">Bands</option>
                        <option value="Officiants">Officiants</option>
                      </select>
                    </div>
                    <div className="col">
                      <select onChange={(e) => this.sortBy(e, "location")} className="form-control">
                        <option value="AllLocations">All Locations</option>
                        <option value="Edinburgh">Edinburgh</option>
                        <option value="Glasgow">Glasgow</option>
                        <option value="Inverness">Invernes</option>
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
                  <TartanBook data={this.state.sortedVendors} />
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
