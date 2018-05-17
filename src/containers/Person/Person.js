import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { translate } from 'react-i18next';
import * as eventActions from '../../store/events/actions';
import PersonEvents from '../Homeperson/PersonEvents';
import FriendEvents from '../Homeperson/FriendEvents';
import CategoryEvents from '../Homeperson/CategoryEvents';
import Tabbar from '../Tabbar/Tabbar';
import * as authSelectors from '../../store/auth/reducer';
import '../Homeperson/Homeperson.css';
import './Person.css';

class Person extends Component {
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
    window.onpopstate = function() {
      if (self.props.history.location.pathname === '/login') {
        
        window.history.go(1);
        // window.history.pushState(null, null, '/person');
        
      }
    };
    let currentlanguage = this.props.i18n.language;
    if (this.props.i18n.language.length > 2) {
      currentlanguage = this.props.i18n.language.substring(0, 2);
    }
    this.setState({ currentlanguage: currentlanguage });
    window.scrollTo(0, 0);
    this.props.dispatch(eventActions.fetchPersonEvents(currentlanguage));
    this.props.dispatch(eventActions.fetchFriendEvents(currentlanguage));
  }
  componentWillReceiveProps(nextProps) {
    let nextlanguage = nextProps.i18n.language;
    if (nextProps.i18n.language.length > 2) {
      nextlanguage = nextProps.i18n.language.substring(0, 2);
    }
    if (nextlanguage !== this.state.currentlanguage) {
      this.setState({ currentlanguage: nextlanguage });
      this.props.dispatch(eventActions.fetchPersonEvents(nextlanguage));
      this.props.dispatch(eventActions.fetchFriendEvents(nextlanguage));
    }
  }
  render() {
    const { authToken } = this.props;
    if (authToken === '' || authToken === 'error') return <Redirect to="/login" />;
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
export default connect(mapStateToProps)(translate('translations')(Person));
