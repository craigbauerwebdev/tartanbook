import React, {Component} from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Filters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  

  render() {
    const { sortBy, vendorType, location} = this.props;
    return (      
        <div className="filters">
            <div className="row">
                <div className="col">
                    <select value={vendorType} onChange={(e) => sortBy(e, "vendorType")} className="form-control">
                        <option value="AllVendors">All Vendors</option>
                        <option value="Photographers">Photographers</option>
                        <option value="Bands">Bands</option>
                        <option value="Officiants">Officiants</option>
                    </select>
                </div>
                <div className="col">
                    <select value={location} onChange={(e) => sortBy(e, "location")} className="form-control">
                        <option value="AllLocations">All Locations</option>
                        <option value="Edinburgh">Edinburgh</option>
                        <option value="Glasgow">Glasgow</option>
                        <option value="Inverness">Invernes</option>
                    </select>
                </div>
            </div>
        </div>   
    );
  }
}

export default Filters;