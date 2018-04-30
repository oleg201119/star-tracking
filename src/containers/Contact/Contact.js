import React, { Component } from 'react';
import Withwork from '../Footer/Withwork';
import './Contact.css';
export default class Contact extends Component {
  render() {
    return (
      <div className="about">
        <div className="header-banner contact-banner">
          <div className="glass-section">
            <div className="slogan-section">
              <div className="container">
                <div className="about-banner-text">
                  <span className="slogan">
                    Vragen? Geïnteresseerd?
                  </span>
                </div>
                <div className="about-banner-text">
                  <span className="slogan small-slogan">
                    We staan klaar in de startblokken voor jou :)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-xl-8 about-body-container">
              <div className="about-body-topic">
                <span>Twijfel je of StarTracking interessant is voor jouw event? Wil je mer weten over de prijzen en voorwaarden? Of wil je ons in actie zien? </span>
              </div>
              <div className="about-body-text contact-body-text">
                <span>Bel ons op +32 473 19 19 70, mail naar info@star-tracking.be of vul onderstaand formulier in </span>
              </div>
              <div className="contact-body">
                <div>Jouw naam:</div>
                <input type="text" className="contact-body-input"/>
                <div>Jouw email adress:</div>
                <input type="text" className="contact-body-input"/>
                <div>Sport event:</div>
                <input type="text" className="contact-body-input"/>
                <div>Waar mogen we jou contacteren:</div>
                <input type="text" className="contact-body-input"/>
                <div>Jouw vraag:</div>
                <textarea className="contact-body-input contact-body-multiinput"/>
                <button type="button" className="btn btn-red btn-contact-send">Verstuur</button>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-body">
        
        </div>
        <Withwork/>
      </div>
    );
  }
}
