import React, { Component } from 'react';
import { connect } from 'react-redux';
import LanguageNavBar from './LanguageNavBar';
import MainNavBar from './MainNavBar';
import PersonNavBar from './PersonNavBar';
import * as authSelectors from '../../store/auth/reducer';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      tokenstate: false,
    };
  }
  componentDidMount() {
    let temptoken = false;
    const token = sessionStorage.getItem('token');
    if (token) {
      temptoken = true;
    } else {
      const refreshToken = localStorage.StarTrackingRefreshToken;
      if (refreshToken) temptoken = true;
    }
    this.setState({ tokenstate: temptoken });
  }
  render() {
    return (
      <div className="header">
        <div className="page-header">
          <LanguageNavBar />
          {/* {this.props.authToken === '' ? <MainNavBar /> : <PersonNavBar />} */}
          { this.state.tokenstate ? <PersonNavBar /> : <MainNavBar />}
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
