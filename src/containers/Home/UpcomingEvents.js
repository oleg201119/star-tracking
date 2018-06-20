import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import * as eventsSelectors from "../../store/events/reducer";
import EventCard from "../../components/EventCard/EventCard";
import "./UpcomingEvents.css";

class UpcomingEvents extends Component {
  static propTypes = {
    upcomingEvents: PropTypes.arrayOf(PropTypes.any).isRequired
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
      <div className="upcoming-events">
        {eventCards.length ? (
          <div className="section-title">{t("Eerstvolgende events")}</div>
        ) : null}
        <div className="row">{eventCards}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const upcomingEvents = eventsSelectors.getUpcomingEvents(state);

  return {
    upcomingEvents
  };
}

export default connect(mapStateToProps)(
  translate("translations")(UpcomingEvents)
);
