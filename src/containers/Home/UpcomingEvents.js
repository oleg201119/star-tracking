import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import * as eventsSelectors from "../../store/events/reducer";
import EventCard from "../../components/EventCard/EventCard";
import EventLoadingCard from "../Common/EventLoadingCard";
import "./UpcomingEvents.css";

class UpcomingEvents extends Component {
  static propTypes = {
    upcomingEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
    upcomingEventsFlag: PropTypes.bool.isRequired
  };

  buildEventCards = events =>
    events.map(event => (
      <EventCard
        key={event.ID}
        event={event}
        person={false}
        mobiletype={false}
      />
    ));

  render() {
    const { t } = this.props;
    const eventCards = this.buildEventCards(this.props.upcomingEvents);
    return (
      <div>
        {this.props.upcomingEventsFlag ? (
          <div className="upcoming-events">
            <div className="section-title">{t("Eerstvolgende events")}</div>
            <EventLoadingCard person={false} />
          </div>
        ) : (
          <div className="upcoming-events">
            {eventCards.length ? (
              <div className="section-title">{t("Eerstvolgende events")}</div>
            ) : null}
            <div className="row">{eventCards}</div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const upcomingEvents = eventsSelectors.getUpcomingEvents(state);
  const upcomingEventsFlag = eventsSelectors.getUpcomingEventsFlag(state);

  return {
    upcomingEvents,
    upcomingEventsFlag
  };
}

export default connect(mapStateToProps)(
  translate("translations")(UpcomingEvents)
);
