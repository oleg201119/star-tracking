import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { translate } from 'react-i18next';
import Tabbar from '../Tabbar/Tabbar';
import * as authSelectors from '../../store/auth/reducer';
import '../Homepage/Homepage.css';
import './Person.css';

class Person extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired
	};
	componentDidMount() {
		var self = this;
		window.onpopstate = function() {
			if (self.props.history.location.pathname === '/login') {
				self.props.history.push('/person');
			}
			if (self.props.history.location.pathname === '/registerexplanation') {
				self.props.history.push('/person');
			}
		};
		window.scrollTo(0, 0);
	}
	render() {
		const { authToken } = this.props;
		if (authToken === '' || authToken === 'error') return <Redirect to="/login" />;
		return (
			<div className="home-person">
				<div className="person-tabbar">
					<Tabbar {...this.props} />
				</div>
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
