import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import * as eventsSelectors from "../../store/events/reducer";
import InfoCard from "../../components/EventCard/InfoCard";
import ResultLoadingCard from "../Common/ResultLoadingCard";
import "./LiveEvents.css";

class LiveEvents extends Component {
  static propTypes = {
    liveEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
    liveEventsFlag: PropTypes.bool.isRequired
  };

  buildEventCards = events =>
    events.map(event => <InfoCard key={event.ID} event={event} />);

  render() {
    const eventCards = this.buildEventCards(this.props.liveEvents);
    const { t } = this.props;

    return (
      <div>
        {this.props.liveEventsFlag ? (
          <div className="live-events">
            <div className="section-title">{t("Volg nu live!")}</div>
            <ResultLoadingCard />
          </div>
        ) : (
          <div className="live-events">
            {eventCards.length ? (
              <div className="section-title">{t("Volg nu live!")}</div>
            ) : null}
            <div className="row">{eventCards}</div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const liveEvents = eventsSelectors.getLiveEvents(state);
  const liveEventsFlag = eventsSelectors.getLiveEventsFlag(state);

  return {
    liveEvents,
    liveEventsFlag
  };
}

export default connect(mapStateToProps)(translate("translations")(LiveEvents));
