import React, { Component } from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as authSelectors from "../../store/auth/reducer";
import "./SiteMap.css";

class SiteMap extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="site-map">
        <div className="row">
          <div className="col-12 col-md-12 col-xl-2 text-left text-sm-center text-xl-left">
            <img className="logo" alt="ST-logo" src="/img/logo-footer.png" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <div className="link-title">{t("Vind events")}</div>
            {this.props.authToken === "" ? (
              <ul className="link-group row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <li className="link-group-item">
                    <Link
                      to={{
                        pathname: "/homepage",
                        state: { selectEvent: "Running", backstate: false }
                      }}
                      className="site-map-link"
                    >
                      {t("Running")}
                    </Link>
                  </li>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <li className="link-group-item">
                    <Link
                      to={{
                        pathname: "/homepage",
                        state: { selectEvent: "TrialRun", backstate: false }
                      }}
                      className="site-map-link"
                    >
                      {t("TrialRun")}
                    </Link>
                  </li>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <li className="link-group-item">
                    <Link
                      to={{
                        pathname: "/homepage",
                        state: { selectEvent: "Roadbike", backstate: false }
                      }}
                      className="site-map-link"
                    >
                      {t("Roadbike")}
                    </Link>
                  </li>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <li className="link-group-item">
                    <Link
                      to={{
                        pathname: "/homepage",
                        state: { selectEvent: "Mountainbike", backstate: false }
                      }}
                      className="site-map-link"
                    >
                      {t("Mountainbike")}
                    </Link>
                  </li>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <li className="link-group-item">
                    <Link
                      to={{
                        pathname: "/homepage",
                        state: { selectEvent: "MultiSport", backstate: false }
                      }}
                      className="site-map-link"
                    >
                      {t("MultiSport")}
                    </Link>
                  </li>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <li className="link-group-item">
                    <Link
                      to={{
                        pathname: "/homepage",
                        state: { selectEvent: "Other", backstate: false }
                      }}
                      className="site-map-link"
                    >
                      {t("Other")}
                    </Link>
                  </li>
                </div>
              </ul>
            ) : (
              <ul className="link-group row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <li className="link-group-item">
                    <Link
                      to={{ pathname: "/person", state: { backstate: false } }}
                      className="site-map-link"
                    >
                      {t("Running")}
                    </Link>
                  </li>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <li className="link-group-item">
                    <Link
                      to={{ pathname: "/person", state: { backstate: false } }}
                      className="site-map-link"
                    >
                      {t("TrialRun")}
                    </Link>
                  </li>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <li className="link-group-item">
                    <Link
                      to={{ pathname: "/person", state: { backstate: false } }}
                      className="site-map-link"
                    >
                      {t("Roadbike")}
                    </Link>
                  </li>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <li className="link-group-item">
                    <Link
                      to={{ pathname: "/person", state: { backstate: false } }}
                      className="site-map-link"
                    >
                      {t("Mountainbike")}
                    </Link>
                  </li>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <li className="link-group-item">
                    <Link
                      to={{ pathname: "/person", state: { backstate: false } }}
                      className="site-map-link"
                    >
                      {t("MultiSport")}
                    </Link>
                  </li>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <li className="link-group-item">
                    <Link
                      to={{ pathname: "/person", state: { backstate: false } }}
                      className="site-map-link"
                    >
                      {t("Other")}
                    </Link>
                  </li>
                </div>
              </ul>
            )}
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2">
            <div className="link-title">{t("Organiseer events")}</div>
            <ul className="link-group">
              <li className="link-group-item">
                <a className="site-map-link" href="#/">
                  {t("Leer meer over onze")}
                </a>
              </li>
              <li className="link-group-item">
                <a className="site-map-link" href="#/">
                  {t("software")}
                </a>
              </li>
              <li className="link-group-item">
                <a className="site-map-link" href="#/">
                  {t("Hoe werkt het")}
                </a>
              </li>
              <li className="link-group-item">
                <a className="site-map-link" href="#/">
                  {t("Wat klanten zeggen")}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2">
            <div className="link-title">{t("Over ons")}</div>
            <ul className="link-group">
              <li className="link-group-item">
                <a className="site-map-link" href="#/">
                  {t("Missie")}
                </a>
              </li>
              <li className="link-group-item">
                <a className="site-map-link" href="#/">
                  {t("Team")}
                </a>
              </li>
              <li className="link-group-item">
                <a className="site-map-link" href="#/">
                  {t("Careers")}
                </a>
              </li>
              <li className="link-group-item">
                <a className="site-map-link" href="#/">
                  {t("Contact")}
                </a>
              </li>
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
function mapStateToProps(state) {
  const authToken = authSelectors.getLoginAuth(state);
  return {
    authToken
  };
}
export default translate("translations")(connect(mapStateToProps)(SiteMap));
