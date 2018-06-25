import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import * as eventsSelectors from "../../store/events/reducer";
import EventCard from "../../components/EventCard/EventCard";
import EventLoadingCard from "../Common/EventLoadingCard";
import "./FriendEvents.css";

class FriendEvents extends Component {
  static propTypes = {
    friendEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
    friendEventsFlag: PropTypes.bool.isRequired
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
    const eventCards = this.buildEventCards(this.props.friendEvents);
    const { t } = this.props;

    return (
      <div>
        {this.props.friendEventsFlag ? (
          <div className="friend-events">
            <div className="section-title">
              {t("Events waar jouw vrienden deelnemen")}
            </div>
            <EventLoadingCard person={true} />
          </div>
        ) : (
          <div className="friend-events">
            {eventCards.length ? (
              <div className="section-title">
                {t("Events waar jouw vrienden deelnemen")}
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
  const friendEvents = eventsSelectors.getFriendEvents(state);
  const friendEventsFlag = eventsSelectors.getFriendEventsFlag(state);

  return {
    friendEvents,
    friendEventsFlag
  };
}

export default connect(mapStateToProps)(
  translate("translations")(FriendEvents)
);
