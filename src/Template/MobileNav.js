import React, {Component, Fragment} from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Nav";

class MobileNav extends Component {
  render() {
    return (
        <div className="mobile-nav-wrap">
            <div>
               <Nav /> 
            </div>
        </div>
    );
  }
}

export default MobileNav;
