import React, {Component} from 'react';
import Filters from "../Content/Filters";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class TartanBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vendor_type: null,
      location: null
    };
    //this.mobileMenu = this.mobileMenu.bind(this);
  }

  getVendors = (vendors) => {
    const randomVendors = vendors.sort(() => {
      return .5 - Math.random();
    });
    return (
      randomVendors.map((vendor) => {
        const imgStyle = {
          backgroundImage: "url("+vendor.fimg_url+")",
          backgroundSize: "cover"
        }
        const markup = <div key={vendor.id} className="vendor clearfix">
          <div className="image-container" style={imgStyle}></div>
          <div className="meta">
            <h2>{vendor.title.rendered}</h2>
            <strong>{vendor.vendor_type}</strong>
            <p><i>{vendor.location}</i></p>
            <p>{vendor.description}</p>
          </div>
        </div>;
        return markup;
      })
    );
  }

  render() {
    const { sortBy, vendorType, location, vendorFilters, locationFilters } = this.props;
    /* const TBStyle = {
      color: "#fff"
    } */
    return (
      <div className="tartanbook">
        <div className="center">
          <Filters vendorType={vendorType} location={location} sortBy={sortBy} vendorFilters={vendorFilters} locationFilters={locationFilters} />
        </div>
        {this.props.data.length &&
          this.getVendors(this.props.data)
        }
        {!this.props.data.length &&
          <p className="error-message">Sorry there are no vendors available...</p>
        }  
        
      </div>
    );
  }
}

export default TartanBook;
