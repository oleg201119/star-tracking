import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { fadeIn, fadeOut } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import * as eventActions from '../../store/events/actions';
import * as eventsSelectors from '../../store/events/reducer';
import EventCard from '../../components/EventCard/EventCard';
import EventLoadingCard from '../Common/EventLoadingCard';
import './FriendEvents.css';
const styles = {
	fadeIn: {
		animation: 'x 2s',
		animationName: Radium.keyframes(fadeIn, 'fadeIn')
	},
	fadeOut: {
		animation: 'x 2s',
		animationName: Radium.keyframes(fadeOut, 'fadeOut')
	}
};
class FriendEvents extends Component {
	static propTypes = {
		friendEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
		friendEventsFlag: PropTypes.bool.isRequired
	};
	constructor() {
		super();
		this.state = {
			currentlanguage: '',
			style: {}
		};
	}
	componentDidMount() {
		let currentlanguage = this.props.i18n.language;
		if (this.props.i18n.language.length > 2) {
			currentlanguage = this.props.i18n.language.substring(0, 2);
		}
		this.setState({ currentlanguage: currentlanguage });
		this.props.dispatch(eventActions.fetchFriendEvents(currentlanguage));
	}
	componentWillReceiveProps(nextProps) {
		let nextlanguage = nextProps.i18n.language;
		if (nextProps.i18n.language.length > 2) {
			nextlanguage = nextProps.i18n.language.substring(0, 2);
		}
		if (nextlanguage !== this.state.currentlanguage && this.state.currentlanguage !== '') {
			this.setState({ currentlanguage: nextlanguage });
			this.props.dispatch(eventActions.fetchFriendEvents(nextlanguage));
		}
		if (nextProps.friendEventsFlag !== this.props.friendEventsFlag) {
			if (nextProps.friendEventsFlag === false) {
				this.setState({ style: styles.fadeOut });
				setTimeout(() => {
					this.setState({ style: {} });
				}, 2000);
			}
		}
	}
	buildEventCards = (events) =>
		events.map((event) => <EventCard key={event.ID} event={event} person={true} mobiletype={false} />);

	render() {
		const eventCards = this.buildEventCards(this.props.friendEvents);
		const { t } = this.props;

		return (
			<StyleRoot>
				{this.props.friendEventsFlag ? (
					<div className="friend-events">
						<div className="section-title">{t('Events waar jouw vrienden deelnemen')}</div>
						<div style={this.state.style}>
							<EventLoadingCard person={true} />
						</div>
					</div>
				) : (
					<div className="friend-events">
						{eventCards.length ? (
							<div className="section-title">{t('Events waar jouw vrienden deelnemen')}</div>
						) : null}
						<div className="row" style={styles.fadeIn}>
							{eventCards}
						</div>
					</div>
				)}
			</StyleRoot>
		);
	}
}

function mapStateToProps(state) {
	const friendEvents = eventsSelectors.getFriendEvents(state);
	const friendEventsFlag = eventsSelectors.getFriendEventsFlag(state);

	return {
		friendEvents,
		friendEventsFlag
	};
}

export default connect(mapStateToProps)(translate('translations')(FriendEvents));
