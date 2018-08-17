import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import * as eventActions from '../../store/events/actions';
import HeaderBanner from '../Common/HeaderBanner';
import FooterBanner from '../Common/FooterBanner';
import EventSearch from '../Common/EventSearch';
import NextEvents from './NextEvents';
import './Homepage.css';

class Homepage extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired
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
		window.scrollTo(0, 0);
		this.props.dispatch(eventActions.fetchUpcomingEvents(currentlanguage));
	}
	componentWillReceiveProps(nextProps) {
		let nextlanguage = nextProps.i18n.language;
		if (nextProps.i18n.language.length > 2) {
			nextlanguage = nextProps.i18n.language.substring(0, 2);
		}
		if (nextlanguage !== this.state.currentlanguage) {
			this.setState({ currentlanguage: nextlanguage });
			this.props.dispatch(eventActions.fetchUpcomingEvents(nextlanguage));
		}
	}
	render() {
		const selectEvent = this.props.location.state !== undefined ? this.props.location.state.selectEvent : '';
		return (
			<div className="home-person">
				<HeaderBanner />
				<div className="container">
					<div className="row">
						<div className="col-11 col-md-9 event-search">
							<EventSearch {...{ selectEvent: selectEvent }} />
						</div>
					</div>
				</div>
				<div className="container">
					<NextEvents />
				</div>
				<FooterBanner />
			</div>
		);
	}
}

export default connect()(translate('translations')(Homepage));
