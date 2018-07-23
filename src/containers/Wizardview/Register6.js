import React, { Component } from 'react';
import { translate } from 'react-i18next';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import Switch from 'react-switch';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'react-bootstrap-button-loader';
import * as registerActions from '../../store/register/actions';
import * as registerSelectors from '../../store/register/reducer';
import countries from 'i18n-iso-countries';
import AuthService from '../../services/auth';
import './Register6.css';

class Register6 extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired
	};
	constructor() {
		super();
		this.state = {
			firstname: '',
			lastname: '',
			language: '',
			gender: '',
			email: '',
			pwd: '',
			street: '',
			postcode: '',
			no: '',
			township: '',
			country: 'BE',
			mobile: '',
			fixedline: '',
			friendphone: '',
			loading: false,
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
			facebook: '',
			twitter: '',
			emailcheck: false,
			startDate: null,
			currentlanguage: '',
			countryarray: [],
			buttonstate: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.updateselectgender = this.updateselectgender.bind(this);
		this.handleEmailCheckChange = this.handleEmailCheckChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.selectsport = this.selectsport.bind(this);
		this.selectlocation = this.selectlocation.bind(this);
		this.updateradius = this.updateradius.bind(this);
	}
	componentDidMount() {
		countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
		countries.registerLocale(require('i18n-iso-countries/langs/fr.json'));
		countries.registerLocale(require('i18n-iso-countries/langs/nl.json'));
		this.props.dispatch(registerActions.fetchGetProfile());
		let currentlanguage = this.props.i18n.language;
		if (this.props.i18n.language.length > 2) {
			currentlanguage = this.props.i18n.language.substring(0, 2);
		}
		const defaultarray = countries.getNames(currentlanguage);
		const temparray = Object.entries(defaultarray).map((temp) => {
			return { value: temp[0], label: temp[1] };
		});
		this.setState({
			currentlanguage: currentlanguage,
			countryarray: temparray,
			language: currentlanguage
		});
	}
	componentWillReceiveProps(nextProps) {
		let nextlanguage = nextProps.i18n.language;
		if (nextProps.i18n.language.length > 2) {
			nextlanguage = nextProps.i18n.language.substring(0, 2);
		}
		if (nextlanguage !== this.state.currentlanguage) {
			const defaultarray = countries.getNames(nextlanguage);
			const temparray = Object.entries(defaultarray).map((temp) => {
				return { value: temp[0], label: temp[1] };
			});
			this.setState({ currentlanguage: nextlanguage, countryarray: temparray });
		}
		if (nextProps.registerresult === true) {
			this.props.dispatch(registerActions.formatRegister());
			this.setState({ buttonstate: 'success', loading: false });
			setTimeout(() => {
				this.setState({ buttonstate: '' });
			}, 2000);
		} else if (nextProps.registerresult === false) {
			this.props.dispatch(registerActions.formatRegister());
			this.setState({ buttonstate: '', loading: false });
		}
		if (nextProps.profileFlag !== this.props.profileFlag) {
			if (nextProps.profileFlag === false && nextProps.profile.length !== 0) {
				const profile = nextProps.profile;
				console.log(profile);
				this.setState({
					firstname: profile.FirstName,
					lastname: profile.LastName,
					startDate: moment(profile.DateOfBirth, 'DD/MM/YYYY'),
					gender: profile.Gender,
					language: profile.Language,
					street: profile.Street,
					no: profile.Number,
					postcode: profile.ZipCode,
					township: profile.City,
					country: profile.Country,
					mobile: profile.MobilePhone,
					fixedline: profile.FixPhone,
					friendphone: profile.FriendPhone,
					radius: profile.RangeInKm
				});
				if (profile.LocationPreference !== 0) {
					this.setState({ [`location${profile.LocationPreference}`]: true });
				}
			}
		}
	}
	handleClick() {
		if (this.state.buttonstate === '') {
			this.setState({ buttonstate: 'loading', loading: true });
			this.props.dispatch(
				registerActions.fetchRegister(
					this.state.firstname,
					this.state.lastname,
					moment(this.state.startDate).format('DD/MM/YYYY'),
					this.state.gender,
					this.state.language,
					this.state.street,
					this.state.no,
					this.state.postcode,
					this.state.township,
					this.state.country,
					this.state.mobile,
					this.state.fixedline
				)
			);
		}
	}
	handleChange(date) {
		this.setState({
			startDate: date
		});
	}
	updateselectgender(e) {
		this.setState({ gender: e });
	}
	handleEmailCheckChange() {
		this.setState({ emailcheck: !this.state.emailcheck });
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
	updateradius(e) {
		this.setState({ radius: e });
	}
	logout() {
		var self = this;
		AuthService.Logout().then(function(value) {
			if (value === 'success') {
				self.props.history.push('/', { tokenstate: false });
			}
		});
	}
	render() {
		const { t } = this.props;
		let buttontext = '';
		if (this.state.buttonstate === 'success') {
			buttontext = t('Saved !');
		} else {
			buttontext = t('Save your preferences');
		}
		return (
			<div>
				<div className="header-banner mobile-person-header">
					<div className="glass-section">
						<div className="slogan-section">
							<div className="container">
								<span className="slogan">{t('My account')}</span>
							</div>
						</div>
					</div>
				</div>
				<div className="container register-wizard">
					<div className="row">
						<div className="col-12 col-md-10 col-xl-8 about-body-container">
							<div className="register-wizard-state">
								<span>{t('Summary')}</span>
							</div>
							<div className="about-body-topic">
								<span>{t('General')}</span>
							</div>
							<div className="contact-body">
								<div className="contact-body-field">
									<div className="field-topic">{t('First Name')}</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.firstname}
										onChange={(e) => this.setState({ firstname: e.target.value })}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('Last Name')}</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.lastname}
										onChange={(e) => this.setState({ lastname: e.target.value })}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('Email')}</div>
									<input
										type="email"
										className="contact-body-input"
										value={this.state.email}
										onChange={(e) => this.setState({ email: e.target.value })}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('Password')}</div>
									<input
										type="password"
										className="contact-body-input"
										value={this.state.pwd}
										onChange={(e) => this.setState({ pwd: e.target.value })}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('Birthday')}</div>
									<DatePicker
										openToDate={moment('1985-01-01')}
										selected={this.state.startDate}
										dateFormat="DD/MM/YYYY"
										onChange={this.handleChange}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('Gender')}</div>
									<Select
										ref={(ref) => {
											this.select = ref;
										}}
										options={[
											{ value: 'Man', label: t('Man') },
											{ value: 'Woman', label: t('Woman') }
										]}
										simpleValue
										placeholder={t('Select gender')}
										value={this.state.gender}
										onChange={this.updateselectgender}
										className="search-event"
										searchable={false}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('Language')}</div>
									<Select
										options={[
											{ value: 'nl', label: 'nl' },
											{ value: 'fr', label: 'fr' },
											{ value: 'en', label: 'en' }
										]}
										simpleValue
										placeholder="Select language"
										value={this.state.language}
										onChange={(e) => {
											this.setState({ language: e });
										}}
										className="search-event"
										searchable={false}
									/>
								</div>
							</div>
							<div className="about-body-topic">
								<span>{t('Address')}</span>
							</div>
							<div className="contact-body">
								<div className="contact-body-field">
									<div className="field-topic">{t('Street')}</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.street}
										onChange={(e) => this.setState({ street: e.target.value })}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('Number')}</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.no}
										onChange={(e) => this.setState({ no: e.target.value })}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('ZipCode')}</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.postcode}
										onChange={(e) => this.setState({ postcode: e.target.value })}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('City')}</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.township}
										onChange={(e) => this.setState({ township: e.target.value })}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('Country')}</div>
									<Select
										options={this.state.countryarray}
										simpleValue
										// placeholder="Select language"
										value={this.state.country}
										onChange={(e) => {
											this.setState({ country: e });
										}}
										className="search-event"
									/>
								</div>
							</div>
							<div className="about-body-topic">
								<span>{t('Contact')}</span>
							</div>
							<div className="contact-body">
								<div className="contact-body-field">
									<div className="field-topic">{t('Mobile Phone')}</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.mobile}
										onChange={(e) => this.setState({ mobile: e.target.value })}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('Fix Phone')}</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.fixedline}
										onChange={(e) => this.setState({ fixedline: e.target.value })}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('Number (family member / friend)')}</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.friendphone}
										onChange={(e) => this.setState({ friendphone: e.target.value })}
									/>
								</div>
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
							<div className="about-body-topic">
								<span>{t('Social')}</span>
							</div>
							<div className="contact-body">
								<div className="register-btn">
									<button type="button" className="btn btn-facebook">
										<i className="fa fa-facebook" aria-hidden="true" />
										<span>{t('Connect with your friends')}</span>
									</button>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">Facebook</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.facebook}
										onChange={(e) => this.setState({ facebook: e.target.value })}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">Twitter</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.twitter}
										onChange={(e) => this.setState({ twitter: e.target.value })}
									/>
								</div>
							</div>
							<div className="about-body-topic">
								<span>{t('Notifications')}</span>
							</div>
							<div className="contact-body">
								<div className="register-notification contact-body-field">
									<span className="field-topic">Email {t('Notifications')}</span>
									<div className="register-switch">
										<Switch
											checked={this.state.emailcheck}
											onChange={this.handleEmailCheckChange}
											onColor="#86d3ff"
											onHandleColor="#43445B"
											handleDiameter={30}
											uncheckedIcon={false}
											checkedIcon={false}
											boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
											activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
											height={20}
											width={48}
											className="react-switch"
											id="material-switch"
										/>
									</div>
								</div>
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
								<div className="sent-state">
									<button
										onClick={() => {
											this.logout();
										}}
										className="btn btn-red btn-register-next"
									>
										LOG OUT
									</button>
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
	const profile = registerSelectors.getProfile(state);
	const registerresult = registerSelectors.getRegister(state);
	const profileFlag = registerSelectors.getProfileFlag(state);

	return {
		profile,
		registerresult,
		profileFlag
	};
}
export default translate('translations')(connect(mapStateToProps)(Register6));
