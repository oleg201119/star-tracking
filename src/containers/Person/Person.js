import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as eventActions from '../../store/events/actions';
import PersonEvents from '../Homeperson/PersonEvents';
import FriendEvents from '../Homeperson/FriendEvents';
import CategoryEvents from '../Homeperson/CategoryEvents';
import Tabbar from '../Tabbar/Tabbar';
import '../Homeperson/Homeperson.css';
import './Person.css';

class Person extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(eventActions.fetchPersonEvents());
    this.props.dispatch(eventActions.fetchFriendEvents());
  }

  render() {
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

export default connect()(Person);