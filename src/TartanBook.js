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
        const imgStyle = {
          backgroundImage: "url("+vendor.fimg_url+")",
          backgroundSize: "cover"
        }
        const markup = <div class="vendor">
          <div className="image-container" style={imgStyle}>
            {/* <img src={vendor.fimg_url} /> */}
          </div>
          <h2>{vendor.title.rendered}</h2>
          <strong>{vendor.vendor_type}</strong>
          <p>{vendor.description}</p>
        </div>;
        return markup;
      })
    );
  }

  render() {
    return (
      <div className="tartanbook">
        <div class="center">
        </div>
        <div class="filters">
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
        {this.getVendors(this.props.data)}
      </div>
    );
  }
}

export default TartanBook;
