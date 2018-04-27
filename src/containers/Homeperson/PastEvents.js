import React, { Component } from 'react';
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
export default class PastEvents extends Component {
  // static propTypes = {
  //   categoryEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
  // }
  buildEventCards = events => events.map(event => (<PastCard key={event.ID} event={event}/>))
  
  render() {
    // const eventCards = this.buildEventCards(this.props.categoryEvents);
    const eventCards = this.buildEventCards(categoryevents);
    return (
      <div className="past-events">
        <div className="section-title">
          {eventCards.length ? "Bekijk de resultaten van de voorbije events" : null}
        </div>
        <div className="past-events-description">
          {eventCards.length ? <div>De makkelijkste manier om snel  je resultaten terug te vinden is om 
           &nbsp;<a href="/person">in te loggen op je account</a>&nbsp;
           en te kijken onder <a href="#/">'My events'</a>.<br/>
           Heb je nog geen account (maar heb je wel deelgenomen aan een event), aarzel niet om er
           &nbsp;<a href="#/">eentje aan te maken</a>, en we koppelen jouw resultaten.<br/>
           Je kan ook hieronder zoeken in de lijst van events.</div> : null}
        </div>
        <div className="event-result">
          {eventCards}
        </div>
        <div className="event-all">
          <a href="#/" className="detail-option">Bekijk alle events</a>
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
