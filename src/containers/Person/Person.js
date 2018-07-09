import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { translate } from 'react-i18next';
import Footer from '../Footer/Footer';
import * as eventActions from '../../store/events/actions';
import Tabbar from '../Tabbar/Tabbar';
import * as authSelectors from '../../store/auth/reducer';
import '../Homeperson/Homeperson.css';
import './Person.css';

class Person extends Component {
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
		var self = this;
		window.onpopstate = function() {
			if (self.props.history.location.pathname === '/login') {
				self.props.history.push('/person');
			}
		};
		let currentlanguage = this.props.i18n.language;
		if (this.props.i18n.language.length > 2) {
			currentlanguage = this.props.i18n.language.substring(0, 2);
		}
		this.setState({ currentlanguage: currentlanguage });
		window.scrollTo(0, 0);
		this.props.dispatch(eventActions.fetchMySelectedEvents(currentlanguage));
		this.props.dispatch(eventActions.fetchFriendEvents(currentlanguage));
		this.props.dispatch(eventActions.fetchRegisteredEvents(currentlanguage));
		this.props.dispatch(eventActions.fetchMyResultsEvents(currentlanguage));
		this.props.dispatch(eventActions.fetchFavoriteEvents(currentlanguage));
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
			this.props.dispatch(eventActions.fetchRegisteredEvents(nextlanguage));
			this.props.dispatch(eventActions.fetchMyResultsEvents(nextlanguage));
			this.props.dispatch(eventActions.fetchFavoriteEvents(nextlanguage));
		}
	}
	render() {
		const { authToken } = this.props;
		const registered = this.props.location.state !== undefined ? this.props.location.state.registered : '';
		if (authToken === '' || authToken === 'error') return <Redirect to="/login" />;
		return (
			<div className="home-person">
				<div className="person-tabbar">
					<Tabbar {...{ registered: registered }} />
				</div>
				<Footer />
			</div>
		);
	}
}
function mapStateToProps(state) {
	const authToken = authSelectors.getLoginAuth(state);

	return {
		authToken
	};
}
export default connect(mapStateToProps)(translate('translations')(Person));
