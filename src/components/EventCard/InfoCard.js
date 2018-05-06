import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import './Card.css';

class InfoCard extends Component {
  static propTypes = {
    event: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  render() {
    const { event, t } = this.props;

    return (
      <div className={"event-info mb-2 "+event.Type}>
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
                  {t('Resultaten')}
                </a>
              </div>
            </div>
            <div className="friends">
              <a href="#/" className="friend-link">
                <img alt="avatar" src="img/avatar.png" />
              </a>
              <a href="#/" className="friend-link">
                <img alt="avatar" src="img/avatar.png" />
              </a>
              <a href="#/" className="friend-link">
                <img alt="avatar" src="img/avatar.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default translate('translations')(InfoCard);