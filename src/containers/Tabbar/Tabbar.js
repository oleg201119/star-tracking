import React, { Component } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { translate } from "react-i18next";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import MySelectedEvents from "../Homeperson/MySelectedEvents";
import FriendEvents from "../Homeperson/FriendEvents";
import CategoryEvents from "../Homeperson/CategoryEvents";
import RegisteredEvents from "./RegisteredEvents";
import MyResultsEvents from "./MyResultsEvents";
import LanguageNavBar from "../Header/LanguageNavBar";
import "./Tabbar.css";
import Wizardview from "../Wizardview/Wizardview";
import Register6 from "../Wizardview/Register6";
import FavoritedEvents from "./FavoritedEvents";

class Tabbar extends Component {
  constructor() {
    super();
    this.state = {
      registered: false,
      tokenstate: false,
      menuopen: false,
      tabindex: 0
    };
  }
  componentDidMount() {
    console.log(this.props);
    let temptoken = false;
    const token = sessionStorage.getItem("token");
    if (token) {
      temptoken = true;
    } else {
      const refreshToken = localStorage.StarTrackingRefreshToken;
      if (refreshToken) temptoken = true;
    }
    this.setState({ tokenstate: temptoken });
    if (this.props.registered) {
      this.setState({ tabindex: 4 });
    }
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    const { t } = this.props;
    const { tokenstate, tabindex } = this.state;
    return (
      <div>
        <div className="header">
          <div className="page-header">
            <LanguageNavBar />
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
                  <div className="mobile-tab">
                    <a
                      className={`mobile-tab-item ${
                        tabindex === 0 ? "selected" : ""
                      }`}
                      onClick={() => {
                        this.setState({ tabindex: 0 });
                        this.closeMenu();
                      }}
                    >
                      {t("Discover")}
                    </a>
                    <a
                      className={`mobile-tab-item ${
                        tabindex === 1 ? "selected" : ""
                      }`}
                      onClick={() => {
                        this.setState({ tabindex: 1 });
                        this.closeMenu();
                      }}
                    >
                      {t("My registrations")}
                    </a>
                    <a
                      className={`mobile-tab-item ${
                        tabindex === 2 ? "selected" : ""
                      }`}
                      onClick={() => {
                        this.setState({ tabindex: 2 });
                        this.closeMenu();
                      }}
                    >
                      {t("Favorited")}
                    </a>
                    <a
                      className={`mobile-tab-item ${
                        tabindex === 3 ? "selected" : ""
                      }`}
                      onClick={() => {
                        this.setState({ tabindex: 3 });
                        this.closeMenu();
                      }}
                    >
                      {t("My results")}
                    </a>
                    <a
                      className={`mobile-tab-item ${
                        tabindex === 4 ? "selected" : ""
                      }`}
                      onClick={() => {
                        this.setState({ tabindex: 4 });
                        this.closeMenu();
                      }}
                    >
                      {t("My account")}
                    </a>
                  </div>
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
                    <img
                      className="logo"
                      alt="ST-logo"
                      src="/img/logo-header.png"
                    />
                  </a>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarHeaderMenu"
                  >
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
          </div>
        </div>
        <Tabs
          selectedIndex={tabindex}
          onSelect={(firstTab, lastTab) =>
            this.setState({ tabindex: firstTab })
          }
        >
          <div className="tabbar">
            <div className="container">
              <TabList>
                <Tab>{t("Discover")}</Tab>
                <Tab>{t("My registrations")}</Tab>
                <Tab>{t("Favorited")}</Tab>
                <Tab>{t("My results")}</Tab>
                <Tab className="account-tab react-tabs__tab">
                  {t("My account")}
                </Tab>
              </TabList>
            </div>
          </div>
          <TabPanel>
            <MySelectedEvents />
            <div className="container friend-event">
              <FriendEvents />
            </div>
            <div className="container category-event">
              <CategoryEvents />
            </div>
          </TabPanel>
          <TabPanel>
            <RegisteredEvents />
          </TabPanel>
          <TabPanel>
            <FavoritedEvents />
          </TabPanel>
          <TabPanel>
            <MyResultsEvents />
          </TabPanel>
          <TabPanel>
            {this.props.registered ? <Wizardview /> : <Register6 />}
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default translate("translations")(Tabbar);
