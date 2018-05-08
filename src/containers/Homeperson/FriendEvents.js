import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as eventsSelectors from '../../store/events/reducer';
import EventCard from '../../components/EventCard/EventCard';
import './FriendEvents.css';

class FriendEvents extends Component {
  static propTypes = {
    friendEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
  }

  buildEventCards = events => events.map(event => (<EventCard key={event.ID} event={event} person={true}/>))

  render() {
    const eventCards = this.buildEventCards(this.props.friendEvents);
    const { t } = this.props;

    return (
      <div className="friend-events">
        {eventCards.length ?
          <div className="section-title">
            {t('Events waar jouw vrienden deelnemen')}
          </div> : null}
        <div className="row">
          {eventCards}
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

export default connect(mapStateToProps)(translate('translations')(FriendEvents));
