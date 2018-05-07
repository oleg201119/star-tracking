import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import { translate } from 'react-i18next';
// import * as eventsSelectors from '../../store/events/reducer';
import CategoryCard from '../../components/EventCard/CategoryCard';
import './CategoryEvents.css';

const masonryOptions = {
  transitionDuration: 0,
};
const categoryevents=[{ "Name": " Marathons",
                        "categorynum": 25,
                        "ID": 1},
                        { "Name": " Triathlons",
                        "categorynum": 12,
                        "ID": 2},
                        { "Name": " Mountainbiking",
                        "categorynum": 8,
                        "ID": 3}];
class CategoryEvents extends Component {
  // static propTypes = {
  //   categoryEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
  // }
  buildEventCards = events => events.map(event => (<CategoryCard key={event.ID} event={event}/>))
  
  render() {
    // const eventCards = this.buildEventCards(this.props.categoryEvents);
    const eventCards = this.buildEventCards(categoryevents);
    const { t } = this.props;

    return (
      <div className="category-events">
        {eventCards.length ?
          <div className="section-title">
            {t('Zoek in jouw voorkeurscategorien')}
          </div> : null}
        <div className="row">
          <Masonry className="event-gallery" options={masonryOptions}>
            {eventCards}
          </Masonry>
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
export default translate('translations')(CategoryEvents);