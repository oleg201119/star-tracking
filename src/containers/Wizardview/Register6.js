import React, { Component } from 'react';
import { translate } from 'react-i18next';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import Switch from 'react-switch';
import moment from 'moment';
import countries from 'i18n-iso-countries';
import AuthService from '../../services/auth';
import './Register6.css';

class Register6 extends Component {
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
			country: '',
			mobile: '',
			fixedline: '',
			facebook: '',
			twitter: '',
			emailcheck: false,
			startDate: moment(),
			currentlanguage: '',
			countryarray: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.updateselectgender = this.updateselectgender.bind(this);
		this.handleEmailCheckChange = this.handleEmailCheckChange.bind(this);
	}
	componentDidMount() {
		countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
		countries.registerLocale(require('i18n-iso-countries/langs/fr.json'));
		countries.registerLocale(require('i18n-iso-countries/langs/nl.json'));
		let currentlanguage = this.props.i18n.language;
		if (this.props.i18n.language.length > 2) {
			currentlanguage = this.props.i18n.language.substring(0, 2);
		}
		const defaultarray = countries.getNames(currentlanguage);
		const temparray = Object.entries(defaultarray).map((temp) => {
			return { value: temp[0], label: temp[1] };
		});
		this.setState({ currentlanguage: currentlanguage, countryarray: temparray });
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
									<div className="field-topic">Email</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.email}
										onChange={(e) => this.setState({ email: e.target.value })}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">Password</div>
									<input
										type="password"
										className="contact-body-input"
										value={this.state.pwd}
										onChange={(e) => this.setState({ pwd: e.target.value })}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('Birthday')}</div>
									<DatePicker selected={this.state.startDate} onChange={this.handleChange} />
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('Gender')}</div>
									<Select
										ref={(ref) => {
											this.select = ref;
										}}
										options={[ { value: 'Man', label: 'Man' }, { value: 'Woman', label: 'Woman' } ]}
										simpleValue
										placeholder="Select gender"
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
								<span>{t('Billing Information')}</span>
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
									<button className="btn btn-red btn-register-next">
										{t('Save your preferences')}
									</button>
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
export default translate('translations')(Register6);
