import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import * as eventActions from '../../store/events/actions';
import SimilarEvents from './SimilarEvents';
import Eventpage from './Eventpage';
import Tabbar from '../Tabbar/Tabbar';
import * as authSelectors from '../../store/auth/reducer';
import '../Homeperson/Homeperson.css';
import './Eventdetail.css';

class Eventdetail extends Component {
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
    if (this.props.location.state !== undefined) {
      this.props.dispatch(eventActions.fetchEventDetail(this.props.location.state.eventid, currentlanguage));
    }
    window.scrollTo(0, 0);
    this.props.dispatch(eventActions.fetchSimilarEvents(currentlanguage));
  }
  componentWillReceiveProps(nextProps) {
    let nextlanguage = nextProps.i18n.language;
    if (nextProps.i18n.language.length > 2) {
      nextlanguage = nextProps.i18n.language.substring(0, 2);
    }
    if (nextlanguage !== this.state.currentlanguage) {
      this.setState({ currentlanguage: nextlanguage });
      if (this.props.location.state !== undefined) {
        this.props.dispatch(eventActions.fetchEventDetail(this.props.location.state.eventid, nextlanguage));
      }
      this.props.dispatch(eventActions.fetchSimilarEvents(nextlanguage));
    }
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
        <Eventpage />
        <div className="container friend-event d-none d-md-block">
          <SimilarEvents />
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