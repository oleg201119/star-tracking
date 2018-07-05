import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EventLoadingCard.css';

class EventLoadingCard extends Component {
	static propTypes = {
		person: PropTypes.bool.isRequired
	};

	render() {
		const { person } = this.props;

		return (
			<div className="row">
				<div
					className={`event-card event-loading-card col-12 ${person
						? 'col-md-6 col-xl-4'
						: 'col-md-12 col-xl-6'}`}
				>
					<img alt="event-loading-img" src="/img/event-loading-img.png" />
				</div>
				<div
					className={`event-card event-loading-card col-12 ${person
						? 'col-md-6 col-xl-4'
						: 'col-md-12 col-xl-6'}`}
				>
					<img alt="event-loading-img" src="/img/event-loading-img.png" />
				</div>
			</div>
		);
	}
}
export default EventLoadingCard;
