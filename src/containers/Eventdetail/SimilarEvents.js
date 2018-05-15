import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as eventsSelectors from '../../store/events/reducer';
import EventCard from '../../components/EventCard/EventCard';
import './SimilarEvents.css';

class SimilarEvents extends Component {
  static propTypes = {
    similarEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
  }

  buildEventCards = events => events.map(event => (<EventCard key={event.ID} event={event} person={true} />))

  render() {
    const { t } = this.props;
    const eventCards = this.buildEventCards(this.props.similarEvents);

    return (
      <div className="similar-events">
        {eventCards.length ?
          <div className="section-title">
            {t('Gelijkaardige activiteiten')}
          </div> : null}
        <div className="row">
          {eventCards}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const similarEvents = eventsSelectors.getSimilarEvents(state);

  return {
    similarEvents,
  };
}

export default connect(mapStateToProps)(translate('translations')(SimilarEvents));
