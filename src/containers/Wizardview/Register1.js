import React, { Component } from 'react';
import { translate } from 'react-i18next';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import moment from 'moment';
import './Register1.css';

class Register1 extends Component {
	constructor() {
		super();
		this.state = {
			firstname: '',
			lastname: '',
			language: '',
			gender: '',
			startDate: moment()
		};
		this.handleChange = this.handleChange.bind(this);
		this.updateselectgender = this.updateselectgender.bind(this);
		this.updateselectlanguage = this.updateselectlanguage.bind(this);
	}
	componentDidMount() {
		let language = this.props.i18n.language;
		if (this.props.i18n.language.length > 2) {
			language = this.props.i18n.language.substring(0, 2);
		}
		this.setState({ language });
	}
	handleChange(date) {
		this.setState({
			startDate: date
		});
	}
	updateselectgender(e) {
		this.setState({ gender: e });
	}
	updateselectlanguage(e) {
		this.setState({ language: e });
	}
	render() {
		const { t } = this.props;
		const mobileregister =
			this.props.location.state !== undefined && this.props.location.state.mobileregister ? true : false;
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
							{mobileregister ? (
								<div className="welcome-register">
									<span>
										{t('Thank you for registering!')} {t("Let's quickly fine tune your account")}
									</span>
								</div>
							) : null}
							<div className="register-wizard-state">
								<span>{t('Add more info')}</span>
								<span className="register-step">1 / 5</span>
							</div>
							{/* <div className="register-avatar">
              <img src="/img/register-avatar" alt="avatar" />
            </div> */}
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
									<div className="field-topic">{t('Birthday')}</div>
									<DatePicker selected={this.state.startDate} onChange={this.handleChange} />
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('Gender')}</div>
									<Select
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
										onChange={this.updateselectlanguage}
										className="search-event"
										searchable={false}
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
export default translate('translations')(Register1);
