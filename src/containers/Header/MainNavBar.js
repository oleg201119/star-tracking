import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import AuthService from '../../services/auth';
import './MainNavBar.css';

class MainNavBar extends Component {
	constructor() {
		super();
		this.state = {
			tokenstate: false,
			menuopen: false
		};
	}
	componentDidMount() {
		let temptoken = false;
		const token = sessionStorage.getItem('token');
		if (token) {
			temptoken = true;
		} else {
			const refreshToken = localStorage.StarTrackingRefreshToken;
			if (refreshToken) temptoken = true;
		}
		this.setState({ tokenstate: temptoken });
	}
	handleStateChange(state) {
		this.setState({ menuOpen: state.isOpen });
	}
	closeMenu() {
		this.setState({ menuOpen: false });
	}
	logout() {
		this.setState({ menuOpen: false });
		var self = this;
		AuthService.Logout().then(function(value) {
			if (value === 'success') {
				self.setState({ tokenstate: false });
				self.props.history.push('/');
			}
		});
	}
	render() {
		const { t } = this.props;
		const { tokenstate } = this.state;
		return (
			<div>
				<div className="mobile-header d-block d-xl-none">
					<Menu
						isOpen={this.state.menuOpen}
						onStateChange={(state) => this.handleStateChange(state)}
						className={tokenstate ? 'black-menu' : null}
					>
						<Link
							to={
								tokenstate ? (
									{ pathname: '/person', state: { backstate: false } }
								) : (
									{ pathname: '/homepage', state: { backstate: false } }
								)
							}
							className="menu-link"
							onClick={() => {
								this.closeMenu();
							}}
						>
							{t('Browse all events')}
						</Link>
						<Link
							to={{ pathname: '/organizer', state: { backstate: false } }}
							className="menu-link"
							onClick={() => {
								this.closeMenu();
							}}
						>
							{t('For organizers')}
						</Link>
						<Link
							to={{ pathname: '/about', state: { backstate: false } }}
							className="menu-link"
							onClick={() => {
								this.closeMenu();
							}}
						>
							{t('About Star Tracking')}
						</Link>
						<Link
							to={{ pathname: '/contact', state: { backstate: false } }}
							className="menu-link"
							onClick={() => {
								this.closeMenu();
							}}
						>
							{t('Contact us')}
						</Link>
						{!tokenstate ? (
							<Link
								to="/login"
								onClick={() => {
									this.closeMenu();
								}}
							>
								{t('Sign in')}
							</Link>
						) : null}
						{tokenstate ? (
							<a
								className="logout-link"
								onClick={() => {
									this.logout();
								}}
							>
								Log out
							</a>
						) : null}
					</Menu>
					{this.props.location.pathname !== '/' ? this.props.location.state === undefined ||
					this.props.location.state.backstate === undefined ? (
						<img
							className="mobileheader-back"
							alt="back-arrow"
							src="/img/white-back.png"
							onClick={() => {
								this.props.history.go(-1);
							}}
						/>
					) : null : null}
					<a href={tokenstate ? '/person' : '/'}>
						<img className="mobile-logo" alt="ST-logo" src="/img/mobile-logo.png" />
					</a>
					{tokenstate ? (
						<a className="avatar-link d-block d-xl-none header-avatar" href="#/">
							<img className="avatar" alt="auth-avatar" src="/img/navbar-avatar.png" />
						</a>
					) : null}
				</div>
				<nav className="navbar navbar-expand-xl header-menu d-none d-xl-block">
					<div className="container">
						<a className="logo-link" href={tokenstate ? '/person' : '/'}>
							<img className="logo" alt="ST-logo" src="/img/logo-header.png" />
						</a>
						<div className="collapse navbar-collapse" id="navbarHeaderMenu">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<Link
										to={
											tokenstate ? (
												{ pathname: '/person', state: { backstate: false } }
											) : (
												{ pathname: '/homepage', state: { backstate: false } }
											)
										}
										className="menu-link"
									>
										{t('Browse all events')}
									</Link>
								</li>
								<li className="nav-item">
									<Link
										to={{ pathname: '/organizer', state: { backstate: false } }}
										className="menu-link"
									>
										{t('For organizers')}
									</Link>
								</li>
								<li className="nav-item">
									<Link
										to={{ pathname: '/about', state: { backstate: false } }}
										className="menu-link"
									>
										{t('About Star Tracking')}
									</Link>
								</li>
								<li className="nav-item">
									<Link
										to={{ pathname: '/contact', state: { backstate: false } }}
										className="menu-link"
									>
										{t('Contact us')}
									</Link>
								</li>
							</ul>
							{!tokenstate ? (
								<Link to="/login">
									<button type="button" className="btn btn-red btn-login">
										{t('Sign in')}
									</button>
								</Link>
							) : null}
						</div>
						{tokenstate ? (
							<a className="avatar-link d-none d-xl-block" href="#/">
								<img className="avatar" alt="auth-avatar" src="/img/navbar-avatar.png" />
							</a>
						) : null}
					</div>
				</nav>
			</div>
		);
	}
}
export default translate('translations')(connect()(MainNavBar));
