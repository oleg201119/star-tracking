import React, { Component } from 'react';
import { translate } from 'react-i18next';
import WizardForm from 'react-wizard-form';
import './Wizardview.css';
import Register1 from './Register1';
import Register2 from './Register2';
import Register3 from './Register3';
import Register4 from './Register4';
import Register5 from './Register5';
import Register6 from './Register6';

class Wizardview extends Component {
	render() {
		// const { t } = this.props;

		return (
			<WizardForm>
				<Register1 {...this.props} />
				<Register2 {...this.props} />
				<Register3 {...this.props} />
				<Register4 {...this.props} />
				<Register5 {...this.props} />
				<Register6 {...this.props} />
			</WizardForm>
		);
	}
}
export default translate('translations')(Wizardview);
