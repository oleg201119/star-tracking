import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Select from 'react-select';
import './Register4.css';

class Register4 extends Component {
	constructor() {
		super();
		this.state = {
			sport1: false,
			sport2: false,
			sport3: false,
			sport4: false,
			sport5: false,
			sport6: false,
			location1: false,
			location2: false,
			location3: false,
			radius: 15
		};
		this.selectsport = this.selectsport.bind(this);
		this.selectlocation = this.selectlocation.bind(this);
		this.updateradius = this.updateradius.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}
	selectsport(i) {
		const temp = !this.state[`sport${i}`];
		this.setState({ [`sport${i}`]: temp });
	}
	selectlocation(i) {
		const temp = !this.state[`location${i}`];
		for (let j = 1; j <= 3; j++) {
			if (j === i) this.setState({ [`location${j}`]: temp });
			else this.setState({ [`location${j}`]: false });
		}
	}
	updateradius(e) {
		this.setState({ radius: e });
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
								<span className="register-step">4 / 5</span>
							</div>
							<div className="about-body-topic">
								<span>{t('YOUR SPORT PREFERENCES')}</span>
							</div>
							<div className="select-body">
								<div className="register-wizard-select">
									<div
										className={`register-wizard-select-item ${this.state.sport1
											? 'selected'
											: null}`}
										onClick={() => this.selectsport(1)}
									>
										<img
											src={this.state.sport1 ? '/img/register-done.png' : '/img/register-do.png'}
											alt="Running"
										/>
										<span>{t('Running')}</span>
									</div>
									<div
										className={`register-wizard-select-item ${this.state.sport2
											? 'selected'
											: null}`}
										onClick={() => this.selectsport(2)}
									>
										<img
											src={this.state.sport2 ? '/img/register-done.png' : '/img/register-do.png'}
											alt="Roadbike"
										/>
										<span>{t('Roadbike')}</span>
									</div>
									<div
										className={`register-wizard-select-item ${this.state.sport3
											? 'selected'
											: null}`}
										onClick={() => this.selectsport(3)}
									>
										<img
											src={this.state.sport3 ? '/img/register-done.png' : '/img/register-do.png'}
											alt="Multisport"
										/>
										<span>{t('Multisport')}</span>
									</div>
									<div
										className={`register-wizard-select-item ${this.state.sport4
											? 'selected'
											: null}`}
										onClick={() => this.selectsport(4)}
									>
										<img
											src={this.state.sport4 ? '/img/register-done.png' : '/img/register-do.png'}
											alt="TrialRun"
										/>
										<span>{t('TrialRun')}</span>
									</div>
									<div
										className={`register-wizard-select-item ${this.state.sport5
											? 'selected'
											: null}`}
										onClick={() => this.selectsport(5)}
									>
										<img
											src={this.state.sport5 ? '/img/register-done.png' : '/img/register-do.png'}
											alt="Mountainbike"
										/>
										<span>{t('Mountainbike')}</span>
									</div>
									<div
										className={`register-wizard-select-item ${this.state.sport6
											? 'selected'
											: null}`}
										onClick={() => this.selectsport(6)}
									>
										<img
											src={this.state.sport6 ? '/img/register-done.png' : '/img/register-do.png'}
											alt="Other"
										/>
										<span>{t('Other')}</span>
									</div>
								</div>
							</div>
							<div className="about-body-topic">
								<span>{t('YOUR LOCATION PREFERENCES')}</span>
							</div>
							<div className="select-body">
								<div className="register-wizard-select">
									<div
										className={`register-wizard-select-item ${this.state.location1
											? 'selected'
											: null}`}
										onClick={() => this.selectlocation(1)}
									>
										<img
											src={
												this.state.location1 ? '/img/register-done.png' : '/img/register-do.png'
											}
											alt="Marathons"
										/>
										<div className="radius-select">
											{t('In a radius of')}&nbsp;&nbsp;
											<div className="select-radius" onClick={(e) => e.stopPropagation()}>
												<Select
													ref={(ref) => {
														this.select = ref;
													}}
													options={[
														{ value: 15, label: 15 },
														{ value: 25, label: 25 },
														{ value: 50, label: 50 },
														{ value: 100, label: 100 },
														{ value: 150, label: 150 }
													]}
													simpleValue
													value={this.state.radius}
													onChange={this.updateradius}
													className="select-radius"
													searchable={false}
													clearable={false}
												/>
											</div>
											&nbsp;&nbsp;km
										</div>
									</div>
									<div
										className={`register-wizard-select-item ${this.state.location2
											? 'selected'
											: null}`}
										onClick={() => this.selectlocation(2)}
									>
										<img
											src={
												this.state.location2 ? '/img/register-done.png' : '/img/register-do.png'
											}
											alt="Triathlons"
										/>
										<span>{t('National')}</span>
									</div>
									<div
										className={`register-wizard-select-item ${this.state.location3
											? 'selected'
											: null}`}
										onClick={() => this.selectlocation(3)}
									>
										<img
											src={
												this.state.location3 ? '/img/register-done.png' : '/img/register-do.png'
											}
											alt="Baanfietsen"
										/>
										<span>{t('International')}</span>
									</div>
								</div>
							</div>
							<div className="contact-body">
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
export default translate('translations')(Register4);
