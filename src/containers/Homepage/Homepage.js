import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
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
  constructor() {
    super();
    this.state = {
      currentlanguage: '',
    };
  }
  componentDidMount() {
    this.setState({currentlanguage: this.props.i18n.language });
    window.scrollTo(0, 0);
    this.props.dispatch(eventActions.fetchUpcomingEvents(this.props.i18n.language));
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.i18n.language !== this.state.currentlanguage) {
      this.setState({ currentlanguage: nextProps.i18n.language });
      this.props.dispatch(eventActions.fetchUpcomingEvents(this.props.i18n.language));
    }
  }
  render() {
    const selectEvent = this.props.location.state !== undefined ? this.props.location.state.selectEvent: '';
    return (
      <div className="home-person">
        <HeaderBanner />
        <div className="container">
          <div className="row">
            <div className="col-9 event-search">
              <EventSearch {...{selectEvent: selectEvent}} />
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

export default connect()(translate('translations')(Homepage));