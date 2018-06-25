import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import * as eventsSelectors from "../../store/events/reducer";
import EventCard from "../../components/EventCard/EventCard";
import EventLoadingCard from "../Common/EventLoadingCard";
import "./SimilarEvents.css";

class SimilarEvents extends Component {
  static propTypes = {
    similarEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
    similarEventsFlag: PropTypes.bool.isRequired
  };

  buildEventCards = events =>
    events.map(event => (
      <EventCard
        key={event.ID}
        event={event}
        person={true}
        mobiletype={false}
      />
    ));

  render() {
    const { t } = this.props;
    const eventCards = this.buildEventCards(this.props.similarEvents);

    return (
      <div>
        {this.props.similarEventsFlag ? (
          <div className="similar-events">
            <div className="section-title">
              {t("Gelijkaardige activiteiten")}
            </div>
            <EventLoadingCard person={true} />
          </div>
        ) : (
          <div className="similar-events">
            {eventCards.length ? (
              <div className="section-title">
                {t("Gelijkaardige activiteiten")}
              </div>
            ) : null}
            <div className="row">{eventCards}</div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const similarEvents = eventsSelectors.getSimilarEvents(state);
  const similarEventsFlag = eventsSelectors.getSimilarEventsFlag(state);

  return {
    similarEvents,
    similarEventsFlag
  };
}

export default connect(mapStateToProps)(
  translate("translations")(SimilarEvents)
);
