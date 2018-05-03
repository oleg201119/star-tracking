import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FooterBanner.css';

export default class FooterBanner extends Component {
  render() {
    return (
      <div className="footer-banner">
        <div className="glass-section">
          <div className="slogan-section">
            <div className="container">
              <span className="slogan">
                Organiseer je zelf een event?
              </span>
              <span className="slogan">
                Bekijk wat we kunnen betekenen voor jouw event
              </span>
            </div>
          </div>
          <div className="button-section">
            <div className="container">
              <Link to="organizer"><button type="button" className="btn btn-red">Leer meer over de Star Tracking tijdsregistratie</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
