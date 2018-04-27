import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import * as eventsSelectors from '../../store/events/reducer';
import EventCard from '../../components/EventCard/EventCard';
import './FriendEvents.css';

const masonryOptions = {
  transitionDuration: 0,
};

class FriendEvents extends Component {
  static propTypes = {
    friendEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
  }

  buildEventCards = events => events.map(event => (<EventCard key={event.ID} event={event} person={true}/>))
  
  render() {
    const eventCards = this.buildEventCards(this.props.friendEvents);
    return (
      <div className="friend-events">
        <div className="section-title">
          {eventCards.length ? "Events waar jouw vrienden deelnemen" : null}
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
  const friendEvents = eventsSelectors.getFriendEvents(state);

  return {
    friendEvents,
  };
}

export default connect(mapStateToProps)(FriendEvents);
