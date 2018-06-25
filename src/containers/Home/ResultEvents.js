import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import * as eventsSelectors from "../../store/events/reducer";
import ResultCard from "../../components/EventCard/ResultCard";
import ResultLoadingCard from "../Common/ResultLoadingCard";

class ResultEvents extends Component {
  static propTypes = {
    resultEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
    resultEventsFlag: PropTypes.bool.isRequired
  };

  buildEventCards = events =>
    events.map(event => <ResultCard key={event.ID} event={event} />);

  render() {
    const { t } = this.props;
    const eventCards = this.buildEventCards(this.props.resultEvents);

    return (
      <div>
        {this.props.resultEventsFlag ? (
          <div className="result-events">
            <div className="section-title">
              {t("Resultaten voorbije events")}
            </div>
            <ResultLoadingCard />
          </div>
        ) : (
          <div className="result-events">
            {eventCards.length ? (
              <div className="section-title">
                {t("Resultaten voorbije events")}
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
  const resultEvents = eventsSelectors.getResultEvents(state);
  const resultEventsFlag = eventsSelectors.getResultEventsFlag(state);

  return {
    resultEvents,
    resultEventsFlag
  };
}

export default connect(mapStateToProps)(
  translate("translations")(ResultEvents)
);
