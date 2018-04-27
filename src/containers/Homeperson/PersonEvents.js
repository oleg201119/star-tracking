import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import * as eventsSelectors from '../../store/events/reducer';
import EventCard from '../../components/EventCard/EventCard';
import './PersonEvents.css';

const masonryOptions = {
  transitionDuration: 0,
};

class PersonEvents extends Component {
  static propTypes = {
    personEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
  }

  buildEventCards = events => events.map(event => (<EventCard key={event.ID} event={event} person={true}/>))
  
  render() {
    const eventCards = this.buildEventCards(this.props.personEvents);
    return (
      <div className="person-events">
        <div className="section-title">
          {eventCards.length ? "Events geselecteerd voor jou" : null}
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
  const personEvents = eventsSelectors.getPersonEvents(state);

  return {
    personEvents,
  };
}

export default connect(mapStateToProps)(PersonEvents);
