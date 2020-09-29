import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Header from "./Template/Header";
import Footer from "./Template/Footer";
//import Login from './Auth/Login';
//import Tartanbook from './Tartanbook';
import Vendors from './Content/Vendors';
import Faqs from './Content/Faqs';
import VendorsPage from './Pages/VendorsPage';
import app from './Auth/Base';
//import TartanBook from './Content/Vendors';

//import { AuthProvider } from './Auth/Auth';
//import PrivateRoute from './Auth/PrivateRoute';

/* const NotFound = () => {
  return <h1>404</h1>;
} */

class TartanBook extends Component {
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
    fetch("http://tartanweddings.com/wp-json/wp/v2/tartanbook", {
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
      if (loc.location) {
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
      { allVendors, vendorType, location } = this.state,
      obj = { vendor: vendorType, location: location };
    this.setState({
      sortedVendors: allVendors.filter(v => {
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
        <Fragment>
        <div className="App">
          <Header />
            <button style={{ float: "right" }} onClick={() => app.auth().signOut()}>Sign Out</button>  
 
              <Route path="/app/help" component={Faqs} />  
              <Route exact path="/app/vendors">
                <Vendors
                  data={this.state.sortedVendors}
                  sortBy={this.sortBy}
                  vendorType={vendorType}
                  location={location}
                  vendorFilters={vendorFilters}
                  locationFilters={locationFilters} />
              </Route>
              {/* </Switch>
              </Router>    */}
            <Redirect to="/app/vendors" />
            <Footer />           
        </div>
        </Fragment>
      )
    } else {
      return (
        <div className="loading-screen">
          <div className="loader-wrap center">
            <div className="loader"></div>
            <p>Just a second</p>
          </div>
        </div>
      );
    }
  }
}

export default TartanBook;