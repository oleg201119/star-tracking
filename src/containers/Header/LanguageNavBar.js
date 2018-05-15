import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import './LanguageNavBar.css';

class LanguageNavBar extends Component {
  render() {
    const { i18n } = this.props;
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
    return (
      <nav className="navbar navbar-expand justify-content-end header-language">
        <ul className="navbar-nav">
          <li className="nav-item">
            <span className="language-link"
              onClick={()=>{
                changeLanguage('nl');
              }}
            >
              Nl
            </span>
          </li>
          <li className="nav-item">
            <span className="language-link"
              onClick={()=>{
                changeLanguage('fr');
              }}
            >
              Fr
            </span>
          </li>
          <li className="nav-item">
            <span className="language-link"
              onClick={()=>{
                changeLanguage('en');
              }}
            >
              En
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}
export default translate('translations')(connect()(LanguageNavBar));
