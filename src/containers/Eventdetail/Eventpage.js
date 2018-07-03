import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import { Map, GoogleApiWrapper } from "google-maps-react";
import * as eventsSelectors from "../../store/events/reducer";
import * as authSelectors from "../../store/auth/reducer";
import "./Eventpage.css";

const LoadingContainer = props => <div />;

class Eventpage extends Component {
  static propTypes = {
    eventDetail: PropTypes.any.isRequired
  };
  constructor() {
    super();
    this.state = {
      initialCenter: {
        lat: 37.774929,
        lng: -122.419416
      },
      location: ""
    };
  }
  componentDidMount() {
    const self = this;
    if (
      this.props.length !== 0 &&
      this.state.location !== this.props.eventDetail.GoogleAddresss
    ) {
      this.setState({ location: this.props.eventDetail.GoogleAddresss });
      const google = window.google;
      const geocoder = new google.maps.Geocoder();
      if (geocoder) {
        geocoder.geocode(
          {
            address: this.props.eventDetail.GoogleAddresss
          },
          function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              self.setState({
                initialCenter: {
                  lat: results[0].geometry.location.lat(),
                  lng: results[0].geometry.location.lng()
                }
              });
            }
          }
        );
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    const self = this;
    if (
      nextProps.length !== 0 &&
      this.state.location !== nextProps.eventDetail.GoogleAddresss
    ) {
      this.setState({ location: nextProps.eventDetail.GoogleAddresss });
      const google = window.google;
      const geocoder = new google.maps.Geocoder();
      if (geocoder) {
        geocoder.geocode(
          {
            address: nextProps.eventDetail.GoogleAddresss
          },
          function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              self.setState({
                initialCenter: {
                  lat: results[0].geometry.location.lat(),
                  lng: results[0].geometry.location.lng()
                }
              });
            }
          }
        );
      }
    }
  }
  render() {
    const { eventDetail, t, authToken } = this.props;
    return (
      <div>
        {eventDetail.length !== 0 ? (
          <div>
            <div className="event-page d-none d-md-block">
              <div
                className="header-banner"
                style={
                  eventDetail.HasBigBackground
                    ? { backgroundImage: `url(${eventDetail.BigBackground})` }
                    : null
                }
              >
                <div className="glass-section">
                  {eventDetail.HasTopBanner ? (
                    <div className="container event-top-banner">
                      <img alt="event-top-banner" src={eventDetail.TopBanner} />>
                    </div>
                  ) : null}
                  <div className="slogan-section">
                    <div className="container event-header">
                      <div className="event-name">
                        <span className="eventname">{eventDetail.Name}</span>
                        <span className="event-organizer">
                          {t("Door")}: {eventDetail.Organizer}
                        </span>
                      </div>
                      <div className="event-time">
                        <div className="day">{eventDetail.Day}</div>
                        <div className="month">{eventDetail.Month}</div>
                        <div className="time">{eventDetail.Time}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="card-star">
                  <img alt="star" src="/img/card-white-star.png" />
                </div>
                <div className="event-buttons">
                  <div className="row">
                    <div className="col-8">
                      <div className="options">
                        <a href="#/" className="event-option">
                          <img alt="down" src="/img/card-calendar-down.png" />
                        </a>
                        <a href="#/" className="event-option">
                          <img alt="logout" src="/img/card-logout.png" />
                        </a>
                      </div>
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-red btn-takepart"
                      >
                        {t("Ik neem deel")}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="event-detail">
                  <div className="row">
                    <div className="col-8">
                      <div className="event-description">
                        <span className="event-description-detail">
                          {eventDetail.Description}
                        </span>
                        <span className="event-description-detail">
                          {eventDetail.FullDescription}
                        </span>
                      </div>
                      {authToken !== "" && authToken !== "error" ? (
                        <div className="participate-friend">
                          <span className="participate-friend-topic">
                            {t("Deelnemende vrienden")}
                          </span>
                          <div className="friends">
                            <a href="#/" className="friend-link">
                              <img alt="avatar" src="/img/navbar-avatar.png" />
                            </a>
                            <a href="#/" className="friend-link">
                              <img alt="avatar" src="/img/navbar-avatar.png" />
                            </a>
                            <a href="#/" className="friend-link">
                              <img alt="avatar" src="/img/navbar-avatar.png" />
                            </a>
                            <a href="#/" className="friend-link">
                              <img alt="avatar" src="/img/navbar-avatar.png" />
                            </a>
                            <a href="#/" className="friend-link">
                              <img alt="avatar" src="/img/navbar-avatar.png" />
                            </a>
                          </div>
                        </div>
                      ) : null}
                      <div className="share-friend">
                        <span className="share-friend-topic">
                          {t("Deel met vrienden")}
                        </span>
                        <div className="social-group-row">
                          <a href="#/" className="link-social">
                            <i className="fa fa-facebook" />
                          </a>
                          <a href="#/" className="link-social ">
                            <i className="fa fa-twitter" />
                          </a>
                          <a href="#/" className="link-social ">
                            <i className="fa fa-linkedin" />
                          </a>
                          <a href="#/" className="link-social ">
                            <i className="fa fa-envelope-o" />
                          </a>
                          <a href="#/" className="link-social ">
                            <i className="fa fa-whatsapp" />
                          </a>
                        </div>
                      </div>
                      <div className="event-tags">
                        <span className="event-tags-topic">Tags</span>
                        <span className="event-tags-detail">
                          Loopwedstrijd, Marathon, Oost-Vlaanderen,
                          Wortegem-Petegem, 10km, 20km, 25km
                        </span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="event-date-time">
                        <span className="event-date-time-topic">
                          {t("Date and time")}
                        </span>
                      </div>
                      <div className="event-date-time-detail">
                        <div className="event-date-time-from">
                          <span>{eventDetail.From}</span>
                        </div>
                        {eventDetail.To !== null ? (
                          <div className="event-date-time-line">
                            <span>&nbsp;-&nbsp;</span>
                          </div>
                        ) : null}
                        {eventDetail.To !== null ? (
                          <div className="event-date-time-to">
                            <span>{eventDetail.To}</span>
                          </div>
                        ) : null}
                      </div>
                      <div className="event-location">
                        <div className="event-location-topic">
                          <span>{t("Location")}</span>
                        </div>
                        <div className="event-location-detail">
                          {eventDetail.AddressName !== "" ? (
                            <span>{eventDetail.AddressName},</span>
                          ) : null}
                          <span>{eventDetail.AddressStreet},</span>
                          <span>{eventDetail.AddressCity}</span>
                          <a className="event-location-google" href="#/">
                            {t("Route in Google Maps")}
                          </a>
                        </div>
                      </div>
                      <div className="event-google-map">
                        <div className="google-map">
                          <Map
                            google={window.google}
                            className="google-map-container"
                            center={this.state.initialCenter}
                            zoom={15}
                          />
                        </div>
                      </div>
                      <div className="event-organisation">
                        <div className="event-organisation-topic">
                          <span>{t("Organisatie")}</span>
                        </div>
                        {eventDetail.OrganizerHasLogo ? (
                          <div className="event-organisation-logo">
                            <img
                              src={eventDetail.OrganizerLogo}
                              alt="Organizer-logo"
                            />
                          </div>
                        ) : null}
                        <div className="event-organisation-detail">
                          <span>{eventDetail.OrganizerMail}</span>
                          {eventDetail.OrganizerWeb !== null ? (
                            <a className="event-organisation-web" href="#/">
                              {eventDetail.OrganizerWeb}
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-page-mobile d-md-none">
              <div className="event-card">
                <div className="card-banner">
                  <img
                    alt="banner"
                    src={
                      eventDetail.HasSmallBackground
                        ? eventDetail.SmallBackground
                        : "/img/card-banner.png"
                    }
                  />
                </div>
                <div className="card-glass">
                  <div className="slogan">{eventDetail.Name}</div>
                </div>
                <div className="card-star">
                  <img alt="star" src="/img/card-white-star.png" />
                </div>
                <div className={`event-info ${eventDetail.Type}`}>
                  <div className="event-content">
                    <div className="event-time">
                      <div className="day">{eventDetail.Day}</div>
                      <div className="month">{eventDetail.Month}</div>
                      <div className="time">{eventDetail.Time}</div>
                    </div>
                    <div className="event-description">
                      <div className="title">{eventDetail.Description}</div>
                      <div className="by-options">
                        <div className="by">
                          {t("Door")}: {eventDetail.Organizer}
                        </div>
                      </div>
                    </div>
                    <div className="options">
                      <a href="#/" className="event-option">
                        <img alt="down" src="/img/card-calendar-down.png" />
                      </a>
                      <a href="#/" className="event-option">
                        <img alt="logout" src="/img/card-logout.png" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="description-block">
                <div className="container">
                  <div className="event-description">
                    <span className="event-description-detail">
                      {eventDetail.Description}
                    </span>
                    <span className="event-description-detail">
                      {eventDetail.FullDescription}
                    </span>
                  </div>
                </div>
              </div>
              <div className="date-time-block">
                <div className="container">
                  <div className="event-date-time">
                    <span className="event-date-time-topic">
                      {t("Date and time")}
                    </span>
                  </div>
                  <div className="event-date-time-detail">
                    <div className="event-date-time-from">
                      <span>{eventDetail.From}</span>
                    </div>
                    {eventDetail.To !== null ? (
                      <div className="event-date-time-line">
                        <span>&nbsp;-&nbsp;</span>
                      </div>
                    ) : null}
                    {eventDetail.To !== null ? (
                      <div className="event-date-time-to">
                        <span>{eventDetail.To}</span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="location-block">
                <div className="container">
                  <div className="event-location-topic">
                    <span>{t("Location")}</span>
                  </div>
                  <div className="event-location-detail">
                    {eventDetail.AddressName !== "" ? (
                      <div>
                        <span>{eventDetail.AddressName},</span>
                      </div>
                    ) : null}
                    <div>
                      <span>{eventDetail.AddressStreet},</span>
                    </div>
                    <div>
                      <span>{eventDetail.AddressCity}</span>
                    </div>
                    <div>
                      <a className="event-location-google" href="#/">
                        {t("Route in Google Maps")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="google-map-block">
                <div className="google-map">
                  <Map
                    google={window.google}
                    className="google-map-container"
                    center={this.state.initialCenter}
                    zoom={15}
                  />
                </div>
              </div>
              {authToken !== "" && authToken !== "error" ? (
                <div className="participate-block">
                  <div className="container">
                    <span className="participate-friend-topic">
                      {t("Deelnemende vrienden")}
                    </span>
                    <div className="friends">
                      <a href="#/" className="friend-link">
                        <img alt="avatar" src="/img/navbar-avatar.png" />
                      </a>
                      <a href="#/" className="friend-link">
                        <img alt="avatar" src="/img/navbar-avatar.png" />
                      </a>
                      <a href="#/" className="friend-link">
                        <img alt="avatar" src="/img/navbar-avatar.png" />
                      </a>
                      <a href="#/" className="friend-link">
                        <img alt="avatar" src="/img/navbar-avatar.png" />
                      </a>
                      <a href="#/" className="friend-link">
                        <img alt="avatar" src="/img/navbar-avatar.png" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="share-friend-block">
                <div className="container">
                  <div className="share-friend-text">
                    <span className="share-friend-topic">
                      {t("Deel met vrienden")}
                    </span>
                  </div>
                  <div className="social-group-row">
                    <a href="#/" className="link-social">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#/" className="link-social ">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#/" className="link-social ">
                      <i className="fa fa-linkedin" />
                    </a>
                    <a href="#/" className="link-social ">
                      <i className="fa fa-envelope-o" />
                    </a>
                    <a href="#/" className="link-social ">
                      <i className="fa fa-whatsapp" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="tags-block">
                <div className="container">
                  <span className="event-tags-topic">Tags</span>
                  <span className="event-tags-detail">
                    Loopwedstrijd, Marathon, Oost-Vlaanderen, Wortegem-Petegem,
                    10km, 20km, 25km
                  </span>
                </div>
              </div>
              <div className="organisation-block">
                <div className="container">
                  {eventDetail.HasSmallBottomBanner ? (
                    <img
                      alt="event-bottom-banner"
                      src={eventDetail.SmallBottomBanner}
                      className="d-md-none event-bottom-banner"
                    />
                  ) : null}
                  <div className="event-organisation-topic">
                    <span>{t("Organisatie")}</span>
                  </div>
                  {eventDetail.OrganizerHasLogo ? (
                    <div className="event-organisation-logo">
                      <img
                        src={eventDetail.OrganizerLogo}
                        alt="Organizer-logo"
                      />
                    </div>
                  ) : null}
                  <div className="event-organisation-detail">
                    <span>{eventDetail.OrganizerMail}</span>
                  </div>
                  {eventDetail.OrganizerWeb !== null ? (
                    <div className="event-organisation-detail">
                      <a className="event-organisation-web" href="#/">
                        {eventDetail.OrganizerWeb}
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="button-block">
                <div className="container">
                  <div className="event-price">
                    <span>
                      {t("Vanaf")}&nbsp;&euro;{eventDetail.MinimumPrice}
                    </span>
                  </div>
                  <button type="button" className="btn btn-red btn-takepart">
                    {t("Ik neem deel")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const eventDetail = eventsSelectors.getEventDetail(state);
  const authToken = authSelectors.getLoginAuth(state);

  return {
    eventDetail,
    authToken
  };
}

export default connect(mapStateToProps)(
  translate("translations")(
    GoogleApiWrapper({
      apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
      LoadingContainer: LoadingContainer
    })(Eventpage)
  )
);
