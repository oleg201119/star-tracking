import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import * as eventsSelectors from '../../store/events/reducer';
import EventCard from '../../components/EventCard/EventCard';
import './UpcomingEvents.css';

const masonryOptions = {
  transitionDuration: 0,
};

class UpcomingEvents extends Component {
  static propTypes = {
    upcomingEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
  }

  buildEventCards = events => events.map(event => (<EventCard key={event.ID} event={event} />))
  
  render() {
    const eventCards = this.buildEventCards(this.props.upcomingEvents);
    return (
      <div className="upcoming-events">
        <div className="section-title">
          {eventCards.length ? "Eerstvolgende events" : null}
        </div>
        <div className="row">
          <Masonry className="event-gallery" options={masonryOptions}>
            {eventCards}
          </Masonry>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const upcomingEvents = eventsSelectors.getUpcomingEvents(state);

  return {
    upcomingEvents,
  };
}

export default connect(mapStateToProps)(UpcomingEvents);
