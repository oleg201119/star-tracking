import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import * as eventActions from '../../store/events/actions';
import SimilarEvents from './SimilarEvents';
import Eventpage from './Eventpage';
import '../Homepage/Homepage.css';
import './Eventdetail.css';

class Eventdetail extends Component {
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
		this.props.dispatch(eventActions.fetchEventDetail(this.props.match.params.id, currentlanguage));
		window.scrollTo(0, 0);
	}
	componentWillReceiveProps(nextProps) {
		let nextlanguage = nextProps.i18n.language;
		if (nextProps.i18n.language.length > 2) {
			nextlanguage = nextProps.i18n.language.substring(0, 2);
		}
		if (nextlanguage !== this.state.currentlanguage) {
			this.setState({ currentlanguage: nextlanguage });
			this.props.dispatch(eventActions.fetchEventDetail(this.props.match.params.id, nextlanguage));
		}
	}
	render() {
		return (
			<div className="eventdetail">
				<Eventpage {...this.props} />
				<div className="container friend-event d-none d-md-block">
					<SimilarEvents />
				</div>
			</div>
		);
	}
}
export default connect()(translate('translations')(Eventdetail));
