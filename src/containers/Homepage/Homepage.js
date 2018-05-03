import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as eventActions from '../../store/events/actions';
import HeaderBanner from '../Common/HeaderBanner';
import FooterBanner from '../Common/FooterBanner';
import EventSearch from '../Common/EventSearch';
import NextEvents from './NextEvents';
import PastEvents from '../Homeperson/PastEvents';
import '../Homeperson/Homeperson.css';

class Homepage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(eventActions.fetchUpcomingEvents());
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
            <NextEvents />
        </div>
        <FooterBanner />
        <div className="container">
            <PastEvents />
        </div>
      </div>
    );
  }
}

export default connect()(Homepage);