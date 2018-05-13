import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as eventActions from '../../store/events/actions';
import PersonEvents from '../Homeperson/PersonEvents';
import FriendEvents from '../Homeperson/FriendEvents';
import CategoryEvents from '../Homeperson/CategoryEvents';
import Tabbar from '../Tabbar/Tabbar';
import * as authSelectors from '../../store/auth/reducer';
import '../Homeperson/Homeperson.css';
import './Eventdetail.css';

class Eventdetail extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.dispatch(eventActions.fetchPersonEvents());
    this.props.dispatch(eventActions.fetchFriendEvents());
  }

  render() {
    const { authToken } = this.props;

    if (authToken === '') return <Redirect to="/login" />;
    return (
      <div className="home-person">
        <div className="person-tabbar">
          <Tabbar />
        </div>
        <div className="container">
          <PersonEvents />
        </div>
        <div className="container friend-event">
          <FriendEvents />
        </div>
        <div className="container category-event">
          <CategoryEvents />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const authToken = authSelectors.getLoginAuth(state);

  return {
    authToken,
  };
}
export default connect(mapStateToProps)(Eventdetail);
