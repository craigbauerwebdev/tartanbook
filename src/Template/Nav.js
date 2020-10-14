import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
        <nav>
            <ul>
                {/* <Link to="/venues" label="Venues"><li>Venues</li></Link> */}
                <Link to="/app/welcome" label="Welcome"><li>Welcome</li></Link>
                <Link to="/app/vendors" label="Vendors"><li>Vendors</li></Link>
                <Link to="/app/help" label="Help"><li>Help</li></Link>
            </ul>   
        </nav>
    );
  }
}

export default Nav;
