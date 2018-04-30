import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Homeperson from '../Homeperson/Homeperson';
import Person from '../Person/Person';
import About from '../About/About';
import Contact from '../Contact/Contact';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Switch>
          <Route
            path="/"
            exact 
            render={props => <Home {...props} />}
          />
          <Route
            path="/homeperson"
            render={props => <Homeperson {...props} />}
          />
          <Route
            path="/person"
            render={props => <Person {...props} />}
          />
          <Route
            path="/about"
            render={props => <About {...props} />}
          />
          <Route
            path="/contact"
            render={props => <Contact {...props} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
