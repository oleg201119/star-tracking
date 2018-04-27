import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainNavBar.css';

export default class MainNavBar extends Component {
  render() {
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
              <li className="nav-item"><a className="menu-link" href="#/" title="">Browse alle events</a></li>
              <li className="nav-item"><a className="menu-link" href="#/" title="">Blogartikels</a></li>
              <li className="nav-item"><a className="menu-link" href="#/" title="">Voor organisatoren</a></li>
              <li className="nav-item"><a className="menu-link" href="#/" title="">Over Star Tracking</a></li>
              <li className="nav-item"><a className="menu-link" href="#/" title="">Contact</a></li>
            </ul>
            <Link to="login"><button type="button" className="btn btn-red btn-login">Login</button></Link>
          </div>
        </div>
      </nav>
    );
  }
}
