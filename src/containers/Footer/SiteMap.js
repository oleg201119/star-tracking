import React, { Component } from 'react';
import './SiteMap.css';

export default class SiteMap extends Component {
  render() {
    return (
      <div className="site-map">
        <div className="row">
          <div className="col-12 col-md-12 col-xl-2 text-left text-sm-center text-xl-left">
            <img className="logo" alt="ST-logo" src="img/logo-footer.png" />
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2">
            <div className="link-title">
              Vind events
            </div>
            <ul className="link-group">
              <li className="link-group-item"><a className="site-map-link" href="#/">Marathons</a></li>
              <li className="link-group-item"><a className="site-map-link" href="#/">Mountainbiking</a></li>
              <li className="link-group-item"><a className="site-map-link" href="#/">Triathlon</a></li>
              <li className="link-group-item"><a className="site-map-link" href="#/">Avonturenlopen</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2">
            <div className="link-title">
              &nbsp;
            </div>
            <ul className="link-group">
              <li className="link-group-item"><a className="site-map-link" href="#/">Marathons</a></li>
              <li className="link-group-item"><a className="site-map-link" href="#/">Mountainbiking</a></li>
              <li className="link-group-item"><a className="site-map-link" href="#/">Triathlon</a></li>
              <li className="link-group-item"><a className="site-map-link" href="#/">Avonturenlopen</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2">
            <div className="link-title">
                Organiseer events
            </div>
            <ul className="link-group">
              <li className="link-group-item"><a className="site-map-link" href="#/">Leer meer over onze</a></li>
              <li className="link-group-item"><a className="site-map-link" href="#/">software</a></li>
              <li className="link-group-item"><a className="site-map-link" href="#/">Hoe werkt het</a></li>
              <li className="link-group-item"><a className="site-map-link" href="#/">Wat klanten zeggen</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2">
            <div className="link-title">
                Over ons
            </div>
            <ul className="link-group">
              <li className="link-group-item"><a className="site-map-link" href="#/">Missie</a></li>
              <li className="link-group-item"><a className="site-map-link" href="#/">Team</a></li>
              <li className="link-group-item"><a className="site-map-link" href="#/">Careers</a></li>
              <li className="link-group-item"><a className="site-map-link" href="#/">Contact</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-xl-2">
            <div className="social-group-row d-xl-flex justify-content-xl-between">
              <a href="#/" className="link-social">
                <i className="fa fa-facebook" />
              </a>
              <a href="#/" className="link-social ">
                <i className="fa fa-twitter" />
              </a>
              <a href="#/" className="link-social ">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
