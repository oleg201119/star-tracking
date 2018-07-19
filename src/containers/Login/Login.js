import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import * as authActions from '../../store/auth/actions';
import * as authSelectors from '../../store/auth/reducer';
import './Login.css';

class Login extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		authToken: PropTypes.string.isRequired
	};
	constructor() {
		super();
		this.state = {
			stay_signin: true,
			username: '',
			password: '',
			loginstate: ''
		};
		this.changeUsername = this.changeUsername.bind(this);
		this.changePassword = this.changePassword.bind(this);
	}
	componentDidMount() {
		if (window.sessionStorage.getItem('token') !== null) {
			this.props.dispatch(authActions.fetchToken(window.sessionStorage.getItem('token')));
		}
		window.scrollTo(0, 0);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.authToken === 'error') {
			this.props.dispatch(authActions.fetchLoginStateFormat());
			this.setState({ loginstate: 'error' });
		}
		if (nextProps.authToken !== '' && nextProps.authToken !== 'error') {
			this.props.history.push('/person', { backstate: false, tabindex: 0 });
		}
	}
	changeUsername(e) {
		this.setState({ username: e.target.value });
	}
	changePassword(e) {
		this.setState({ password: e.target.value });
	}
	render() {
		const { t } = this.props;
		return (
			<div className="login">
				<div className="login-logo">
					<a className="logo-link" href="/">
						<img className="logo" alt="ST-logo" src="/img/login-logo.png" />
					</a>
				</div>

				<div className="login-main">
					<button type="button" className="btn btn-login btn-facebook">
						<i className="fa fa-facebook" aria-hidden="true" />
						<span>{t('Login using Facebook Connect')}</span>
					</button>
					<button type="button" className="btn btn-login btn-twitter">
						<i className="fa fa-twitter" />
						<span>{t('Login using Twitter')}</span>
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
								type="text"
								placeholder="Username"
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
								placeholder="Password"
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
					</div>
					<div className="error-text">
						{this.state.loginstate === 'error' ? (
							<span>{t('Ongeldige gebruikersnaam of paswoord!')}</span>
						) : (
							<span />
						)}
					</div>
					<button
						type="button"
						className="btn btn-red signin"
						onClick={() => {
							this.setState({ loginstate: '' });
							this.props.dispatch(authActions.fetchLoginAuth(this.state.username, this.state.password));
						}}
					>
						{t('Sign in')}
					</button>
					<div className="stay-signin">
						<img
							className="stay-signin-check"
							alt="ST-icon"
							src={this.state.stay_signin ? '/img/check-check.png' : '/img/check-uncheck.png'}
							onClick={() =>
								this.state.stay_signin
									? this.setState({ stay_signin: false })
									: this.setState({ stay_signin: true })}
						/>
						<span>{t('Stay signed in')}</span>
					</div>
					<div className="create-forgot">
						<Link to="/register" className="create-forgot-text">
							{t('Create your free account')}
						</Link>
						<Link to="/resetpwd" className="create-forgot-text forgotpassword">
							{t('Forgot Password')}
						</Link>
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
			</div>
		);
	}
}
function mapStateToProps(state) {
	const authToken = authSelectors.getLoginAuth(state);
	return {
		authToken
	};
}

export default connect(mapStateToProps)(translate('translations')(Login));
