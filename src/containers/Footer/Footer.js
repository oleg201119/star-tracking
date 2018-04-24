import React, { Component } from 'react';
import FooterBanner from './FooterBanner';
import SiteMap from './SiteMap';
import Copyright from './Copyright';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <FooterBanner />
        <div className="page-footer">
          <div className="container">
            <SiteMap />
            <Copyright />
          </div>
        </div>
      </div>
    );
  }
}
