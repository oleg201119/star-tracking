import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import { fadeIn, fadeOut } from "react-animations";
import Radium, { StyleRoot } from "radium";
import * as eventsSelectors from "../../store/events/reducer";
import EventCard from "../../components/EventCard/EventCard";
import EventLoadingCard from "../Common/EventLoadingCard";
import "./SimilarEvents.css";
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
class SimilarEvents extends Component {
  static propTypes = {
    similarEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
    similarEventsFlag: PropTypes.bool.isRequired
  };
  state = {
    style: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.similarEventsFlag !== this.props.similarEventsFlag) {
      if (nextProps.similarEventsFlag === false) {
        this.setState({ style: styles.fadeOut });
        setTimeout(() => {
          this.setState({ style: {} });
        }, 2000);
      }
    }
  }
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
      <StyleRoot>
        {this.props.similarEventsFlag ? (
          <div className="similar-events">
            <div className="section-title">
              {t("Gelijkaardige activiteiten")}
            </div>
            <div style={this.state.style}>
              <EventLoadingCard person={true} />
            </div>
          </div>
        ) : (
          <div className="similar-events">
            {eventCards.length ? (
              <div className="section-title">
                {t("Gelijkaardige activiteiten")}
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
