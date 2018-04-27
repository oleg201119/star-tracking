import React, { Component } from 'react';
import LanguageNavBar from './LanguageNavBar';
import MainNavBar from './MainNavBar';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="page-header">
          <LanguageNavBar />
          <MainNavBar />
        </div>
      </div>
    );
  }
}
