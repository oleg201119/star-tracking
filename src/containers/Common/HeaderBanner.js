import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './HeaderBanner.css';

class HeaderBanner extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="header-banner">
        <div className="glass-section">
          <div className="slogan-section">
            <div className="container">
              <span className="slogan">
                {t('Star Tracking is dé partner voor het tracken van sportevents')}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default translate('translations')(HeaderBanner);
