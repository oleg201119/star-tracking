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
    if (nextProps.i18n.language !== this.state.currentlanguage) {
      this.setState({ currentlanguage: nextProps.i18n.language });
      this.props.dispatch(eventActions.fetchUpcomingEvents(this.props.i18n.language));
      this.props.dispatch(eventActions.fetchLiveEvents(this.props.i18n.language));
      this.props.dispatch(eventActions.fetchResultEvents(this.props.i18n.language));
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
