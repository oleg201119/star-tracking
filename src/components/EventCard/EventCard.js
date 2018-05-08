import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import './Card.css';

class EventCard extends Component {
  static propTypes = {
    event: PropTypes.objectOf(PropTypes.any).isRequired,
    person: PropTypes.bool.isRequired,
  }

  render() {
    const { event, person, t } = this.props;

    return (
      <div className={person ? 'event-card col-12 col-md-6 col-xl-4' : 'event-card col-12 col-md-12 col-xl-6'}>
        <div className="card-banner">
          <img alt="banner" src="/img/card-banner.png" />
        </div>
        <div className="card-glass">
          <div className="slogan">
            {event.Name}
          </div>
        </div>
        <div className="card-star">
          <img alt="star" src="/img/card-white-star.png" />
        </div>
        <div className={`event-info ${event.Type}`}>
          <div className="event-content">
            <div className="event-time">
              <div className="day">
                {event.Day}
              </div>
              <div className="month">
                {event.Month}
              </div>
              <div className="time">
                {event.Time}
              </div>
            </div>
            <div className="event-description">
              <div className="title">
                {event.Description}
              </div>
              <div className="by-options">
                <div className="by">
                  {t('Door')}: {event.Organizer}
                </div>
                <div className="options">
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
export default translate('translations')(EventCard);
