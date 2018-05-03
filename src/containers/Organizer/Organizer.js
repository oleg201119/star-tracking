import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Withwork from '../Footer/Withwork';
import './Organizer.css';
export default class Organizer extends Component {
  render() {
    return (
      <div className="about">
        <div className="header-banner organizer-banner">
          <div className="glass-section">
            <div className="slogan-section">
              <div className="container">
                <div className="organizer-banner-text">
                  <span className="slogan">
                    Organiseer jouw sportevent met betrouwbare tools
                  </span>
                </div>
                <div className="organizer-banner-text">
                  <span className="slogan-description d-none d-sm-block">
                    1 performant platform voor beheer, inschrijvingen, tijdstracking & accurate rapportage.
                  </span>
                </div>
                <div className="row">
                  <div className="col-12 col-md-10 col-xl-8 about-body-container">
                    <button type="button" className="btn btn-red btn-create-event btn-organizer">Maak nu jouw event aan</button>
                  </div>
                </div>
                <div className="organizer-scroll-arrow" onClick={()=>{
                  const tesNode = ReactDOM.findDOMNode(this.refs.scrollpoint);
                  console.log(tesNode.offsetTop);
                  window.scrollTo(0, tesNode.offsetTop);
                }}><span>></span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-xl-9 about-body-container">
              <div className="about-body-topic organizer-body-topic">
                <span>Onze tools helpen jou om jouw event tot een succes te maken, we nemen de technische kant uit handen <br/>zodat jij kan focussen op de organisatie.</span>
              </div>
            </div>
          </div>
          <div className="row organizer-body">
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle"></div>
              <div className="organizer-main-text">
                <span>Een eigen makkelijk beheerbare eventpagina</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle"></div>
              <div className="organizer-main-text">
                <span>Registratiemodule met online betalingsmodule</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle"></div>
              <div className="organizer-main-text">
                <span>Livetracking & tijdsregistratie via laatste technologie</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle"></div>
              <div className="organizer-main-text">
                <span>Borstnummers op naam met ingebouwde chips</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle"></div>
              <div className="organizer-main-text">
                <span>Live rapportering op grote screens tijdens uw event</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle"></div>
              <div className="organizer-main-text">
                <span>Accurate eindresultaten, met controlepunten</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle"></div>
              <div className="organizer-main-text">
                <span>Constant overzicht van stand van zaken van uw event</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle"></div>
              <div className="organizer-main-text">
                <span>Handige online applicatie voor deelnemers & supporters</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle"></div>
              <div className="organizer-main-text">
                <span>Toegang tot ons netwerk van 16.000+ sporters</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle"></div>
              <div className="organizer-main-text">
                <span>Ondersteuning van ons team tijdens uw event</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-10 col-xl-9 about-body-container" ref="scrollpoint">
              <div className="about-body-topic organizer-body-topic" >
                <span>Van kleine events tot sportwedstrijden met duizende deelnemers, van eenvoudige loopwedstrijden, tot complexe multilap, multisport events, wij kunnen het allemaal aan</span>
              </div>
            </div>
          </div>
        </div>
        <Withwork/>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-xl-8 about-body-container">
              <button type="button" className="btn btn-red btn-create-event btn-organizer">Maak nu jouw event aan</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
