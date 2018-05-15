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
    let currentlanguage = this.props.i18n.language;
    if (this.props.i18n.language.length > 2) {
      currentlanguage = this.props.i18n.language.substring(0, 2);
    }
    window.scrollTo(0, 0);
    this.props.dispatch(eventActions.fetchPersonEvents(currentlanguage));
    this.props.dispatch(eventActions.fetchFriendEvents(currentlanguage));
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.i18n.language !== this.state.currentlanguage) {
      this.setState({ currentlanguage: nextProps.i18n.language });
      this.props.dispatch(eventActions.fetchPersonEvents(this.props.i18n.language));
      this.props.dispatch(eventActions.fetchFriendEvents(this.props.i18n.language));
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
