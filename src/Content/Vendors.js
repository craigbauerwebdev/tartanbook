import React, {Component, useEffect} from 'react';
import Filters from "./Filters";

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
          backgroundImage: vendor.fimg_url ? `url("${vendor.fimg_url}")` 
          : "url(http://tartanweddings.com/wp-content/uploads/2018/11/dundas-events-page.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "top"
        }
        const markup = <div key={vendor.id} className="vendor clearfix">
          <div className="image-container" style={imgStyle}></div>
          <div className="meta">
            <h2>{vendor.title.rendered}{/* vendor.id */}</h2>
            <strong>{vendor.vendor_type}</strong>
            <p><i>{vendor.location}</i></p>
            <p>{vendor.description}</p>
          </div>
          <div className="meta links">
            {vendor.website &&
              <a href={vendor.website} target="_blank" rel="noopener noreferrer">
                <img alt="website logo" src={process.env.PUBLIC_URL + "/images/website.png"} height="35" />
              </a>
            }
            {vendor.instagram &&
              <a href={vendor.instagram} target="_blank">
                <img alt="instagram logo" src={process.env.PUBLIC_URL + "/images/instagram.png"} height="35" />
              </a>
            }
            {vendor.facebook &&
              <a href={vendor.facebook} target="_blank" rel="noopener noreferrer">
                <img alt="facebook logo" src={process.env.PUBLIC_URL + "/images/facebook.png"} height="35" />
              </a>
            }
          </div>
          {/* <div className="like-btn">
            {vendor.liked &&
              <i className="large material-icons">favorite</i>
            }
            {!vendor.liked &&
              <i className="large material-icons">favorite_border</i>
            }
          </div> */}
        </div>;
        //console.log(markup);
        return markup;
      })
    );
  }

  render() {
    const { sortBy, vendorType, location, vendorFilters, locationFilters, data } = this.props;

    return (  
      <div className="tartanbook vendors-page">
        <div className="center">
          <Filters vendorType={vendorType} location={location} sortBy={sortBy} vendorFilters={vendorFilters} locationFilters={locationFilters} />
        </div>
        {!!data.length && //boolean casted
          this.getVendors(this.props.data)
        }
        {!data.length &&
          <p className="error-message">Sorry there are no vendors available...</p>
        }  
        
      </div>
    );
  }
}

export default TartanBook;
