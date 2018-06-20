import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Homeperson from "../Homeperson/Homeperson";
import Homepage from "../Homepage/Homepage";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Organizer from "../Organizer/Organizer";
import Newevent from "../Newevent/Newevent";
import Eventdetail from "../Eventdetail/Eventdetail";
import Policy from "../Policy/Policy";
import EventResult from "../EventResult/EventResult";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Switch>
          <Route path="/" exact render={props => <Home {...props} />} />
          <Route
            path="/homeperson"
            render={props => <Homeperson {...props} />}
          />
          <Route path="/homepage" render={props => <Homepage {...props} />} />
          <Route path="/about" render={props => <About {...props} />} />
          <Route path="/contact" render={props => <Contact {...props} />} />
          <Route path="/organizer" render={props => <Organizer {...props} />} />
          <Route path="/newevent" render={props => <Newevent {...props} />} />
          <Route path="/event" render={props => <Eventdetail {...props} />} />
          <Route path="/policy" render={props => <Policy {...props} />} />
          <Route
            path="/eventresult"
            render={props => <EventResult {...props} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
