import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Homeperson from '../Homeperson/Homeperson';
import Homepage from '../Homepage/Homepage';
import Person from '../Person/Person';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Organizer from '../Organizer/Organizer';

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
            path="/homepage"
            render={props => <Homepage {...props} />}
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
          <Route
            path="/organizer"
            render={props => <Organizer {...props} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
