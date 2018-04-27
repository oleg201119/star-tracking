import React, { Component } from 'react';
import './HeaderBanner.css';

export default class HeaderBanner extends Component {
  render() {
    return (
      <div className="header-banner">
        <div className="glass-section">
          <div className="slogan-section">
            <div className="container">
              <span className="slogan">
                Star Tracking is dé partner voor het tracken van sportevents
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
