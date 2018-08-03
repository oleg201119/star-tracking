import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import moment from 'moment';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import AddToCalendarHOC from 'react-add-to-calendar-hoc';
import ReactModal from 'react-modal';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	EmailShareButton,
	FacebookIcon,
	TwitterIcon,
	WhatsappIcon,
	EmailIcon
} from 'react-share';
import * as eventsSelectors from '../../store/events/reducer';
import * as authSelectors from '../../store/auth/reducer';
import Button from '../Common/CalendarButton';
import Modal from '../Common/CalendarModal';
import './Eventpage.css';

const LoadingContainer = (props) => <div />;
const AddToCalendar = AddToCalendarHOC(Button, Modal);

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
			location: '',
			showsharemodal: false,
			fullread: false,
			showfull: false
		};
		this.fullref = <HTMLEllipsis />;
	}
	componentDidMount() {
		const self = this;
		if (this.props.length !== 0 && this.state.location !== this.props.eventDetail.GoogleAddresss) {
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
		if (nextProps.length !== 0 && this.state.location !== nextProps.eventDetail.GoogleAddresss) {
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
		const startDatetime = moment(eventDetail.AgendaFrom).utc().format('YYYYMMDDTHHmmssZ');
		const endDatetime = moment(eventDetail.AgendaTo).utc().format('YYYYMMDDTHHmmssZ');
		const shareUrl = window.location.href;
		const title = 'star-tracking';
		return (
			<div>
				{eventDetail.length !== 0 ? (
					<div>
						<div className="event-page d-none d-md-block">
							<div
								className="header-banner"
								style={
									eventDetail.HasBigBackground ? (
										{ backgroundImage: `url(${eventDetail.BigBackground})` }
									) : null
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
													{t('Door')}: {eventDetail.Organizer}
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
									<img alt="star" src={`/img/card-${eventDetail.State}.png`} />
								</div>
								<div className="event-buttons">
									<div className="row">
										<div className="col-8">
											<div className="options">
												{eventDetail.DisplayAddToCalendar ? (
													<AddToCalendar
														className="add-calendar"
														event={{
															description: eventDetail.AgendaDescription,
															endDatetime,
															location: eventDetail.AgendaLocation,
															startDatetime,
															title: eventDetail.AgendaTitle
														}}
													/>
												) : null}
												<div
													className="event-option event-option-share"
													onClick={() => {
														this.setState({ showsharemodal: true });
													}}
												>
													<img alt="share" src="/img/card-logout.png" />
												</div>
											</div>
										</div>
										<div className="col-4">
											<button type="button" className="btn btn-red btn-takepart">
												{t('Ik neem deel')}
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
												<div
													className="event-full-description-detail"
													dangerouslySetInnerHTML={{
														__html: eventDetail.FullDescription
													}}
												/>
											</div>
											{authToken !== '' && authToken !== 'error' ? (
												<div className="participate-friend">
													<span className="participate-friend-topic">
														{t('Deelnemende vrienden')}
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
												<span className="share-friend-topic">{t('Deel met vrienden')}</span>
												<div className="social-group-row">
													<FacebookShareButton
														url={shareUrl}
														quote={title}
														className="link-social"
													>
														<FacebookIcon size={32} round className="link-social-icon" />
													</FacebookShareButton>
													<TwitterShareButton
														url={shareUrl}
														title={title}
														className="link-social"
													>
														<TwitterIcon size={32} round className="link-social-icon" />
													</TwitterShareButton>
													<EmailShareButton
														url={shareUrl}
														subject={title}
														// body="body"
														className="link-social"
													>
														<EmailIcon size={32} round className="link-social-icon" />
													</EmailShareButton>
													<WhatsappShareButton
														url={shareUrl}
														title={title}
														separator=":: "
														className="link-social"
													>
														<WhatsappIcon size={32} round className="link-social-icon" />
													</WhatsappShareButton>
												</div>
											</div>
											<div className="event-tags">
												<span className="event-tags-topic">Tags</span>
												<span className="event-tags-detail">
													Loopwedstrijd, Marathon, Oost-Vlaanderen, Wortegem-Petegem, 10km,
													20km, 25km
												</span>
											</div>
										</div>
										<div className="col-4">
											<div className="event-date-time">
												<span className="event-date-time-topic">{t('Date and time')}</span>
											</div>
											<div className="event-date-time-detail">
												<div className="event-date-time-from">
													<span>{eventDetail.EventTime1}</span>
												</div>
												<div className="event-date-time-to">
													<span>{eventDetail.EventTime2}</span>
												</div>
											</div>
											<div className="event-location">
												<div className="event-location-topic">
													<span>{t('Location')}</span>
												</div>
												<div className="event-location-detail">
													{eventDetail.AddressName !== '' ? (
														<span>{eventDetail.AddressName},</span>
													) : null}
													<span>{eventDetail.AddressStreet},</span>
													<span>{eventDetail.AddressCity}</span>
													<a className="event-location-google" href="#/">
														{t('Route in Google Maps')}
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
													<span>{t('Organisatie')}</span>
												</div>
												{eventDetail.OrganizerHasLogo ? (
													<div className="event-organisation-logo">
														<img src={eventDetail.OrganizerLogo} alt="Organizer-logo" />
													</div>
												) : null}
												<div className="event-organisation-detail">
													{eventDetail.OrganizerName !== null ? (
														<span>{eventDetail.OrganizerName}</span>
													) : null}
													<address>
														{eventDetail.OrganizerMail !== null ? (
															<a
																className="event-organisation-web"
																href={`mailto:${eventDetail.OrganizerMail}`}
															>
																{eventDetail.OrganizerMail}
															</a>
														) : null}
													</address>
													{eventDetail.OrganizerWeb !== null ? (
														<a
															className="event-organisation-web"
															href={`https://${eventDetail.OrganizerWeb}`}
															target="_blank"
														>
															{eventDetail.OrganizerWeb}
														</a>
													) : null}
													{eventDetail.OrganizerPhone !== null ? (
														<span>{eventDetail.OrganizerPhone}</span>
													) : null}
													{eventDetail.OrganizerFacebook !== null ? (
														<div className="event-organisation-facebook">
															<i className="fa fa-facebook" />&nbsp;
															<a
																className="event-organisation-web"
																href={`https://${eventDetail.OrganizerFacebook}`}
																target="_blank"
															>
																{eventDetail.OrganizerFacebook}
															</a>
														</div>
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
											eventDetail.HasSmallBackground ? (
												eventDetail.SmallBackground
											) : (
												'/img/card-banner.png'
											)
										}
									/>
								</div>
								<div className="card-glass">
									<div className="slogan">{eventDetail.Name}</div>
								</div>
								<div className="card-star">
									<img alt="star" src={`/img/card-${eventDetail.State}.png`} />
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
													{t('Door')}: {eventDetail.Organizer}
												</div>
											</div>
										</div>
										<div className="options">
											{eventDetail.DisplayAddToCalendar ? (
												<AddToCalendar
													className="event-option"
													event={{
														description: eventDetail.AgendaDescription,
														endDatetime,
														location: eventDetail.AgendaLocation,
														startDatetime,
														title: eventDetail.AgendaTitle
													}}
												/>
											) : (
												<div className="event-option event-option-share" />
											)}
											<div
												className="event-option event-option-share"
												onClick={() => {
													this.setState({ showsharemodal: true });
												}}
											>
												<img alt="share" src="/img/card-logout.png" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="description-block">
								<div className="container">
									<div className="event-description event-description-less">
										<span className="event-description-detail">{eventDetail.Description}</span>
										{this.state.fullread ? (
											<div>
												<div
													className="event-full-description-detail"
													dangerouslySetInnerHTML={{
														__html: eventDetail.FullDescription
													}}
												/>
												{this.fullref.clamped ? (
													<span
														className="read-more"
														onClick={() => {
															this.setState({ fullread: false, showfull: true });
															window.scrollTo(0, 0);
														}}
													>
														{t('Hide details')}
													</span>
												) : null}
											</div>
										) : (
											<div className="event-full-description-detail">
												<HTMLEllipsis
													ref={(ref) => {
														this.fullref = ref;
													}}
													unsafeHTML={eventDetail.FullDescription}
													maxLine="4"
													ellipsis="..."
													basedOn="letters"
												/>
												{(this.fullref && this.fullref.clamped) || this.state.showfull ? (
													<span
														className="read-more"
														onClick={() => {
															this.setState({ fullread: true, showfull: false });
														}}
													>
														{t('read more')}
													</span>
												) : null}
											</div>
										)}
									</div>
								</div>
							</div>
							<div className="date-time-block">
								<div className="container">
									<div className="event-date-time">
										<span className="event-date-time-topic">{t('Date and time')}</span>
									</div>
									<div className="event-date-time-detail">
										<div className="event-date-time-from">
											<span>{eventDetail.EventTime1}</span>
										</div>
										<div className="event-date-time-to">
											<span>{eventDetail.EventTime2}</span>
										</div>
									</div>
								</div>
							</div>
							<div className="location-block">
								<div className="container">
									<div className="event-location-topic">
										<span>{t('Location')}</span>
									</div>
									<div className="event-location-detail">
										{eventDetail.AddressName !== '' ? (
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
												{t('Route in Google Maps')}
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
							{authToken !== '' && authToken !== 'error' ? (
								<div className="participate-block">
									<div className="container">
										<span className="participate-friend-topic">{t('Deelnemende vrienden')}</span>
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
										<span className="share-friend-topic">{t('Deel met vrienden')}</span>
									</div>
									<div className="social-group-row">
										<FacebookShareButton url={shareUrl} quote={title} className="link-social">
											<FacebookIcon size={32} round className="link-social-icon" />
										</FacebookShareButton>
										<TwitterShareButton url={shareUrl} title={title} className="link-social">
											<TwitterIcon size={32} round className="link-social-icon" />
										</TwitterShareButton>
										<EmailShareButton
											url={shareUrl}
											subject={title}
											// body="body"
											className="link-social"
										>
											<EmailIcon size={32} round className="link-social-icon" />
										</EmailShareButton>
										<WhatsappShareButton
											url={shareUrl}
											title={title}
											separator=":: "
											className="link-social"
										>
											<WhatsappIcon size={32} round className="link-social-icon" />
										</WhatsappShareButton>
									</div>
								</div>
							</div>
							<div className="tags-block">
								<div className="container">
									<span className="event-tags-topic">Tags</span>
									<span className="event-tags-detail">
										Loopwedstrijd, Marathon, Oost-Vlaanderen, Wortegem-Petegem, 10km, 20km, 25km
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
										<span>{t('Organisatie')}</span>
									</div>
									{eventDetail.OrganizerHasLogo ? (
										<div className="event-organisation-logo">
											<img src={eventDetail.OrganizerLogo} alt="Organizer-logo" />
										</div>
									) : null}
									{eventDetail.OrganizerName !== null ? (
										<div className="event-organisation-detail">
											<span>{eventDetail.OrganizerName}</span>
										</div>
									) : null}
									<div className="event-organisation-detail">
										{eventDetail.OrganizerMail !== null ? (
											<address>
												<a
													className="event-organisation-web"
													href={`mailto:${eventDetail.OrganizerMail}`}
												>
													{eventDetail.OrganizerMail}
												</a>
											</address>
										) : null}
									</div>
									{eventDetail.OrganizerWeb !== null ? (
										<div className="event-organisation-detail">
											<a
												className="event-organisation-web"
												href={`https://${eventDetail.OrganizerWeb}`}
												target="_blank"
											>
												{eventDetail.OrganizerWeb}
											</a>
										</div>
									) : null}
									{eventDetail.OrganizerPhone !== null ? (
										<div className="event-organisation-detail">
											<span>{eventDetail.OrganizerPhone}</span>
										</div>
									) : null}
									{eventDetail.OrganizerFacebook !== null ? (
										<div className="event-organisation-detail">
											<i className="fa fa-facebook" />&nbsp;
											<a
												className="event-organisation-web"
												href={`https://${eventDetail.OrganizerFacebook}`}
												target="_blank"
											>
												{eventDetail.OrganizerFacebook}
											</a>
										</div>
									) : null}
								</div>
							</div>
							<div className="button-block">
								<div className="container">
									<div className="event-price">
										<span>
											{t('Vanaf')}&nbsp;&euro;{eventDetail.MinimumPrice}
										</span>
									</div>
									<button type="button" className="btn btn-red btn-takepart">
										{t('Ik neem deel')}
									</button>
								</div>
							</div>
						</div>
					</div>
				) : null}
				<ReactModal
					isOpen={this.state.showsharemodal}
					className="calendar-modal"
					onRequestClose={() => {
						this.setState({ showsharemodal: false });
					}}
					shouldCloseOnOverlayClick={true}
				>
					<h2>Share the event</h2>
					<FacebookShareButton url={shareUrl} quote={title} className="link-social">
						<FacebookIcon size={32} round className="link-social-icon" />
					</FacebookShareButton>
					<TwitterShareButton url={shareUrl} title={title} className="link-social">
						<TwitterIcon size={32} round className="link-social-icon" />
					</TwitterShareButton>
					<EmailShareButton
						url={shareUrl}
						subject={title}
						// body="body"
						className="link-social"
					>
						<EmailIcon size={32} round className="link-social-icon" />
					</EmailShareButton>
					<WhatsappShareButton url={shareUrl} title={title} separator=":: " className="link-social">
						<WhatsappIcon size={32} round className="link-social-icon" />
					</WhatsappShareButton>
					<div
						onClick={() => {
							this.setState({ showsharemodal: false });
						}}
					>
						<span>Cancel</span>
					</div>
				</ReactModal>
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
	translate('translations')(
		GoogleApiWrapper({
			apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
			LoadingContainer: LoadingContainer
		})(Eventpage)
	)
);
