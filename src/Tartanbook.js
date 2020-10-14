import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Header from "./Template/Header";
import Footer from "./Template/Footer";
import Welcome from './Content/Welcome';
import Vendors from './Content/Vendors';
import Faqs from './Content/Faqs';
//import VendorsPage from './Pages/VendorsPage';
//import app from './Auth/Base';

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
    fetch(`${process.env.REACT_APP_VENDORS_ENDPOINT}`, {
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
    const { allVendors } = this.state;
    let vendorTypes = allVendors.map((ven) => {
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
            {/* <button style={{ float: "right" }} onClick={() => app.auth().signOut()}>Sign Out</button> */}
              <Route path="/app/welcome" component={Welcome} />
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
            <Redirect to="/app/welcome" />
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