import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import { fadeIn, fadeOut } from "react-animations";
import Radium, { StyleRoot } from "radium";
import * as eventsSelectors from "../../store/events/reducer";
import EventCard from "../../components/EventCard/EventCard";
import EventLoadingCard from "../Common/EventLoadingCard";
import "./NextEvents.css";
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
class NextEvents extends Component {
  static propTypes = {
    upcomingEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
    upcomingEventsFlag: PropTypes.bool.isRequired
  };
  state = {
    style: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.upcomingEventsFlag !== this.props.upcomingEventsFlag) {
      if (nextProps.upcomingEventsFlag === false) {
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
    const eventCards = this.buildEventCards(this.props.upcomingEvents);
    const { t } = this.props;

    return (
      <StyleRoot>
        {this.props.upcomingEventsFlag ? (
          <div className="upcoming-events">
            <div className="section-title">
              {t("Onze eerstvolgende events")}
            </div>
            <div style={this.state.style}>
              <EventLoadingCard person={true} />
            </div>
          </div>
        ) : (
          <div className="upcoming-events">
            {eventCards.length ? (
              <div className="section-title">
                {t("Onze eerstvolgende events")}
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
  const upcomingEvents = eventsSelectors.getUpcomingEvents(state);
  const upcomingEventsFlag = eventsSelectors.getUpcomingEventsFlag(state);

  return {
    upcomingEvents,
    upcomingEventsFlag
  };
}

export default connect(mapStateToProps)(translate("translations")(NextEvents));
