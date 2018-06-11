import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as eventsSelectors from '../../store/events/reducer';
import InfoCard from '../../components/EventCard/InfoCard';

class LiveEvents extends Component {
  static propTypes = {
    liveEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
  }

  buildEventCards = events => events.map(event => (<InfoCard key={event.ID} event={event} />))

  render() {
    const eventCards = this.buildEventCards(this.props.liveEvents);
    const { t } = this.props;

    return (
      <div className="live-events">
        {eventCards.length ?
          <div className="section-title">
            {t('Volg nu live!')}
          </div>
          : null }
        {eventCards}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const liveEvents = eventsSelectors.getLiveEvents(state);

  return {
    liveEvents,
  };
}

export default connect(mapStateToProps)(translate('translations')(LiveEvents));
