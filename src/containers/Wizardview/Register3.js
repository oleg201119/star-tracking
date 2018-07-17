import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './Register3.css';

class Register3 extends Component {
	constructor() {
		super();
		this.state = {
			mobile: '',
			number: '',
			fixedline: ''
		};
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		// const { t } = this.props;
		return (
			<div>
				<div className="header-banner mobile-person-header">
					<div className="glass-section">
						<div className="slogan-section">
							<div className="container">
								<span className="slogan">Register</span>
							</div>
						</div>
					</div>
				</div>
				<div className="container register-wizard">
					<div className="row">
						<div className="col-12 col-md-10 col-xl-8 about-body-container">
							<div className="register-wizard-state">
								<span>Add more info</span>
								<span className="register-step">3 / 5</span>
							</div>
							<div className="about-body-topic">
								<span className="field-topic">CONTACT (FOR PROBLEMS)</span>
							</div>
							<div className="contact-body">
								<div className="contact-body-field">
									<div className="field-topic">MobilePhone</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.mobile}
										onChange={(e) => this.setState({ mobile: e.target.value })}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">FixPhone</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.fixedline}
										onChange={(e) => this.setState({ fixedline: e.target.value })}
									/>
								</div>
							</div>
							<div className="about-body-topic">
								<span>CONTACT IN CASE OF EMERGENCY (during a race)</span>
							</div>
							<div className="contact-body">
								<div className="contact-body-field">
									<div className="field-topic">Number (family member / friend)</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.number}
										onChange={(e) => this.setState({ number: e.target.value })}
									/>
								</div>
								<div className="sent-state">
									<button
										onClick={() => {
											this.props.nextStep();
										}}
										className="btn btn-red btn-register-next"
									>
										Save your preferences
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
export default translate('translations')(Register3);
