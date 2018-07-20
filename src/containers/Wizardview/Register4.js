import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'react-bootstrap-button-loader';
import * as registerActions from '../../store/register/actions';
import * as registerSelectors from '../../store/register/reducer';
import './Register4.css';

class Register4 extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired
	};
	constructor() {
		super();
		this.state = {
			sport1: false,
			sport2: false,
			sport3: false,
			sport4: false,
			sport5: false,
			sport6: false,
			location1: false,
			location2: false,
			location3: false,
			PreferredEventTypes: [],
			LocationPreference: 0,
			radius: 15,
			buttonstate: '',
			loading: false
		};
		this.handleClick = this.handleClick.bind(this);
		this.selectsport = this.selectsport.bind(this);
		this.selectlocation = this.selectlocation.bind(this);
		this.updateradius = this.updateradius.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.registerresult === true) {
			this.props.dispatch(registerActions.formatRegister4());
			this.setState({ buttonstate: 'success', loading: false });
			setTimeout(() => {
				this.setState({ buttonstate: 'next' });
			}, 2000);
		} else if (nextProps.registerresult === false) {
			this.props.dispatch(registerActions.formatRegister4());
			this.setState({ buttonstate: '', loading: false });
		}
	}
	selectsport(i, event) {
		const temp = !this.state[`sport${i}`];
		let eventarray = this.state.PreferredEventTypes;
		if (temp) eventarray.push(event);
		else {
			const index = eventarray.indexOf(event);
			eventarray.splice(index, 1);
		}
		this.setState({ [`sport${i}`]: temp, PreferredEventTypes: eventarray });
	}
	selectlocation(i) {
		const temp = !this.state[`location${i}`];
		for (let j = 1; j <= 3; j++) {
			if (j === i) this.setState({ [`location${j}`]: temp, LocationPreference: i });
			else this.setState({ [`location${j}`]: false });
		}
	}
	handleClick() {
		if (this.state.buttonstate === 'next') {
			this.props.nextStep();
		} else if (this.state.buttonstate === '') {
			this.setState({ buttonstate: 'loading', loading: true });
			this.props.dispatch(
				registerActions.fetchRegister4(this.state.mobile, this.state.LocationPreference, this.state.radius)
			);
		}
	}
	updateradius(e) {
		this.setState({ radius: e });
	}
	render() {
		const { t } = this.props;
		let buttontext = '';
		if (this.state.buttonstate === 'success') {
			buttontext = t('Saved !');
		} else if (this.state.buttonstate === 'next') {
			buttontext = t('Next') + ' (5/5)';
		} else {
			buttontext = t('Save your preferences');
		}
		return (
			<div>
				<div className="header-banner mobile-person-header">
					<div className="glass-section">
						<div className="slogan-section">
							<div className="container">
								<span className="slogan">{t('Register')}</span>
							</div>
						</div>
					</div>
				</div>
				<div className="container register-wizard">
					<div className="row">
						<div className="col-12 col-md-10 col-xl-8 about-body-container">
							<div className="register-wizard-state">
								<span>{t('Add more info')}</span>
								<span className="register-step">4 / 5</span>
							</div>
							<div className="about-body-topic">
								<span>{t('YOUR SPORT PREFERENCES')}</span>
							</div>
							<div className="select-body">
								<div className="register-wizard-select">
									<div
										className={`register-wizard-select-item ${this.state.sport1
											? 'selected'
											: null}`}
										onClick={() => this.selectsport(1, 'Running')}
									>
										<img
											src={this.state.sport1 ? '/img/register-done.png' : '/img/register-do.png'}
											alt="Running"
										/>
										<span>{t('Running')}</span>
									</div>
									<div
										className={`register-wizard-select-item ${this.state.sport2
											? 'selected'
											: null}`}
										onClick={() => this.selectsport(2, 'Roadbike')}
									>
										<img
											src={this.state.sport2 ? '/img/register-done.png' : '/img/register-do.png'}
											alt="Roadbike"
										/>
										<span>{t('Roadbike')}</span>
									</div>
									<div
										className={`register-wizard-select-item ${this.state.sport3
											? 'selected'
											: null}`}
										onClick={() => this.selectsport(3, 'Multisport')}
									>
										<img
											src={this.state.sport3 ? '/img/register-done.png' : '/img/register-do.png'}
											alt="Multisport"
										/>
										<span>{t('MultiSport')}</span>
									</div>
									<div
										className={`register-wizard-select-item ${this.state.sport4
											? 'selected'
											: null}`}
										onClick={() => this.selectsport(4, 'TrialRun')}
									>
										<img
											src={this.state.sport4 ? '/img/register-done.png' : '/img/register-do.png'}
											alt="TrialRun"
										/>
										<span>{t('TrialRun')}</span>
									</div>
									<div
										className={`register-wizard-select-item ${this.state.sport5
											? 'selected'
											: null}`}
										onClick={() => this.selectsport(5, 'Mountainbike')}
									>
										<img
											src={this.state.sport5 ? '/img/register-done.png' : '/img/register-do.png'}
											alt="Mountainbike"
										/>
										<span>{t('Mountainbike')}</span>
									</div>
									<div
										className={`register-wizard-select-item ${this.state.sport6
											? 'selected'
											: null}`}
										onClick={() => this.selectsport(6, 'Other')}
									>
										<img
											src={this.state.sport6 ? '/img/register-done.png' : '/img/register-do.png'}
											alt="Other"
										/>
										<span>{t('Other')}</span>
									</div>
								</div>
							</div>
							<div className="about-body-topic">
								<span>{t('YOUR LOCATION PREFERENCES')}</span>
							</div>
							<div className="select-body">
								<div className="register-wizard-select">
									<div
										className={`register-wizard-select-item ${this.state.location1
											? 'selected'
											: null}`}
										onClick={() => this.selectlocation(1)}
									>
										<img
											src={
												this.state.location1 ? '/img/register-done.png' : '/img/register-do.png'
											}
											alt="Marathons"
										/>
										<div className="radius-select">
											{t('In a radius of')}&nbsp;&nbsp;
											<div className="select-radius" onClick={(e) => e.stopPropagation()}>
												<Select
													ref={(ref) => {
														this.select = ref;
													}}
													options={[
														{ value: 15, label: 15 },
														{ value: 25, label: 25 },
														{ value: 50, label: 50 },
														{ value: 100, label: 100 },
														{ value: 150, label: 150 }
													]}
													simpleValue
													value={this.state.radius}
													onChange={this.updateradius}
													className="select-radius"
													searchable={false}
													clearable={false}
												/>
											</div>
											&nbsp;&nbsp;km
										</div>
									</div>
									<div
										className={`register-wizard-select-item ${this.state.location2
											? 'selected'
											: null}`}
										onClick={() => this.selectlocation(2)}
									>
										<img
											src={
												this.state.location2 ? '/img/register-done.png' : '/img/register-do.png'
											}
											alt="Triathlons"
										/>
										<span>{t('National')}</span>
									</div>
									<div
										className={`register-wizard-select-item ${this.state.location3
											? 'selected'
											: null}`}
										onClick={() => this.selectlocation(3)}
									>
										<img
											src={
												this.state.location3 ? '/img/register-done.png' : '/img/register-do.png'
											}
											alt="Baanfietsen"
										/>
										<span>{t('International')}</span>
									</div>
								</div>
							</div>
							<div className="contact-body">
								<div className="sent-state">
									<Button
										loading={this.state.loading}
										onClick={this.handleClick}
										className={`btn btn-red btn-register-next ${this.state.buttonstate}`}
									>
										{this.state.buttonstate === 'success' ? (
											<img
												className="button-checkmark"
												alt="checkmark"
												src="/img/checkmark.png"
											/>
										) : null}
										{buttontext}
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	const registerresult = registerSelectors.getRegister4(state);

	return {
		registerresult
	};
}
export default translate('translations')(connect(mapStateToProps)(Register4));
