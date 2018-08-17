import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import './Card.css';

class InfoCard extends Component {
	static propTypes = {
		event: PropTypes.objectOf(PropTypes.any).isRequired
	};

	render() {
		const { event, t } = this.props;

		return (
			<div
				className={`event-info mb-4 ${event.Type}`}
				onClick={(e) => {
					window.location = `/eventresult/${event.ID}`;
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
							{/* <div className="options">
								<a href="#/" className="event-option">
									{t('Resultaten')}
								</a>
							</div> */}
						</div>
						{event.DisplayParticipantList ? (
							<div className="friends">
								<a href="#/" className="friend-link">
									<img
										alt="avatar"
										src={Math.random() > 0.5 ? `/img/Male-avatar.png` : `/img/Female-avatar.png`}
									/>
								</a>
								<a href="#/" className="friend-link">
									<img
										alt="avatar"
										src={Math.random() > 0.5 ? `/img/Male-avatar.png` : `/img/Female-avatar.png`}
									/>
								</a>
								<a href="#/" className="friend-link">
									<img
										alt="avatar"
										src={Math.random() > 0.5 ? `/img/Male-avatar.png` : `/img/Female-avatar.png`}
									/>
								</a>
							</div>
						) : null}
					</div>
				</div>
			</div>
		);
	}
}
export default translate('translations')(InfoCard);
