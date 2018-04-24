import React, { Component } from 'react';
import './LanguageNavBar.css';

export default class LanguageNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand justify-content-end header-language">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="language-link" href="#/">Nl</a></li>
          <li className="nav-item"><a className="language-link" href="#/">Fr</a></li>
          <li className="nav-item"><a className="language-link" href="#/">En</a></li>
        </ul>
      </nav>
    );
  }
}
