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
class MyResultsEvents extends Component {
	static propTypes = {
		myresultsEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
		myresultsEventsFlag: PropTypes.bool.isRequired
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
		this.props.dispatch(eventActions.fetchMyResultsEvents(currentlanguage));
	}
	componentWillReceiveProps(nextProps) {
		let nextlanguage = nextProps.i18n.language;
		if (nextProps.i18n.language.length > 2) {
			nextlanguage = nextProps.i18n.language.substring(0, 2);
		}
		if (nextlanguage !== this.state.currentlanguage && this.state.currentlanguage !== '') {
			this.setState({ currentlanguage: nextlanguage });
			this.props.dispatch(eventActions.fetchMyResultsEvents(nextlanguage));
		}
		if (nextProps.myresultsEventsFlag !== this.props.myresultsEventsFlag) {
			if (nextProps.myresultsEventsFlag === false) {
				this.setState({ style: styles.fadeOut });
				setTimeout(() => {
					this.setState({ style: {} });
				}, 2000);
			}
		}
	}
	buildEventCards = (events) =>
		events.map((event) => <EventCard key={event.ID} event={event} person={true} mobiletype={true} />);

	render() {
		const eventCards = this.buildEventCards(this.props.myresultsEvents);
		const { t } = this.props;

		return (
			<StyleRoot>
				<div className="header-banner mobile-person-header">
					<div className="glass-section">
						<div className="slogan-section">
							<div className="container">
								<span className="slogan">
									{this.props.myresultsEventsFlag ? (
										t('My results')
									) : eventCards.length ? (
										t('My results')
									) : null}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					{this.props.myresultsEventsFlag ? (
						<div className="friend-events">
							<div className="section-title mobile-person-title">{t('My results')}</div>
							<div style={this.state.style}>
								<EventLoadingCard person={true} />
							</div>
						</div>
					) : (
						<div className="friend-events">
							{eventCards.length ? (
								<div className="section-title mobile-person-title">{t('My results')}</div>
							) : null}
							<div className="row" style={styles.fadeIn}>
								{eventCards}
							</div>
						</div>
					)}
				</div>
			</StyleRoot>
		);
	}
}

function mapStateToProps(state) {
	const myresultsEvents = eventsSelectors.getMyResultsEvents(state);
	const myresultsEventsFlag = eventsSelectors.getMyResultsEventsFlag(state);

	return {
		myresultsEvents,
		myresultsEventsFlag
	};
}

export default connect(mapStateToProps)(translate('translations')(MyResultsEvents));
