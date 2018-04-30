import React, { Component } from 'react';
import Withwork from '../Footer/Withwork';
import './About.css';
export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="header-banner about-banner">
          <div className="glass-section">
            <div className="slogan-section">
              <div className="container">
                <div className="about-banner-text">
                  <span className="slogan">
                    Making organizing sports events a breeze in the park!
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
                <span>Star Tracking wil sport organisatoren het leven makkelijker maken, en sporters connecteren tijdens sport events.</span>
              </div>
              <div className="about-body-text">
                <span>Star-Tracking werd geboren uit de frustratie over hoe complex sportevents waren. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. 
                <br/><br/>
                Star-Tracking heeft intussen meer dan 16.000 leden en stelt een robuust online platform ter beschikking voor sport organisatoren zodat de organisator snel en eenvoudig een online inschrijvingssysteem kan maken. 
                <br/><br/>
                Alle Star-Tracking leden anderzijds worden geïnformeerd over de sport events, kunnen zich inschrijven, hun events beheren, hun tijden consulteren, en informatie met vrienden uitwisselen. </span>
              </div>
              <div className="about-body-end">
                <span>Zelf jouw event makkelijk organiseren?</span>
              </div>
              <button type="button" className="btn btn-red btn-create-event">Maak nu jouw event aan</button>
            </div>
          </div>
        </div>
        <Withwork/>
      </div>
    );
  }
}
