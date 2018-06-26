import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import { fadeIn, fadeOut } from "react-animations";
import Radium, { StyleRoot } from "radium";
import * as eventsSelectors from "../../store/events/reducer";
import ResultCard from "../../components/EventCard/ResultCard";
import ResultLoadingCard from "../Common/ResultLoadingCard";
const styles = {
  fadeIn: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  },
  fadeOut: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeOut, "fadeOut")
  }
};
class ResultEvents extends Component {
  static propTypes = {
    resultEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
    resultEventsFlag: PropTypes.bool.isRequired
  };
  state = {
    style: {}
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.resultEventsFlag !== this.props.resultEventsFlag) {
      if (nextProps.resultEventsFlag === false) {
        this.setState({ style: styles.fadeOut });
        setTimeout(() => {
          this.setState({ style: {} });
        }, 2000);
      }
    }
  }
  buildEventCards = events =>
    events.map(event => <ResultCard key={event.ID} event={event} />);

  render() {
    const { t } = this.props;
    const eventCards = this.buildEventCards(this.props.resultEvents);

    return (
      <StyleRoot>
        {this.props.resultEventsFlag ? (
          <div className="result-events">
            <div className="section-title">
              {t("Resultaten voorbije events")}
            </div>
            <div style={this.state.style}>
              <ResultLoadingCard />
            </div>
          </div>
        ) : (
          <div className="result-events">
            {eventCards.length ? (
              <div className="section-title">
                {t("Resultaten voorbije events")}
              </div>
            ) : null}
            <div className="row" style={styles.fadeIn}>
              {eventCards}
            </div>
          </div>
        )}
      </StyleRoot>
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
