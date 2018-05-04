import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Withwork from '../Footer/Withwork';
import './Organizer.css';
export default class Organizer extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
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
        <div className="container">
          <div className="image-slider">
            <Slider {...settings}>
              <div>
                <img className="slider-image" alt="slider-img-1" src="img/image-1.png" />
              </div>
              <div>
                <img className="slider-image" alt="slider-img-1" src="img/image-2.png" />
              </div>
              <div>
                <img className="slider-image" alt="slider-img-1" src="img/image-3.png" />
              </div>
              <div>
                <img className="slider-image" alt="slider-img-1" src="img/image-4.png" />
              </div>
              <div>
                <img className="slider-image" alt="slider-img-1" src="img/image-5.png" />
              </div>
              <div>
                <img className="slider-image" alt="slider-img-1" src="img/image-6.png" />
              </div>
              <div>
                <img className="slider-image" alt="slider-img-1" src="img/image-7.png" />
              </div>
              <div>
                <img className="slider-image" alt="slider-img-1" src="img/image-8.png" />
              </div>
              <div>
                <img className="slider-image" alt="slider-img-1" src="img/image-9.png" />
              </div>
              <div>
                <img className="slider-image" alt="slider-img-1" src="img/image-10.png" />
              </div>
              <div>
                <img className="slider-image" alt="slider-img-1" src="img/image-11.png" />
              </div>
            </Slider>
          </div>
          <div className="row">
            <div className="text-slider col-10 col-lg-10">
              <Slider {...settings}>
                <div className="slider-text-body">
                  <div className="slider-text">
                    <span>StarTracking leverde met gerichte communicatie in hun netwerk omtrent ons event ons 20% meer deelnemers op dan de vorige editie. Duidelijk een juiste keuze!</span>
                  </div>
                  <div className="slider-text-small">
                    <span>Pascal Leys, Grote Prijs Stephan Defreyne</span>
                  </div>
                </div>
                <div className="slider-text-body">
                  <div className="slider-text">
                    <span>Onmiddellijk na de wedstrijd waren alle uitslagen in onze 41 leeftijds- en groepscategoriën beschikbaar waardoor de prijzenceremonie heel vlot verliep</span>
                  </div>
                  <div className="slider-text-small">
                    <span>Filiep Vanthournout, Alpro Leiemarathon</span>
                  </div>
                </div>
                <div className="slider-text-body">
                  <div className="slider-text">
                    <span>De deelnemers kunnen de uitslagen en aantal ronden live volgen op hun smartphone, wat voor een 24u MTB race een grote meerwaarde is</span>
                  </div>
                  <div className="slider-text-small">
                    <span>Robin Vanleirsberge, 24u MTB Hooglede-Gits</span>
                  </div>
                </div>
                <div className="slider-text-body">
                  <div className="slider-text">
                    <span>Door de professionaliteit van StarTracking twijfelden we niet lang om hen in te schakelen voor de tijdsregistratie van het BK halve marathon</span>
                  </div>
                  <div className="slider-text-small">
                    <span>Filiep Vanthournout, Alpro Leiemarathon</span>
                  </div>
                </div>
              </Slider>
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
