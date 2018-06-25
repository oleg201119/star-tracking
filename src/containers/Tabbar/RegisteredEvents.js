import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import * as eventsSelectors from "../../store/events/reducer";
import EventCard from "../../components/EventCard/EventCard";
import EventLoadingCard from "../Common/EventLoadingCard";

class RegisteredEvents extends Component {
  static propTypes = {
    registeredEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
    registeredEventsFlag: PropTypes.bool.isRequired
  };

  buildEventCards = events =>
    events.map(event => (
      <EventCard key={event.ID} event={event} person={true} mobiletype={true} />
    ));

  render() {
    const eventCards = this.buildEventCards(this.props.registeredEvents);
    const { t } = this.props;

    return (
      <div>
        <div className="header-banner mobile-person-header">
          <div className="glass-section">
            <div className="slogan-section">
              <div className="container">
                <span className="slogan">
                  {this.props.registeredEventsFlag
                    ? t("My registrations")
                    : eventCards.length
                      ? t("My registrations")
                      : null}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {this.props.registeredEventsFlag ? (
            <div className="friend-events">
              <div className="section-title mobile-person-title">
                {t("My registrations")}
              </div>
              <EventLoadingCard person={true} />
            </div>
          ) : (
            <div className="friend-events">
              {eventCards.length ? (
                <div className="section-title mobile-person-title">
                  {t("My registrations")}
                </div>
              ) : null}
              <div className="row">{eventCards}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const registeredEvents = eventsSelectors.getRegisteredEvents(state);
  const registeredEventsFlag = eventsSelectors.getRegisteredEventsFlag(state);

  return {
    registeredEvents,
    registeredEventsFlag
  };
}

export default connect(mapStateToProps)(
  translate("translations")(RegisteredEvents)
);
