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
import './MySelectedEvents.css';
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
class MySelectedEvents extends Component {
	static propTypes = {
		myselectedEvents: PropTypes.arrayOf(PropTypes.any).isRequired,
		myselectedEventsFlag: PropTypes.bool.isRequired
	};
	state = {
		style: {}
	};
	constructor() {
		super();
		this.state = {
			currentlanguage: ''
		};
	}
	componentDidMount() {
		let currentlanguage = this.props.i18n.language;
		if (this.props.i18n.language.length > 2) {
			currentlanguage = this.props.i18n.language.substring(0, 2);
		}
		this.setState({ currentlanguage: currentlanguage });
		this.props.dispatch(eventActions.fetchMySelectedEvents(currentlanguage));
	}
	componentWillReceiveProps(nextProps) {
		let nextlanguage = nextProps.i18n.language;
		if (nextProps.i18n.language.length > 2) {
			nextlanguage = nextProps.i18n.language.substring(0, 2);
		}
		if (nextlanguage !== this.state.currentlanguage && this.state.currentlanguage !== '') {
			this.setState({ currentlanguage: nextlanguage });
			this.props.dispatch(eventActions.fetchMySelectedEvents(nextlanguage));
		}
		if (nextProps.myselectedEventsFlag !== this.props.myselectedEventsFlag) {
			if (nextProps.myselectedEventsFlag === false) {
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
		const eventCards = this.buildEventCards(this.props.myselectedEvents);
		const { t } = this.props;
		return (
			<StyleRoot>
				<div className="header-banner mobile-person-header">
					<div className="glass-section">
						<div className="slogan-section">
							<div className="container">
								<span className="slogan">
									{this.props.myselectedEventsFlag ? (
										t('Events geselecteerd voor jou')
									) : eventCards.length ? (
										t('Events geselecteerd voor jou')
									) : null}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					{this.props.myselectedEventsFlag ? (
						<div className="person-events">
							<div className="section-title mobile-person-title">{t('Events geselecteerd voor jou')}</div>
							<div style={this.state.style}>
								<EventLoadingCard person={true} />
							</div>
						</div>
					) : (
						<div className="person-events">
							{eventCards.length ? (
								<div className="section-title mobile-person-title">
									{t('Events geselecteerd voor jou')}
								</div>
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
	const myselectedEvents = eventsSelectors.getMySelectedEvents(state);
	const myselectedEventsFlag = eventsSelectors.getMySelectedEventsFlag(state);

	return {
		myselectedEvents,
		myselectedEventsFlag
	};
}

export default connect(mapStateToProps)(translate('translations')(MySelectedEvents));
