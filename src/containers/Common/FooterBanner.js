import React, { Component } from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";
import "./FooterBanner.css";

class FooterBanner extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="footer-banner">
        <div className="glass-section">
          <div className="slogan-section">
            <div className="container">
              <span className="slogan">
                {t("Organiseer je zelf een event")}?
              </span>
              <span className="slogan">
                {t("Bekijk wat we kunnen betekenen voor jouw event")}
              </span>
            </div>
          </div>
          <div className="button-section">
            <div className="container">
              <Link
                to={{ pathname: "/organizer", state: { backstate: false } }}
              >
                <button type="button" className="btn btn-red btn-footer">
                  {t("Leer meer over de Star Tracking tijdsregistratie")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default translate("translations")(FooterBanner);
