import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Template/Header";
import Login from './Auth/Login';
import TartanBook from './Content/TartanBook';

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
        }, () => this.getFilters())
      })
      .catch(e => {
        console.log("error: ", e);
      });
  }

  getFilters() {
    //console.log("getting filters");
    const { allVendors } = this.state;

    let vendorTypes = allVendors.map((ven) => {
      //console.log(ven.vendor_type);
      if (ven.vendor_type) {
        return ven.vendor_type;
      }
      return null;
    })
    let locations = allVendors.map((loc) => {
      if(loc.location) {
        return loc.location;
      }
      return null;
    })
    this.setState({
      vendorFilters: [...new Set(vendorTypes)],
      locationFilters: [...new Set(locations)]
    })
  }

  sortBy(e, sortType) {
    if (sortType === "vendorType") {
      this.setState({
        vendorType: e.target.value
      }, () => this.filterVendors());
    } else if (sortType === "location") {
      this.setState({
        location: e.target.value
      }, () => this.filterVendors());
    }
  }

  filterVendors = () => {
    const 
      {allVendors, vendorType, location} = this.state,
      obj = { vendor: vendorType, location: location };
    this.setState({ 
      sortedVendors: allVendors.filter(v => {
        //console.log("Orig: ", v.vendor_type, "ToMatch: ", obj.vendor);
        //console.log("Orig: ", v.location, "ToMatch: ", obj.location);
        return (
          (v.vendor_type === obj.vendor || obj.vendor === "AllVendors") && 
          (v.location === obj.location || obj.location === "AllLocations")
        );
      })
    })
  }

  render() {
    const { sortedVendors, vendorType, location, vendorFilters, locationFilters } = this.state;
    if (sortedVendors && vendorFilters && locationFilters) {
      return (
        <div className="App">
          {/* <AuthProvider> */}
            <Router>
              <Header />
              <Switch>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route path="/vendors">  
                  <TartanBook 
                    data={this.state.sortedVendors} 
                    sortBy={this.sortBy} 
                    vendorType={vendorType} 
                    location={location}
                    vendorFilters={vendorFilters}
                    locationFilters={locationFilters} />
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