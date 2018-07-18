import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './Register5.css';

class Register5 extends Component {
	constructor() {
		super();
		this.state = {
			facebook: '',
			strava: '',
			twitter: ''
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0);
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
								<span className="register-step">5 / 5</span>
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
								<div className="contact-body-field">
									<div className="field-topic">Strava</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.strava}
										onChange={(e) => this.setState({ strava: e.target.value })}
									/>
								</div>
							</div>
							<div className="about-body-topic">
								<span>{t('Connect with services')}</span>
							</div>
							<div className="contact-body">
								<div className="register-btn">
									<button type="button" className="btn btn-strava">
										<span>{t('Connect with Strava')}</span>
									</button>
								</div>
								<div className="register-btn register-btn-misfit">
									<button type="button" className="btn btn-misfit">
										<span>{t('Connect with Misfit')}</span>
									</button>
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
export default translate('translations')(Register5);
