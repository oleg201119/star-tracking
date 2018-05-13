import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import * as eventActions from '../../store/events/actions';
import FriendEvents from '../Homeperson/FriendEvents';
import Tabbar from '../Tabbar/Tabbar';
import * as authSelectors from '../../store/auth/reducer';
import '../Homeperson/Homeperson.css';
import './Eventdetail.css';

class Eventdetail extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    console.log(this.props.location.state);
    // if (this.props.location.state === undefined) {
    //   console.log("sss");
    // }
    window.scrollTo(0, 0);
    this.props.dispatch(eventActions.fetchPersonEvents(this.props.i18n.language));
    this.props.dispatch(eventActions.fetchFriendEvents(this.props.i18n.language));
  }

  render() {
    const { authToken } = this.props;
    return (
      <div className="eventdetail">
        {authToken !== '' && authToken !== 'error' ?
          <div className="person-tabbar">
            <Tabbar />
          </div> :
          null }

        <div className="container friend-event">
          <FriendEvents />
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
export default connect(mapStateToProps)(translate('translations')(Eventdetail));
