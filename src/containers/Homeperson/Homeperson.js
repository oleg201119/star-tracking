import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import * as eventActions from "../../store/events/actions";
import HeaderBanner from "../Common/HeaderBanner";
import FooterBanner from "../Common/FooterBanner";
import EventSearch from "../Common/EventSearch";
import MySelectedEvents from "./MySelectedEvents";
import FriendEvents from "./FriendEvents";
import CategoryEvents from "./CategoryEvents";
import PastEvents from "./PastEvents";
import "./Homeperson.css";

class Homeperson extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  constructor() {
    super();
    this.state = {
      currentlanguage: ""
    };
  }

  componentDidMount() {
    let currentlanguage = this.props.i18n.language;
    if (this.props.i18n.language.length > 2) {
      currentlanguage = this.props.i18n.language.substring(0, 2);
    }
    this.setState({ currentlanguage: currentlanguage });
    window.scrollTo(0, 0);
    this.props.dispatch(eventActions.fetchMySelectedEvents(currentlanguage));
    this.props.dispatch(eventActions.fetchFriendEvents(currentlanguage));
  }
  componentWillReceiveProps(nextProps) {
    let nextlanguage = nextProps.i18n.language;
    if (nextProps.i18n.language.length > 2) {
      nextlanguage = nextProps.i18n.language.substring(0, 2);
    }
    if (nextlanguage !== this.state.currentlanguage) {
      this.setState({ currentlanguage: nextlanguage });
      this.props.dispatch(eventActions.fetchMySelectedEvents(nextlanguage));
      this.props.dispatch(eventActions.fetchFriendEvents(nextlanguage));
    }
  }

  render() {
    return (
      <div className="home-person">
        <HeaderBanner />
        <div className="container">
          <div className="row">
            <div className="col-9 event-search">
              <EventSearch />
            </div>
          </div>
        </div>
        <div className="container">
          <MySelectedEvents />
        </div>
        <div className="container friend-event">
          <FriendEvents />
        </div>
        <div className="container category-event">
          <CategoryEvents />
        </div>
        <FooterBanner />
        <div className="container">
          <PastEvents />
        </div>
      </div>
    );
  }
}

export default connect()(translate("translations")(Homeperson));
