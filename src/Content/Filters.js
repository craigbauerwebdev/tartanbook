import React, {Component} from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Filters extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      
    };
  } */

  render() {
    const { sortBy, vendorType, location, vendorFilters, locationFilters} = this.props;
    console.log()
    return (      
        <div className="filters">
            <div className="row">
                <div className="col">
                    <select value={vendorType} onChange={(e) => sortBy(e, "vendorType")} className="form-control">
                        <option value="AllVendors">All Vendors</option>
                        {vendorFilters.map((ven) => {
                            return <option value={ven}>{ven}</option>
                        })}
                    </select>
                </div>
                <div className="col">
                    <select value={location} onChange={(e) => sortBy(e, "location")} className="form-control">
                        <option value="AllLocations">All Locations</option>
                        {locationFilters.map((loc) => {
                            return <option value={loc}>{loc}</option>
                        })}
                    </select>
                </div>
            </div>
        </div>   
    );
  }
}

export default Filters;