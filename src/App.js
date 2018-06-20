import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Login from "./containers/Login/Login";
import Layout from "./containers/Layout/Layout";
import LcdScreen from "./containers/LcdScreen/LcdScreen";
import Person from "./containers/Person/Person";
import "./App.css";
import Resetpwd from "./containers/Resetpwd/Resetpwd";
import Sendpwd from "./containers/Sendpwd/Sendpwd";
import Register from "./containers/Register/Register";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/lcd/:id" render={props => <LcdScreen {...props} />} />
        <Route path="/resetpwd" render={props => <Resetpwd {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
        <Route
          path="/Account/ResetPassword"
          render={props => <Sendpwd {...props} />}
        />
        <Route path="/person" render={props => <Person {...props} />} />
        <Route path="/" render={props => <Layout {...props} />} />
      </Switch>
    );
  }
}

export default withRouter(App);
