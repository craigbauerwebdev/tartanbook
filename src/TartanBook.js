import React, {Component} from 'react';

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
    
    return (
      vendors.map((vendor) => {
        {/* <Vendor vendors={vendor} /> */}
        const imgStyle = {
          backgroundImage: "url("+vendor.fimg_url+")",
          backgroundSize: "cover"
        }
        const markup = <div key={vendor.id} className="vendor">
          <div className="image-container" style={imgStyle}>
            {/* <img src={vendor.fimg_url} /> */}
          </div>
          <h2>{vendor.title.rendered}</h2>
          <strong>{vendor.vendor_type}</strong>
          <p><i>{vendor.location}</i></p>
          <p>{vendor.description}</p>
        </div>;
        return markup;
      })
    );
  }

  render() {
    const TBStyle = {
      color: "#fff"
    }
    return (
      <div className="tartanbook">
        <div className="center">
        </div>
        {this.props.data.length &&
          this.getVendors(this.props.data)
        }
        {!this.props.data.length &&
          <p style={TBStyle}>Sorry there are no vendors available...</p>
        }  
        
      </div>
    );
  }
}

export default TartanBook;
