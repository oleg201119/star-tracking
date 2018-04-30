import React, { Component } from 'react';
import './Withwork.css';

export default class Withwork extends Component {
  render() {
    return (
      <div className="withwork">
        <span>Zij werkten al met ons</span>
        <div className="withwork-logos">
          <a href="#/">
            <img alt="gent-logo" src="img/gent-logo.png" className="gent-logo"/>
          </a>
          <a href="#/">
            <img alt="oostende-logo" src="img/oostende-logo.png" className="oostende-logo"/>
          </a>
          <a href="#/">
            <img alt="middelkerke-logo" src="img/middelkerke-logo.png" className="middelkerke-logo"/>
          </a>
        </div>
      </div>
    );
  }
}
