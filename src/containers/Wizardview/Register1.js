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
			name: '',
			language: '',
			gender: '',
			startDate: moment()
		};
		this.handleChange = this.handleChange.bind(this);
		this.updateselectgender = this.updateselectgender.bind(this);
	}
	handleChange(date) {
		this.setState({
			startDate: date
		});
	}
	updateselectgender(e) {
		this.setState({ gender: e });
	}
	render() {
		// const { t } = this.props;
		console.log(this.props);
		const mobileregister =
			this.props.location.state !== undefined && this.props.location.state.mobileregister ? true : false;
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
							{mobileregister ? (
								<div className="welcome-register">
									<span>Thank you for registering! Let's quickly finetune your account</span>
								</div>
							) : null}
							<div className="register-wizard-state">
								<span>Add more info</span>
								<span className="register-step">1 / 5</span>
							</div>
							{/* <div className="register-avatar">
              <img src="/img/register-avatar" alt="avatar" />
            </div> */}
							<div className="about-body-topic">
								<span>General</span>
							</div>
							<div className="contact-body">
								<div className="contact-body-field">
									<div className="field-topic">Name</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.name}
										onChange={(e) => this.setState({ name: e.target.value })}
									/>
								</div>
								<div className="contact-body-field">
									<div className="field-topic">Birthday</div>
									<DatePicker selected={this.state.startDate} onChange={this.handleChange} />
								</div>
								<div className="contact-body-field">
									<div className="field-topic">Gender</div>
									<Select
										ref={(ref) => {
											this.select = ref;
										}}
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
									<div className="field-topic">Language</div>
									<input
										type="text"
										className="contact-body-input"
										value={this.state.language}
										onChange={(e) => this.setState({ language: e.target.value })}
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
export default translate('translations')(Register1);
