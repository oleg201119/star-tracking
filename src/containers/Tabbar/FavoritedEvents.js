import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import { fadeIn, fadeOut } from "react-animations";
import Radium, { StyleRoot } from "radium";
import * as eventsSelectors from "../../store/events/reducer";
import EventCard from "../../components/EventCard/EventCard";
import EventLoadingCard from "../Common/EventLoadingCard";
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
class FavoritedEvents extends Component {
  static propTypes = {
    favoriteEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
    favoriteEventsFlag: PropTypes.bool.isRequired
  };
  state = {
    style: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.favoriteEventsFlag !== this.props.favoriteEventsFlag) {
      if (nextProps.favoriteEventsFlag === false) {
        this.setState({ style: styles.fadeOut });
        setTimeout(() => {
          this.setState({ style: {} });
        }, 2000);
      }
    }
  }
  buildEventCards = events =>
    events.map(event => (
      <EventCard key={event.ID} event={event} person={true} mobiletype={true} />
    ));

  render() {
    const eventCards = this.buildEventCards(this.props.favoriteEvents);
    const { t } = this.props;

    return (
      <StyleRoot>
        <div className="header-banner mobile-person-header">
          <div className="glass-section">
            <div className="slogan-section">
              <div className="container">
                <span className="slogan">
                  {this.props.favoriteEventsFlag
                    ? t("Favorited")
                    : eventCards.length
                      ? t("Favorited")
                      : null}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {this.props.favoriteEventsFlag ? (
            <div className="friend-events">
              <div className="section-title mobile-person-title">
                {t("Favorited")}
              </div>
              <div style={this.state.style}>
                <EventLoadingCard person={true} />
              </div>
            </div>
          ) : (
            <div className="friend-events">
              {eventCards.length ? (
                <div className="section-title mobile-person-title">
                  {t("Favorited")}
                </div>
              ) : null}
              <div className="row" style={styles.fadeIn}>
                {eventCards}
              </div>
            </div>
          )}
        </div>
      </StyleRoot>
    );
  }
}

function mapStateToProps(state) {
  const favoriteEvents = eventsSelectors.getFavoriteEvents(state);
  const favoriteEventsFlag = eventsSelectors.getFavoriteEventsFlag(state);

  return {
    favoriteEvents,
    favoriteEventsFlag
  };
}

export default connect(mapStateToProps)(
  translate("translations")(FavoritedEvents)
);
