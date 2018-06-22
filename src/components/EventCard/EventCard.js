import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { translate } from "react-i18next";
import "./Card.css";

class EventCard extends Component {
  static propTypes = {
    event: PropTypes.objectOf(PropTypes.any).isRequired,
    person: PropTypes.bool.isRequired,
    mobiletype: PropTypes.bool.isRequired
  };

  render() {
    const { event, person, t, mobiletype } = this.props;

    return (
      <div
        className={`event-card col-12 ${
          person ? "col-md-6 col-xl-4" : "col-md-12 col-xl-6"
        } ${mobiletype ? "mobiletype" : ""}`}
      >
        <Link
          to={{
            pathname: "event",
            state: { eventid: event.ID, evnetType: event.Type }
          }}
          className={`card-banner ${mobiletype ? "mobiletype" : ""}`}
        >
          <img alt="banner" src="/img/card-banner.png" />
        </Link>
        <div className={`card-glass ${mobiletype ? "mobiletype" : ""}`}>
          <div className="slogan">{event.Name}</div>
        </div>
        <div
          className={`card-star ${event.State} ${
            mobiletype ? "mobiletype" : ""
          }`}
        >
          <img alt={`${event.State}`} src={`/img/card-${event.State}.png`} />
        </div>
        <div
          className={`event-info ${event.Type} ${
            mobiletype ? "mobiletype" : ""
          }`}
        >
          <div className="event-content">
            <div className="event-time">
              <div className="day">{event.Day}</div>
              <div className="month">{event.Month}</div>
              <div className="time">{event.Time}</div>
            </div>
            <div className="event-description">
              <div className="title">{event.Description}</div>
              <div className="by-options">
                <div className="by">
                  {t("Door")}: {event.Organizer}
                </div>
                <div className={`options ${mobiletype ? "mobiletype" : ""}`}>
                  <a href="#/" className="event-option">
                    <img alt="down" src="/img/card-calendar-down.png" />
                  </a>
                  <a href="#/" className="event-option">
                    <img alt="logout" src="/img/card-logout.png" />
                  </a>
                </div>
              </div>
              <div className="friends">
                <a href="#/" className="friend-link">
                  <img alt="avatar" src="/img/avatar.png" />
                </a>
                <a href="#/" className="friend-link">
                  <img alt="avatar" src="/img/avatar.png" />
                </a>
                <a href="#/" className="friend-link">
                  <img alt="avatar" src="/img/avatar.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default translate("translations")(EventCard);
