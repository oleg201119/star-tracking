import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as eventsSelectors from '../../store/events/reducer';
import InfoCard from '../../components/EventCard/InfoCard';

class ResultEvents extends Component {
  static propTypes = {
    resultEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
  }

  buildEventCards = events => events.map(event => (<InfoCard key={event.ID} event={event} person={false} />))

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
