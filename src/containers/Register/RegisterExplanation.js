import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RegisterExplanation.css';

class RegisterExplanation extends Component {
	componentDidMount() {
		this.updateDimensions();
		setTimeout(() => {
			this.props.history.push('/person', { registered: true, backstate: false });
		}, 3000);
		window.addEventListener('resize', this.updateDimensions.bind(this));
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions.bind(this));
	}
	updateDimensions() {
		if (window.innerWidth >= 768) {
			this.props.history.push('/person', { registered: true, backstate: false, mobileregister: true });
		}
	}
	render() {
		const { t } = this.props;
		const self = this;
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			centerMode: true,
			slidesToShow: 1,
			centerPadding: '37px',
			arrows: false,
			initialSlide: 1,
			beforeChange: function() {
				self.props.history.push('/person', { registered: true, backstate: false });
			}
		};
		return (
			<div>
				<div className="header-banner mobile-person-header">
					<div className="glass-section" />
				</div>
				<div className="container explan-slider d-md-none">
					<Slider {...settings}>
						<div>
							<div className="explan-body">
								<div className="explan-img first">
									<img
										className="slider-body"
										alt="slider-img-1"
										src="/img/registerexplanation.png"
									/>
								</div>
								<div className="explan-border">
									<span className="explan-text">
										{t('Thank you for registering!')}
										<br />
										{t('Let’s quickly fine tune')}
										<br />
										{t('your account')}
									</span>
								</div>
							</div>
						</div>
						<div>
							<div className="explan-body">
								<div className="explan-img second">
									<img
										className="slider-body"
										alt="slider-img-1"
										src="/img/registerexplanation.png"
									/>
								</div>
								<div className="explan-border">
									<span className="explan-text">
										{t('Thank you for registering!')}
										<br />
										{t('Let’s quickly fine tune')}
										<br />
										{t('your account')}
									</span>
								</div>
							</div>
						</div>
						<div>
							<div className="explan-body">
								<div className="explan-img third">
									<img
										className="slider-body"
										alt="slider-img-1"
										src="/img/registerexplanation.png"
									/>
								</div>
								<div className="explan-border">
									<span className="explan-text">
										{t('Thank you for registering!')}
										<br />
										{t('Let’s quickly fine tune')}
										<br />
										{t('your account')}
									</span>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		);
	}
}

export default connect()(translate('translations')(RegisterExplanation));
