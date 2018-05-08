import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as eventsSelectors from '../../store/events/reducer';
import EventCard from '../../components/EventCard/EventCard';
import './PersonEvents.css';

class PersonEvents extends Component {
  static propTypes = {
    personEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
  }

  buildEventCards = events => events.map(event => (<EventCard key={event.ID} event={event} person={true} />))

  render() {
    const eventCards = this.buildEventCards(this.props.personEvents);
    const { t } = this.props;

    return (
      <div className="person-events">
        {eventCards.length ?
          <div className="section-title">
            {t('Events geselecteerd voor jou')}
          </div> : null}
        <div className="row">
          {eventCards}
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

export default connect(mapStateToProps)(translate('translations')(PersonEvents));
