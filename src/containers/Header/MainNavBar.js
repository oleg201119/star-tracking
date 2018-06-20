import React, { Component } from "react";
import { Link } from "react-router-dom";
import { translate } from "react-i18next";
import { slide as Menu } from "react-burger-menu";
import "./MainNavBar.css";

class MainNavBar extends Component {
  constructor() {
    super();
    this.state = {
      tokenstate: false
    };
  }
  componentDidMount() {
    let temptoken = false;
    const token = sessionStorage.getItem("token");
    if (token) {
      temptoken = true;
    } else {
      const refreshToken = localStorage.StarTrackingRefreshToken;
      if (refreshToken) temptoken = true;
    }
    this.setState({ tokenstate: temptoken });
  }
  render() {
    const { t } = this.props;
    const { tokenstate } = this.state;
    return (
      <div>
        <Menu>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
        <nav className="navbar navbar-expand-xl header-menu">
          <div className="container">
            <a className="logo-link" href={tokenstate ? "/person" : "/"}>
              <img className="logo" alt="ST-logo" src="/img/logo-header.png" />
            </a>
            <button
              className="navbar-toggler ml-auto"
              data-toggle="collapse"
              data-target="#navbarHeaderMenu"
            >
              <i className="fa fa-bars" />
            </button>
            {tokenstate ? (
              <a className="avatar-link d-block d-xl-none" href="#/">
                <img
                  className="avatar"
                  alt="auth-avatar"
                  src="/img/navbar-avatar.png"
                />
              </a>
            ) : null}
            <div className="collapse navbar-collapse" id="navbarHeaderMenu">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    to={tokenstate ? "person" : "homepage"}
                    className="menu-link"
                  >
                    {t("Browse all events")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="organizer" className="menu-link">
                    {t("For organizers")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="about" className="menu-link">
                    {t("About Star Tracking")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="contact" className="menu-link">
                    {t("Contact us")}
                  </Link>
                </li>
              </ul>
              {!tokenstate ? (
                <Link to="login">
                  <button type="button" className="btn btn-red btn-login">
                    {t("Sign in")}
                  </button>
                </Link>
              ) : null}
            </div>
            {tokenstate ? (
              <a className="avatar-link d-none d-xl-block" href="#/">
                <img
                  className="avatar"
                  alt="auth-avatar"
                  src="/img/navbar-avatar.png"
                />
              </a>
            ) : null}
          </div>
        </nav>
      </div>
    );
  }
}
export default translate("translations")(MainNavBar);
