import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import * as eventActions from '../../store/events/actions';
import UpcomingEvents from './UpcomingEvents';
import LiveEvents from './LiveEvents';
import ResultEvents from './ResultEvents';
import HeaderBanner from '../Common/HeaderBanner';
import FooterBanner from '../Common/FooterBanner';
import ServiceSecurity from '../../services/serviceSecurity';
import './Home.css';

class Home extends Component {
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
    var self = this;
    ServiceSecurity.isUserAuthenticated().then(function(isLoggedin) {
      if(isLoggedin){
        self.props.history.push('/person');
      }
    })
    let currentlanguage = this.props.i18n.language;
    if (this.props.i18n.language.length > 2) {
      currentlanguage = this.props.i18n.language.substring(0, 2);
    }
    this.setState({ currentlanguage: currentlanguage });
    this.props.dispatch(eventActions.fetchUpcomingEvents(currentlanguage));
    this.props.dispatch(eventActions.fetchLiveEvents(currentlanguage));
    this.props.dispatch(eventActions.fetchResultEvents(currentlanguage));
  }
  componentWillReceiveProps(nextProps) {
    let nextlanguage = nextProps.i18n.language;
    if (nextProps.i18n.language.length > 2) {
      nextlanguage = nextProps.i18n.language.substring(0, 2);
    }
    if (nextlanguage !== this.state.currentlanguage) {
      this.setState({ currentlanguage: nextlanguage });
      this.props.dispatch(eventActions.fetchUpcomingEvents(nextlanguage));
      this.props.dispatch(eventActions.fetchLiveEvents(nextlanguage));
      this.props.dispatch(eventActions.fetchResultEvents(nextlanguage));
    }
  }
  render() {
    return (
      <div className="site-content">
        <HeaderBanner />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-8">
              <UpcomingEvents />
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <LiveEvents />
              <ResultEvents />
            </div>
          </div>
        </div>
        <FooterBanner />
      </div>
    );
  }
}

export default connect()(translate('translations')(Home));
