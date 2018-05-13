import React, { Component } from 'react';
import { translate } from 'react-i18next';
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
                const pathname = window.location.pathname;
                if (pathname === '/' || pathname === '/homepage' || pathname === '/person' || pathname === '/event') {
                  window.location.reload();
                }
              }}
            >
              Nl
            </span>
          </li>
          <li className="nav-item">
            <span className="language-link"
              onClick={()=>{
                changeLanguage('fr');
                const pathname = window.location.pathname;
                if (pathname === '/' || pathname === '/homepage' || pathname === '/person' || pathname === '/event') {
                  window.location.reload();
                }
              }}
            >
              Fr
            </span>
          </li>
          <li className="nav-item">
            <span className="language-link"
              onClick={()=>{
                changeLanguage('en');
                const pathname = window.location.pathname;
                if (pathname === '/' || pathname === '/homepage' || pathname === '/person' || pathname === '/event') {
                  window.location.reload();
                } 
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
export default translate('translations')(LanguageNavBar);
