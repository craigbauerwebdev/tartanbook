import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import app from '../Auth/Base';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Footer extends Component {

  /* constructor(props) {
    super(props);
    this.state = {};
  } */

  render() {
    return (
        <Fragment>
            <footer>
                <img alt="tartanbook logo" className="logo" src={process.env.PUBLIC_URL + "/images/tb-logo.png"} />
                
                <Nav />
            
                <a className="sign-out" onClick={() => app.auth().signOut()}>Sign Out</a>
                <br />
                <a href="http://tartanweddings.com">Back to Tartan Weddings</a>
            </footer>
        </Fragment>
    );
  }
}

export default Footer;
