import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import ProgressButton from '../Contact/ProgressButton';
import * as generalActions from '../../store/general/actions';
import * as generalSelectors from '../../store/general/reducer';
import Withwork from '../Footer/Withwork';
import './Newevent.css';

class Newevent extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired
	};
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			organization: '',
			type: '',
			city: '',
			extraInfo: '',
			buttonState: '',
			startDate: moment()
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	componentWillReceiveProps(nextProps) {
		const { requestEvent } = nextProps;
		if (requestEvent === true) {
			this.setState({ buttonState: 'success' });
			this.props.dispatch(generalActions.fetchContactFormat());
		}
		if (requestEvent === false) {
			this.setState({ buttonState: 'error' });
		}
	}
	handleChange(date) {
		this.setState({
			startDate: date
		});
	}
	handleClick() {
		this.setState({ buttonState: 'loading' });
		// make asynchronous call
		if (
			this.state.name !== '' &&
			this.state.email !== '' &&
			this.state.organization !== '' &&
			this.state.type !== '' &&
			this.state.city !== '' &&
			this.state.extraInfo !== '' &&
			this.state.startDate !== ''
		) {
			this.props.dispatch(
				generalActions.fetchRequestEvent(
					this.state.name,
					this.state.email,
					this.state.organization,
					this.state.type,
					this.state.city,
					this.state.extraInfo,
					this.state.startDate
				)
			);
		} else {
			setTimeout(() => {
				this.setState({ buttonState: 'error' });
			}, 2000);
		}
	}
	render() {
		const { t } = this.props;

		return (
			<div className="about">
				<div className="header-banner newevent-banner">
					<div className="glass-section">
						<div className="container">
							<div className="about-banner-text">
								<span className="slogan">
									{t('Organiseer je zelf een event en wil je professionele ondersteuning?')}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-10 col-xl-8 about-body-container">
							<div className="about-body-topic">
								<span>
									{t(
										'Vul dit formulier in en vertel ons wat je van plan bent. We contacteren je zo snel mogelijk en bespreken welke oplossingen het best bij jouw event passen.'
									)}
								</span>
							</div>
							<div className="contact-body">
								<div>{t('Jouw naam')}:</div>
								<input
									type="text"
									className="contact-body-input"
									value={this.state.name}
									onChange={(e) => this.setState({ name: e.target.value })}
								/>
								<div>{t('Jouw organisatie')}:</div>
								<input
									type="text"
									className="contact-body-input"
									value={this.state.organization}
									onChange={(e) => this.setState({ organization: e.target.value })}
								/>
								<div>{t('Jouw email adress')}:</div>
								<input
									type="text"
									className="contact-body-input"
									value={this.state.email}
									onChange={(e) => this.setState({ email: e.target.value })}
								/>
								<div>{t('Type sport')}:</div>
								<input
									type="text"
									className="contact-body-input"
									value={this.state.type}
									onChange={(e) => this.setState({ type: e.target.value })}
								/>
								<div>{t('Stad')}:</div>
								<input
									type="text"
									className="contact-body-input"
									value={this.state.city}
									onChange={(e) => this.setState({ city: e.target.value })}
								/>
								<div>{t('Datum')}:</div>
								<DatePicker selected={this.state.startDate} onChange={this.handleChange} />
								<div>{t('Meer informatie')}:</div>
								<textarea
									className="contact-body-input contact-body-multiinput"
									value={this.state.extraInfo}
									onChange={(e) => this.setState({ extraInfo: e.target.value })}
								/>
								<div className="sent-state">
									<ProgressButton
										onClick={this.handleClick}
										state={this.state.buttonState}
										className="btn-contact-send"
									>
										{this.state.buttonState === 'success' ? 'Sent successfully' : t('Verstuur')}
									</ProgressButton>
									<div className="error-text">
										{this.state.buttonState === 'error' ? (
											<span>Your new event could not be sent. Please try again!</span>
										) : null}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Withwork />
			</div>
		);
	}
}
function mapStateToProps(state) {
	const requestEvent = generalSelectors.getRequestEvent(state);
	return {
		requestEvent
	};
}
export default connect(mapStateToProps)(translate('translations')(Newevent));
