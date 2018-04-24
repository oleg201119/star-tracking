import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as eventsSelectors from '../../store/events/reducer';
import InfoCard from '../../components/EventCard/InfoCard';

class ResultEvents extends Component {
  static propTypes = {
    resultEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
  }

  buildEventCards = events => events.map(event => (<InfoCard key={event.ID} event={event} />))

  render() {
    const eventCards = this.buildEventCards(this.props.resultEvents);

    return (
      <div className="result-events">
        <div className="section-title">
          Resultaten voorbije events
        </div>
        {eventCards}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const resultEvents = eventsSelectors.getResultEvents(state);

  return {
    resultEvents,
  };
}

export default connect(mapStateToProps)(ResultEvents);
