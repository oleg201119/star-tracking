import React, { Component } from 'react';
import { translate } from 'react-i18next';
import countries from 'i18n-iso-countries';
import Select from 'react-select';
import './Register2.css';

class Register2 extends Component {
	constructor() {
		super();
		this.state = {
			street: '',
			postcode: '',
			no: '',
			township: '',
			country: 'BE',
			currentlanguage: '',
			countryarray: []
		};
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
	}
	render() {
		const { t } = this.props;
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
									<button
										onClick={() => {
											this.props.nextStep();
										}}
										className="btn btn-red btn-register-next"
									>
										{t('Save your preferences')}
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
export default translate('translations')(Register2);
