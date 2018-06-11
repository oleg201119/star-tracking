import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as eventsSelectors from '../../store/events/reducer';
import ResultCard from '../../components/EventCard/ResultCard';

class ResultEvents extends Component {
  static propTypes = {
    resultEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
  }

  buildEventCards = events => events.map(event => (<ResultCard key={event.ID} event={event} />))

  render() {
    const { t } = this.props;
    const eventCards = this.buildEventCards(this.props.resultEvents);

    return (
      <div className="result-events">
        {eventCards.length ?
          <div className="section-title">
            {t('Resultaten voorbije events')}
          </div> : null}
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

export default connect(mapStateToProps)(translate('translations')(ResultEvents));
