import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Switch>
          <Route
            path="/"
            render={props => <Home {...props} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
