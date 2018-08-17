import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './Copyright.css';

class Copyright extends Component {
	render() {
		const { t } = this.props;

		return (
			<div className="copyright d-flex justify-content-between">
				<span>
					© Star-Tracking 2013-2018 -
					<a className="policy-link" href="/policy">
						Privacy Policy
					</a>
				</span>
				<span className="d-none d-lg-block">
					{t('Met de steun van')}&nbsp;&nbsp;
					<img className="logo-flanders" alt="Flanders-logo" src="/img/logo-flanders.png" />
				</span>
			</div>
		);
	}
}
export default translate('translations')(Copyright);
