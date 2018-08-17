import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './Withwork.css';

class Withwork extends Component {
	render() {
		const { t } = this.props;

		return (
			<div className="withwork">
				<span>{t('Zij werkten al met ons')}</span>
				<div className="withwork-logos">
					<a href="https://www.menen.be/" target="_blank" rel="noopener noreferrer">
						<img alt="menen-logo" src="/img/Collaboration1.png" className="withwork-logo" />
					</a>
					<a href="https://www.dehaan.be/" target="_blank" rel="noopener noreferrer">
						<img alt="dehaan-logo" src="/img/Collaboration2.png" className="withwork-logo" />
					</a>
					<a href="https://www.twinsclub.be/" target="_blank" rel="noopener noreferrer">
						<img alt="twinsclub-logo" src="/img/Collaboration3.png" className="withwork-logo" />
					</a>
					<a href="https://www.hetsnelstebedrijf.be/" target="_blank" rel="noopener noreferrer">
						<img alt="hetsnelstebedrijf-logo" src="/img/Collaboration4.png" className="withwork-logo" />
					</a>
					<a href="https://www.donboscohalle.be/" target="_blank" rel="noopener noreferrer">
						<img alt="donboscohalle-logo" src="/img/Collaboration5.png" className="withwork-logo" />
					</a>
				</div>
			</div>
		);
	}
}
export default translate('translations')(Withwork);
