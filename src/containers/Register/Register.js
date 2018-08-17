import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import Button from 'react-bootstrap-button-loader';
import * as authActions from '../../store/auth/actions';
import * as authSelectors from '../../store/auth/reducer';
import './Register.css';

class Register extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		authToken: PropTypes.string.isRequired,
		registerError: PropTypes.string.isRequired
	};
	constructor() {
		super();
		this.state = {
			accept_policy: false,
			username: '',
			password: '',
			loginstate: '',
			confirmpassword: '',
			currentlanguage: '',
			errorMessage: '',
			showsharemodal: false,
			policystate: false,
			loading: false
		};
		this.changeUsername = this.changeUsername.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
	}
	componentDidMount = () => {
		this.setState({ username: this.props.location.state.selectEmail });
		window.scrollTo(0, 0);
		let currentlanguage = this.props.i18n.language;
		if (this.props.i18n.language.length > 2) {
			currentlanguage = this.props.i18n.language.substring(0, 2);
		}
		this.setState({ currentlanguage: currentlanguage });
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.authToken === 'error') {
			this.props.dispatch(authActions.fetchLoginStateFormat());
			this.setState({ loginstate: 'error', errorMessage: 'Register success! Login fail.', loading: false });
		}
		if (nextProps.registerError !== '') {
			this.props.dispatch(authActions.fetchRegisterStateFormat());
			this.setState({ loginstate: 'error', errorMessage: nextProps.registerError, loading: false });
		}
		if (nextProps.authToken !== '' && nextProps.authToken !== 'error') {
			this.props.history.push('/registerexplanation', { backstate: false });
		}
	}
	changeUsername(e) {
		this.setState({ username: e.target.value });
	}
	changePassword(e) {
		this.setState({ password: e.target.value });
	}
	changeConfirmPassword(e) {
		this.setState({ confirmpassword: e.target.value });
	}
	render() {
		const { t } = this.props;
		return (
			<div className="login register">
				<div className="login-logo">
					<a className="logo-link" href="/">
						<img className="logo" alt="ST-logo" src="/img/login-logo.png" />
					</a>
				</div>

				<div className="login-main">
					<button type="button" className="btn btn-login btn-facebook">
						<i className="fa fa-facebook" aria-hidden="true" />
						<span>{t('Register using Facebook Connect')}</span>
					</button>
					<button type="button" className="btn btn-login btn-twitter">
						<i className="fa fa-twitter" />
						<span>{t('Register using Twitter')}</span>
					</button>
					<div className="login-border">
						<div className="login-border-line" />
						<div className="login-border-text">{t('OR')}</div>
						<div className="login-border-line" />
					</div>
					<div className="login-other">
						<div className="login-other-input">
							<img className="login-other-icon" alt="ST-icon" src="/img/login-icon-username.png" />
							<input
								type="email"
								placeholder={t('Email')}
								value={this.state.username}
								onChange={this.changeUsername}
							/>
						</div>
						<div className="login-other-line" />
						<div className="login-other-input">
							<img
								className="login-other-icon login-other-icon-password"
								alt="ST-icon"
								src="/img/login-icon-password.png"
							/>
							<input
								type="password"
								placeholder={t('Password')}
								value={this.state.password}
								onChange={this.changePassword}
							/>
							{this.state.password !== '' ? (
								<button
									type="button"
									className="btn btn-clear"
									onClick={() => this.setState({ password: '' })}
								>
									x
								</button>
							) : null}
						</div>
						<div className="login-other-line" />
						<div className="login-other-input">
							<img
								className="login-other-icon login-other-icon-password"
								alt="ST-icon"
								src="/img/login-icon-password.png"
							/>
							<input
								type="password"
								placeholder={t('Confirm password')}
								value={this.state.confirmpassword}
								onChange={this.changeConfirmPassword}
							/>
							{this.state.confirmpassword !== '' ? (
								<button
									type="button"
									className="btn btn-clear"
									onClick={() => this.setState({ confirmpassword: '' })}
								>
									x
								</button>
							) : null}
						</div>
					</div>
					{this.state.policystate ? (
						<div className="error-text">
							<span>{t('Accept the terms of use and privacy policy')}</span>
						</div>
					) : (
						<div
							className={`error-text ${this.state.loginstate !== 'error' ? 'no-error' : null}`}
							onClick={() => {
								this.setState({ showsharemodal: true });
							}}
						>
							{this.state.loginstate === 'error' ? (
								<span>{this.state.errorMessage}</span>
							) : (
								<span>{t('Check out the email & password rules')}</span>
							)}
						</div>
					)}
					<div className="stay-signin">
						<img
							className="stay-signin-check"
							alt="ST-icon"
							src={this.state.accept_policy ? '/img/check-check.png' : '/img/check-uncheck.png'}
							onClick={() =>
								this.state.accept_policy
									? this.setState({ accept_policy: false })
									: this.setState({ accept_policy: true })}
						/>
						<Link to="/policy">
							<span className="policy-text">{t('I accept the terms of use and the privacy policy')}</span>
						</Link>
					</div>
					<Button
						loading={this.state.loading}
						className="btn btn-red signin"
						onClick={() => {
							if (this.state.accept_policy) {
								this.setState({ loginstate: '', policystate: false, loading: true });
								this.props.dispatch(
									authActions.fetchRegisterAuth(
										this.state.username,
										this.state.password,
										this.state.confirmpassword,
										this.state.currentlanguage
									)
								);
							} else {
								this.setState({ policystate: true });
							}
						}}
					>
						{t('Register')}
					</Button>
					<div className="create-forgot">
						<span
							className="create-forgot-text sign-in"
							onClick={() => {
								this.props.history.go(-1);
							}}
						>
							{t('Already have an account?')}&nbsp;
						</span>
						<span
							className="create-forgot-text sign-in"
							onClick={() => {
								this.props.history.go(-1);
							}}
						>
							{t('Sign in')}
						</span>
					</div>
				</div>
				<div className="close-cross">
					<i
						className="material-icons"
						onClick={() => {
							this.props.history.go(-1);
						}}
					>
						clear
					</i>
				</div>
				<ReactModal
					isOpen={this.state.showsharemodal}
					className="calendar-modal rule-modal"
					onRequestClose={() => {
						this.setState({ showsharemodal: false });
					}}
					shouldCloseOnOverlayClick={true}
				>
					<span>{t('password-rule')}</span>
					<span>{t('email-rule')}</span>
					<div
						onClick={() => {
							this.setState({ showsharemodal: false });
						}}
					>
						<span>OK</span>
					</div>
				</ReactModal>
			</div>
		);
	}
}
function mapStateToProps(state) {
	const authToken = authSelectors.getLoginAuth(state);
	const registerError = authSelectors.getRegisterError(state);
	return {
		authToken,
		registerError
	};
}

export default connect(mapStateToProps)(translate('translations')(Register));
