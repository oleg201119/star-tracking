import React, { Component } from 'react';
import { translate } from 'react-i18next';
import countries from 'i18n-iso-countries';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'react-bootstrap-button-loader';
import * as registerActions from '../../store/register/actions';
import * as registerSelectors from '../../store/register/reducer';
import './Register2.css';

class Register2 extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired
	};
	constructor() {
		super();
		this.state = {
			street: '',
			postcode: '',
			no: '',
			township: '',
			country: 'BE',
			currentlanguage: '',
			countryarray: [],
			buttonstate: '',
			loading: false
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
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
		if (nextProps.registerresult === true) {
			this.props.dispatch(registerActions.formatRegister2());
			this.setState({ buttonstate: 'success', loading: false });
			setTimeout(() => {
				this.setState({ buttonstate: 'next' });
			}, 2000);
		} else if (nextProps.registerresult === false) {
			this.props.dispatch(registerActions.formatRegister2());
			this.setState({ buttonstate: '', loading: false });
		}
	}
	handleClick() {
		if (this.state.buttonstate === 'next') {
			this.props.nextStep();
		} else if (this.state.buttonstate === '') {
			this.setState({ buttonstate: 'loading', loading: true });
			this.props.dispatch(
				registerActions.fetchRegister2(
					this.state.street,
					this.state.no,
					this.state.postcode,
					this.state.township,
					this.state.country
				)
			);
		}
	}
	render() {
		const { t } = this.props;
		let buttontext = '';
		if (this.state.buttonstate === 'success') {
			buttontext = t('Saved !');
		} else if (this.state.buttonstate === 'next') {
			buttontext = t('Next') + ' (3/5)';
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
								<span className="register-step">2 / 5</span>
							</div>
							<div className="about-body-topic">
								<span>{t('Address details (for your tickets / race numbers)')}</span>
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
	const registerresult = registerSelectors.getRegister2(state);

	return {
		registerresult
	};
}
export default translate('translations')(connect(mapStateToProps)(Register2));
