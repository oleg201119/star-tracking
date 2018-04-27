import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import LanguageNavBar from './LanguageNavBar';
import MainNavBar from './MainNavBar';
import PersonNavBar from './PersonNavBar';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="page-header">
          <LanguageNavBar />
          <Switch>
            <Route
              path="/person"
              render={props => <PersonNavBar {...props} />}
            />
            <Route
              path="/" 
              render={props => <MainNavBar {...props} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
