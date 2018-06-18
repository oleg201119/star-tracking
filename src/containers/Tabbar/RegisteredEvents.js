import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as eventsSelectors from '../../store/events/reducer';
import EventCard from '../../components/EventCard/EventCard';

class RegisteredEvents extends Component {
  static propTypes = {
    registeredEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
  }

  buildEventCards = events => events.map(event => (<EventCard key={event.ID} event={event} person={true} />))

  render() {
    const eventCards = this.buildEventCards(this.props.registeredEvents);
    const { t } = this.props;

    return (
      <div className="friend-events">
        {eventCards.length ?
          <div className="section-title">
            {t('My registrations')}
          </div> : null}
        <div className="row">
          {eventCards}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const registeredEvents = eventsSelectors.getRegisteredEvents(state);

  return {
    registeredEvents,
  };
}

export default connect(mapStateToProps)(translate('translations')(RegisteredEvents));
