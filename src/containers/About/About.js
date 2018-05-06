import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Withwork from '../Footer/Withwork';
import './About.css';
class About extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="about">
        <div className="header-banner about-banner">
          <div className="glass-section">
            <div className="slogan-section">
              <div className="container">
                <div className="about-banner-text">
                  <span className="slogan">
                    {t('Making organizing sports events a breeze in the park!')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-xl-8 about-body-container">
              <div className="about-body-topic">
                <span>{t('Star Tracking wil sport organisatoren het leven makkelijker maken, en sporters connecteren tijdens sport events.')}</span>
              </div>
              <div className="about-body-text">
                <span>{t('about-text-1')}
                <br/><br/>
                {t('about-text-2')}
                <br/><br/>
                {t('about-text-3')} </span>
              </div>
              <div className="about-body-end">
                <span>{t('Zelf jouw event makkelijk organiseren')}?</span>
              </div>
              <button type="button" className="btn btn-red btn-create-event">{t('Maak nu jouw event aan')}</button>
            </div>
          </div>
        </div>
        <Withwork/>
      </div>
    );
  }
}
export default translate('translations')(About);