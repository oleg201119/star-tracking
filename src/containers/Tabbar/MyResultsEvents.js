import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import * as eventsSelectors from "../../store/events/reducer";
import EventCard from "../../components/EventCard/EventCard";

class MyResultsEvents extends Component {
  static propTypes = {
    myresultsEvents: PropTypes.arrayOf(PropTypes.any).isRequired
  };

  buildEventCards = events =>
    events.map(event => (
      <EventCard key={event.ID} event={event} person={true} mobiletype={true} />
    ));

  render() {
    const eventCards = this.buildEventCards(this.props.myresultsEvents);
    const { t } = this.props;

    return (
      <div>
        <div className="header-banner mobile-person-header">
          <div className="glass-section">
            <div className="slogan-section">
              <div className="container">
                <span className="slogan">
                  {eventCards.length ? t("My results") : null}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="friend-events">
            {eventCards.length ? (
              <div className="section-title mobile-person-title">
                {t("My results")}
              </div>
            ) : null}
            <div className="row">{eventCards}</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const myresultsEvents = eventsSelectors.getMyResultsEvents(state);

  return {
    myresultsEvents
  };
}

export default connect(mapStateToProps)(
  translate("translations")(MyResultsEvents)
);
