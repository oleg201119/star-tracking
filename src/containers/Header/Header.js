import React, { Component } from 'react';
import { connect } from 'react-redux';
import LanguageNavBar from './LanguageNavBar';
import MainNavBar from './MainNavBar';
import PersonNavBar from './PersonNavBar';
import * as authSelectors from '../../store/auth/reducer';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="page-header">
          <LanguageNavBar />
          {this.props.authToken === '' ? <MainNavBar /> : <PersonNavBar />}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const authToken = authSelectors.getLoginAuth(state);
  return {
    authToken,
  };
}
export default connect(mapStateToProps)(Header);
