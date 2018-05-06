import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import './MainNavBar.css';

class MainNavBar extends Component {
  render() {
    const { t } = this.props;

    return (
      <nav className="navbar navbar-expand-xl header-menu">
        <div className="container">
          <a className="logo-link" href="/">
            <img className="logo" alt="ST-logo" src="img/logo-header.png" />
          </a>
          <button className="navbar-toggler ml-auto" data-toggle="collapse" data-target="#navbarHeaderMenu">
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarHeaderMenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link to="homepage" className="menu-link">{t('Browse all events')}</Link></li>
              <li className="nav-item"><Link to="organizer" className="menu-link">{t('For organizers')}</Link></li>
              <li className="nav-item"><Link to="about" className="menu-link">{t('About Star Tracking')}</Link></li>
              <li className="nav-item"><Link to="contact" className="menu-link">{t('Contact us')}</Link></li>
            </ul>
            <Link to="login"><button type="button" className="btn btn-red btn-login">{t('Sign in')}</button></Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default translate('translations')(MainNavBar);
