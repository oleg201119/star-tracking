import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { translate } from 'react-i18next';
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
import ReactModal from 'react-modal';
import AddToCalendarHOC from 'react-add-to-calendar-hoc';
import Button from '../../containers/Common/CalendarButton';
import Modal from '../../containers/Common/CalendarModal';
import EventService from '../../services/events';
import './Card.css';

const AddToCalendar = AddToCalendarHOC(Button, Modal);

class EventCard extends Component {
	static propTypes = {
		event: PropTypes.objectOf(PropTypes.any).isRequired,
		person: PropTypes.bool.isRequired,
		mobiletype: PropTypes.bool.isRequired
	};
	constructor() {
		super();
		this.state = {
			showsharemodal: false
		};
	}
	render() {
		const { event, person, t, mobiletype } = this.props;
		const startDatetime = moment(event.AgendaFrom).utc().format('YYYYMMDDTHHmmssZ');
		const endDatetime = moment(event.AgendaTo).utc().format('YYYYMMDDTHHmmssZ');
		const shareUrl = `${window.location.origin}/event/${event.ID}`;
		const title = event.ShareTitle;
		return (
			<div
				className={`event-card col-12 ${person ? 'col-md-6 col-xl-4' : 'col-md-12 col-xl-6'} ${mobiletype
					? 'mobiletype'
					: ''}`}
			>
				<div
					className={`card-banner ${mobiletype ? 'mobiletype' : ''}`}
					onClick={() => {
						window.location = event.State !== 'results' ? `/event/${event.ID}` : `/eventresult/${event.ID}`;
					}}
				>
					<img alt="banner" src={event.HasSmallBackground ? event.SmallBackground : '/img/card-banner.png'} />
				</div>
				<div
					className={`card-glass ${mobiletype ? 'mobiletype' : ''}`}
					onClick={(e) => {
						window.location = event.State !== 'results' ? `/event/${event.ID}` : `/eventresult/${event.ID}`;
					}}
				>
					<div className="slogan">{event.Name}</div>
				</div>
				<div
					className={`card-star ${event.State} ${mobiletype ? 'mobiletype' : ''}`}
					onClick={() => {
						EventService.markEventAsFavorite(event);
					}}
				>
					<img alt={`${event.State}`} src={`/img/card-${event.State}.png`} />
				</div>
				<div
					className={`event-info ${event.Type} ${mobiletype ? 'mobiletype' : ''}`}
					onClick={(e) => {
						window.location = event.State !== 'results' ? `/event/${event.ID}` : `/eventresult/${event.ID}`;
					}}
				>
					<div className="event-content">
						<div className="event-time">
							<div className="day">{event.Day}</div>
							<div className="month">{event.Month}</div>
							<div className="time">{event.Time}</div>
						</div>
						<div className="event-description">
							<div className="title">{event.Description}</div>
							<div className="by-options">
								<div className="by">
									{t('Door')}: {event.Organizer}
								</div>
								<div className="type-city">
									{event.Type}&nbsp;@&nbsp;{event.City}
								</div>
								<div
									className={`options ${mobiletype ? 'mobiletype' : ''}`}
									onClick={(e) => e.stopPropagation()}
								>
									{event.DisplayAddToCalendar ? (
										<AddToCalendar
											className="event-option"
											event={{
												description: event.AgendaDescription,
												endDatetime: endDatetime,
												location: event.AgendaLocation,
												startDatetime: startDatetime,
												title: event.AgendaTitle
											}}
										/>
									) : null}
									<div
										className="event-option event-option-share"
										onClick={(e) => {
											this.setState({ showsharemodal: true });
										}}
									>
										<img alt="share" src="/img/card-logout.png" />
									</div>
								</div>
							</div>
							{mobiletype ? <div className="event-smalldescription">{event.SmallDescription}</div> : null}
							{event.DisplayParticipantList ? (
								<div className="friends">
									<a href="#/" className="friend-link">
										<img
											alt="avatar"
											src={
												Math.random() > 0.5 ? `/img/Male-avatar.png` : `/img/Female-avatar.png`
											}
										/>
									</a>
									<a href="#/" className="friend-link">
										<img
											alt="avatar"
											src={
												Math.random() > 0.5 ? `/img/Male-avatar.png` : `/img/Female-avatar.png`
											}
										/>
									</a>
									<a href="#/" className="friend-link">
										<img
											alt="avatar"
											src={
												Math.random() > 0.5 ? `/img/Male-avatar.png` : `/img/Female-avatar.png`
											}
										/>
									</a>
								</div>
							) : null}
						</div>
					</div>
				</div>
				<ReactModal
					isOpen={this.state.showsharemodal}
					className="calendar-modal"
					onRequestClose={() => {
						this.setState({ showsharemodal: false });
					}}
					shouldCloseOnOverlayClick={true}
				>
					<h2>Share the event</h2>
					<FacebookShareButton
						url={shareUrl}
						quote={title}
						hashtag={event.ShareDescription}
						className="link-social"
					>
						<FacebookIcon size={32} round className="link-social-icon" />
					</FacebookShareButton>
					<TwitterShareButton
						url={shareUrl}
						title={title}
						via={event.ShareDescription}
						className="link-social"
					>
						<TwitterIcon size={32} round className="link-social-icon" />
					</TwitterShareButton>
					<EmailShareButton
						url={shareUrl}
						subject={title}
						body={event.ShareDescription}
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
export default translate('translations')(EventCard);
