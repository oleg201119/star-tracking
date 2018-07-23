import React, { Component } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import moment from 'moment';
import { connect } from 'react-redux';
import Button from 'react-bootstrap-button-loader';
import * as registerActions from '../../store/register/actions';
import * as registerSelectors from '../../store/register/reducer';
import './Register1.css';

class Register1 extends Component {
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
			birthday: null,
			buttonstate: '',
			loading: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.updateselectgender = this.updateselectgender.bind(this);
		this.updateselectlanguage = this.updateselectlanguage.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		let language = this.props.i18n.language;
		if (this.props.i18n.language.length > 2) {
			language = this.props.i18n.language.substring(0, 2);
		}
		this.setState({ language });
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.registerresult === true) {
			this.props.dispatch(registerActions.formatRegister1());
			this.setState({ buttonstate: 'success', loading: false });
			setTimeout(() => {
				this.setState({ buttonstate: 'next' });
			}, 2000);
		} else if (nextProps.registerresult === false) {
			this.props.dispatch(registerActions.formatRegister1());
			this.setState({ buttonstate: '', loading: false });
		}
	}
	handleChange(date) {
		this.setState({
			birthday: date
		});
	}
	updateselectgender(e) {
		this.setState({ gender: e });
	}
	updateselectlanguage(e) {
		this.setState({ language: e });
	}
	handleClick() {
		if (this.state.buttonstate === 'next') {
			this.props.nextStep();
		} else if (this.state.buttonstate === '') {
			this.setState({ buttonstate: 'loading', loading: true });
			this.props.dispatch(
				registerActions.fetchRegister1(
					this.state.firstname,
					this.state.lastname,
					moment(this.state.birthday).format('DD/MM/YYYY'),
					this.state.gender,
					this.state.language
				)
			);
		}
	}
	render() {
		const { t } = this.props;
		const mobileregister =
			this.props.location.state !== undefined && this.props.location.state.mobileregister ? true : false;
		let buttontext = '';
		if (this.state.buttonstate === 'success') {
			buttontext = t('Saved !');
		} else if (this.state.buttonstate === 'next') {
			buttontext = t('Next') + ' (2/5)';
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
							{mobileregister ? (
								<div className="welcome-register">
									<span>
										{t('Thank you for registering!')} {t('Let’s quickly fine tune your account')}
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
									<DatePicker
										openToDate={moment('1985-01-01')}
										selected={this.state.birthday}
										dateFormat="DD/MM/YYYY"
										onChange={this.handleChange}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">{t('Gender')}</div>
									<Select
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
										onChange={this.updateselectlanguage}
										className="search-event"
										searchable={false}
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
	const registerresult = registerSelectors.getRegister1(state);

	return {
		registerresult
	};
}
export default translate('translations')(connect(mapStateToProps)(Register1));
