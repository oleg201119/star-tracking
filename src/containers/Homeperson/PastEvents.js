import React, { Component } from 'react';
import { translate } from 'react-i18next';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import * as eventsSelectors from '../../store/events/reducer';
import PastCard from '../../components/EventCard/PastCard';
import './PastEvents.css';

const categoryevents=[{ "Name": " Duo & Corporate Race",
                        "ID": 1,
                        "Description":"Race voor mountainbikes over duinen en strand vanaf Twins Club in Bredene.",
                        "Date": "04/02/2018"},
                        { "Name": " Duo & Corporate Race",
                        "ID": 2,
                        "Description":"Race voor mountainbikes over duinen en strand vanaf Twins Club in Bredene.",
                        "Date": "04/02/2018"},
                        { "Name": " Duo & Corporate Race",
                        "ID": 3,
                        "Description":"Race voor mountainbikes over duinen en strand vanaf Twins Club in Bredene.",
                        "Date": "04/02/2018"},
                        { "Name": " Duo & Corporate Race",
                        "ID": 4,
                        "Description":"Race voor mountainbikes over duinen en strand vanaf Twins Club in Bredene.",
                        "Date": "04/02/2018"}];
class PastEvents extends Component {
  // static propTypes = {
  //   categoryEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
  // }
  buildEventCards = events => events.map(event => (<PastCard key={event.ID} event={event}/>))
  
  render() {
    // const eventCards = this.buildEventCards(this.props.categoryEvents);
    const eventCards = this.buildEventCards(categoryevents);
    const { t } = this.props;

    return (
      <div className="past-events">
        {eventCards.length ?
          <div className="section-title">
            {t('Bekijk de resultaten van de voorbije events')}
          </div> : null}
        <div className="past-events-description">
          {eventCards.length ? <div>{t('De makkelijkste manier om snel  je resultaten terug te vinden is om')} 
           &nbsp;<a href="/person">{t('in te loggen op je account')}</a>&nbsp;
           {t('en te kijken onder')} <a href="#/">'{t('My events')}'</a>.<br/>
           {t('Heb je nog geen account (maar heb je wel deelgenomen aan een event), aarzel niet om er')}
           &nbsp;<a href="#/">{t('eentje aan te maken')}</a>, {t('en we koppelen jouw resultaten')}.<br/>
           {t('Je kan ook hieronder zoeken in de lijst van events')}.</div> : null}
        </div>
        <div className="event-result">
          {eventCards}
        </div>
        <div className="event-all">
          <a href="#/" className="detail-option">{t('Bekijk alle events')}</a>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   const categoryEvents = eventsSelectors.getCategoryEvents(state);

//   return {
//     categoryEvents,
//   };
// }

// export default connect(mapStateToProps)(CategoryEvents);
export default translate('translations')(PastEvents);