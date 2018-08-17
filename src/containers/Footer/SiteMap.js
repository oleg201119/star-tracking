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
                <Link
                  to={{ pathname: '/organizer', state: { backstate: false } }}
                  className="site-map-link"
                >
                  {t("Meer info")}
                </Link>
              </li>
              <li className="link-group-item">
                <Link
									to="/newevent"
									className="site-map-link"
								>
                  {t("Nieuw event")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2">
            <div className="link-title">{t("Over ons")}</div>
            <ul className="link-group">
              <li className="link-group-item">
                <Link
                  to={{ pathname: '/about', state: { backstate: false } }}
                  className="site-map-link"
                >
                  {t("Missie")}
                </Link>
              </li>
              <li className="link-group-item">
                <Link
                  to={{ pathname: '/contact', state: { backstate: false } }}
                  className="site-map-link"
                >
                  {t("Contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-xl-2">
            <div className="social-group-row">
              <a href="https://www.facebook.com/#!/startrackingBE" target="_blank" className="link-social" rel="noopener noreferrer">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://twitter.com/StarTrackingBE" className="link-social" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter" />
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
