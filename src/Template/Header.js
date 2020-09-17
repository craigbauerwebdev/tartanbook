import React, {Component, Fragment} from 'react';
import Nav from './Nav';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  

  render() {
    return (
        <Fragment>
            <header>
                <h1>Tartan Book</h1>
                <Nav />
            </header>
        </Fragment>
    );
  }
}

export default Header;
