import React, { Component } from 'react';
import './Copyright.css';

export default class Copyright extends Component {
  render() {
    return (
      <div className="copyright d-flex justify-content-between">
        <span>
          © Star-Tracking 2013-2018 -
          <a className="policy-link" href="#/">Privacy Policy</a>
        </span>
        <span className="d-none d-lg-block">
          Met de steun van&nbsp;&nbsp;
          <img className="logo-flanders" alt="Flanders-logo" src="img/logo-flanders.png" />
        </span>
      </div>
    );
  }
}
