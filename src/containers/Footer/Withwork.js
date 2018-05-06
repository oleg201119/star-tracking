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
          <a href="#/">
            <img alt="gent-logo" src="img/gent-logo.png" className="gent-logo"/>
          </a>
          <a href="#/">
            <img alt="oostende-logo" src="img/oostende-logo.png" className="oostende-logo"/>
          </a>
          <a href="#/">
            <img alt="middelkerke-logo" src="img/middelkerke-logo.png" className="middelkerke-logo"/>
          </a>
        </div>
      </div>
    );
  }
}
export default translate('translations')(Withwork);