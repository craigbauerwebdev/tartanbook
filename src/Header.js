import React, {Component, Fragment} from 'react';
import Filters from "./Filters";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  

  render() {
    const {sortBy, vendorType, location} = this.props;
    return (
        <Fragment>
            <header>
                <h1>Tartan Book</h1>
                <Filters vendorType={vendorType} location={location} sortBy={sortBy} />
            </header>
        </Fragment>
    );
  }
}

export default Header;
