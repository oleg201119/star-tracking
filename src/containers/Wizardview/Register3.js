import React, { Component } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'react-bootstrap-button-loader';
import * as registerActions from '../../store/register/actions';
import * as registerSelectors from '../../store/register/reducer';
import './Register3.css';

class Register3 extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired
	};
	constructor() {
		super();
		this.state = {
			mobile: '',
			number: '',
			fixedline: '',
			buttonstate: '',
			loading: false
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.registerresult === true) {
			this.props.dispatch(registerActions.formatRegister3());
			this.setState({ buttonstate: 'success', loading: false });
			setTimeout(() => {
				this.setState({ buttonstate: 'next' });
			}, 2000);
		} else if (nextProps.registerresult === false) {
			this.props.dispatch(registerActions.formatRegister3());
			this.setState({ buttonstate: '', loading: false });
		}
	}
	handleClick() {
		if (this.state.buttonstate === 'next') {
			this.props.nextStep();
		} else if (this.state.buttonstate === '') {
			this.setState({ buttonstate: 'loading', loading: true });
			this.props.dispatch(
				registerActions.fetchRegister3(this.state.mobile, this.state.fixedline, this.state.number)
			);
		}
	}
	render() {
		const { t } = this.props;
		let buttontext = '';
		if (this.state.buttonstate === 'success') {
			buttontext = t('Saved !');
		} else if (this.state.buttonstate === 'next') {
			buttontext = t('Next') + ' (4/5)';
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
								<span className="register-step">3 / 5</span>
							</div>
							<div className="about-body-topic">
								<span className="field-topic">{t('CONTACT (FOR PROBLEMS)')}</span>
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
								<span>{t('CONTACT IN CASE OF EMERGENCY (during a race)')}</span>
							</div>
							<div className="contact-body">
								<div className="contact-body-field">
									<div className="field-topic">{t('Number (family member / friend)')}</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.number}
										onChange={(e) => this.setState({ number: e.target.value })}
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
	const registerresult = registerSelectors.getRegister3(state);

	return {
		registerresult
	};
}
export default translate('translations')(connect(mapStateToProps)(Register3));
