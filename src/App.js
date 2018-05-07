import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from './containers/Login/Login';
import Layout from './containers/Layout/Layout';
import './App.css';
import Resetpwd from './containers/Resetpwd/Resetpwd';
import Sendpwd from './containers/Sendpwd/Sendpwd';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/resetpwd" render={props => <Resetpwd {...props} />} />
        <Route path="/sendpwd" render={props => <Sendpwd {...props} />} />
        <Route path="/" render={props => <Layout {...props} />} />    
      </Switch>
    );
  }
}

export default withRouter(App);
