import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import * as eventActions from '../../store/events/actions';
import HeaderBanner from '../Common/HeaderBanner';
import FooterBanner from '../Common/FooterBanner';
import EventSearch from '../Common/EventSearch';
import MySelectedEvents from './MySelectedEvents';
import FriendEvents from './FriendEvents';
import CategoryEvents from './CategoryEvents';
import PastEvents from './PastEvents';
import './Homeperson.css';

class Homeperson extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(eventActions.fetchMySelectedEvents(this.props.i18n.language));
    this.props.dispatch(eventActions.fetchFriendEvents(this.props.i18n.language));
  }

  render() {
    return (
      <div className="home-person">
        <HeaderBanner />
        <div className="container">
          <div className="row">
            <div className="col-9 event-search">
              <EventSearch />
            </div>
          </div>
        </div>
        <div className="container">
          <MySelectedEvents />
        </div>
        <div className="container friend-event">
          <FriendEvents />
        </div>
        <div className="container category-event">
          <CategoryEvents />
        </div>
        <FooterBanner />
        <div className="container">
          <PastEvents />
        </div>
      </div>
    );
  }
}

export default connect()(translate('translations')(Homeperson));
