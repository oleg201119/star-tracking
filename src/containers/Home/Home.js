import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as eventActions from '../../store/events/actions';
import UpcomingEvents from './UpcomingEvents';
import LiveEvents from './LiveEvents';
import ResultEvents from './ResultEvents';
import './Home.css';

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(eventActions.fetchUpcomingEvents());
    this.props.dispatch(eventActions.fetchLiveEvents());
    this.props.dispatch(eventActions.fetchResultEvents());
  }

  render() {
    return (
      <div className="site-content">
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
      </div>
    );
  }
}

export default connect()(Home);
