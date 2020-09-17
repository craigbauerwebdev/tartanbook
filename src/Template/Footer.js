import React, {Component, Fragment} from 'react';
import Nav from './Nav';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  

  render() {
    return (
        <Fragment>
            <footer>
                <h1>Tartan Book</h1>
                <a href="http://tartanweddings.com">Back to Tartan Weddings</a>
            </footer>
        </Fragment>
    );
  }
}

export default Footer;
