import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import * as eventsSelectors from "../../store/events/reducer";
import EventCard from "../../components/EventCard/EventCard";
import "./MySelectedEvents.css";

class MySelectedEvents extends Component {
  static propTypes = {
    myselectedEvents: PropTypes.arrayOf(PropTypes.any).isRequired
  };

  buildEventCards = events =>
    events.map(event => (
      <EventCard key={event.ID} event={event} person={true} mobiletype={true} />
    ));

  render() {
    const eventCards = this.buildEventCards(this.props.myselectedEvents);
    const { t } = this.props;

    return (
      <div>
        <div className="header-banner mobile-person-header">
          <div className="glass-section">
            <div className="slogan-section">
              <div className="container">
                <span className="slogan">
                  {eventCards.length ? t("Events geselecteerd voor jou") : null}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="person-events">
            {eventCards.length ? (
              <div className="section-title mobile-person-title">
                {t("Events geselecteerd voor jou")}
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
  const myselectedEvents = eventsSelectors.getMySelectedEvents(state);

  return {
    myselectedEvents
  };
}

export default connect(mapStateToProps)(
  translate("translations")(MySelectedEvents)
);
