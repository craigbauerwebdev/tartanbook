import React, {Component, Fragment} from 'react';
import Nav from './Nav';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <Fragment>
            <header>
                <img alt="tartanbook logo" className="logo" src={process.env.PUBLIC_URL + "/images/tb-logo.png"} />
                <Nav />
            </header>
        </Fragment>
    );
  }
}

export default Header;
