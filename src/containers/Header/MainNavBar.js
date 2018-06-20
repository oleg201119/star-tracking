import React, { Component } from "react";
import { Link } from "react-router-dom";
import { translate } from "react-i18next";
import { slide as Menu } from "react-burger-menu";
import "./MainNavBar.css";

class MainNavBar extends Component {
  constructor() {
    super();
    this.state = {
      tokenstate: false,
      menuopen: false
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
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    const { t } = this.props;
    const { tokenstate } = this.state;
    return (
      <div>
        <div className="mobile-header d-block d-xl-none">
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={state => this.handleStateChange(state)}
          >
            <Link
              to={tokenstate ? "person" : "homepage"}
              className="menu-link"
              onClick={() => {
                this.closeMenu();
              }}
            >
              {t("Browse all events")}
            </Link>
            <Link
              to="organizer"
              className="menu-link"
              onClick={() => {
                this.closeMenu();
              }}
            >
              {t("For organizers")}
            </Link>
            <Link
              to="about"
              className="menu-link"
              onClick={() => {
                this.closeMenu();
              }}
            >
              {t("About Star Tracking")}
            </Link>
            <Link
              to="contact"
              className="menu-link"
              onClick={() => {
                this.closeMenu();
              }}
            >
              {t("Contact us")}
            </Link>
            {!tokenstate ? (
              <Link
                to="login"
                onClick={() => {
                  this.closeMenu();
                }}
              >
                {t("Sign in")}
              </Link>
            ) : null}
          </Menu>
          <a href={tokenstate ? "/person" : "/"}>
            <img
              className="mobile-logo"
              alt="ST-logo"
              src="/img/mobile-logo.png"
            />
          </a>
          {tokenstate ? (
            <a
              className="avatar-link d-block d-xl-none header-avatar"
              href="#/"
            >
              <img
                className="avatar"
                alt="auth-avatar"
                src="/img/navbar-avatar.png"
              />
            </a>
          ) : null}
        </div>
        <nav className="navbar navbar-expand-xl header-menu d-none d-xl-block">
          <div className="container">
            <a className="logo-link" href={tokenstate ? "/person" : "/"}>
              <img className="logo" alt="ST-logo" src="/img/logo-header.png" />
            </a>
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
