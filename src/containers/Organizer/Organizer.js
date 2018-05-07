import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Withwork from '../Footer/Withwork';
import './Organizer.css';
class Organizer extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const { t } = this.props;

    return (
      <div className="about">
        <div className="header-banner organizer-banner">
          <div className="glass-section">
            <div className="slogan-section">
              <div className="container">
                <div className="organizer-banner-text">
                  <span className="slogan">
                    {t('Organiseer jouw sportevent met betrouwbare tools')}
                  </span>
                </div>
                <div className="organizer-banner-text">
                  <span className="slogan-description d-none d-sm-block">
                    {t('1 performant platform voor beheer, inschrijvingen, tijdstracking & accurate rapportage.')}
                  </span>
                </div>
                <div className="row">
                  <div className="col-12 col-md-10 col-xl-8 about-body-container">
                    <Link to="newevent"><button type="button" className="btn btn-red btn-create-event btn-organizer">{t('Maak nu jouw event aan')}</button></Link>
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
                <span>{t('Onze tools helpen jou om jouw event tot een succes te maken, we nemen de technische kant uit handen')} <br/>{t('zodat jij kan focussen op de organisatie.')}</span>
              </div>
            </div>
          </div>
          <div className="row organizer-body">
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle">
                <img className="organizer-circle-image" alt="computer-img" src="img/computer.svg" />
              </div>
              <div className="organizer-main-text">
                <span>{t('Een eigen makkelijk beheerbare eventpagina')}</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle">
                <img className="organizer-circle-image" alt="online-payment-img" src="img/online-payment.svg" />
              </div>
              <div className="organizer-main-text">
                <span>{t('Registratiemodule met online betalingsmodule')}</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle">
                <img className="organizer-circle-image" alt="thumbs-up-img" src="img/thumbs-up.svg" />
              </div>
              <div className="organizer-main-text">
                <span>{t('Livetracking & tijdsregistratie via laatste technologie')}</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle">
                <img className="organizer-circle-image" alt="cpu-img" src="img/cpu.svg" />
              </div>
              <div className="organizer-main-text">
                <span>{t('Borstnummers op naam met ingebouwde chips')}</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle">
                <img className="organizer-circle-image" alt="screen-img" src="img/screen.svg" />
              </div>
              <div className="organizer-main-text">
                <span>{t('Live rapportering op grote screens tijdens uw event')}</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle">
                <img className="organizer-circle-image" alt="stopwatch-img" src="img/stopwatch.svg" />
              </div>
              <div className="organizer-main-text">
                <span>{t('Accurate eindresultaten, met controlepunten')}</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle">
                <img className="organizer-circle-image" alt="analytics-img" src="img/analytics.svg" />
              </div>
              <div className="organizer-main-text">
                <span>{t('Constant overzicht van stand van zaken van uw event')}</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle">
                <img className="organizer-circle-image" alt="application-img" src="img/application.svg" />
              </div>
              <div className="organizer-main-text">
                <span>{t('Handige online applicatie voor deelnemers & supporters')}</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle">
                <img className="organizer-circle-image" alt="globe-img" src="img/globe.svg" />
              </div>
              <div className="organizer-main-text">
                <span>{t('Toegang tot ons netwerk van 16.000+ sporters')}</span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 organizer-body-main">
              <div className="organizer-main-circle">
                <img className="organizer-circle-image" alt="network-img" src="img/network.svg" />
              </div>
              <div className="organizer-main-text">
                <span>{t('Ondersteuning van ons team tijdens uw event')}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-10 col-xl-9 about-body-container" ref="scrollpoint">
              <div className="about-body-topic organizer-body-topic" >
                <span>{t('Van kleine events tot sportwedstrijden met duizende deelnemers, van eenvoudige loopwedstrijden, tot complexe multilap, multisport events, wij kunnen het allemaal aan')}</span>
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
                    <span>{t('StarTracking leverde met gerichte communicatie in hun netwerk omtrent ons event ons 20% meer deelnemers op dan de vorige editie. Duidelijk een juiste keuze!')}</span>
                  </div>
                  <div className="slider-text-small">
                    <span>Pascal Leys, Grote Prijs Stephan Defreyne</span>
                  </div>
                </div>
                <div className="slider-text-body">
                  <div className="slider-text">
                    <span>{t('Onmiddellijk na de wedstrijd waren alle uitslagen in onze 41 leeftijds- en groepscategoriën beschikbaar waardoor de prijzenceremonie heel vlot verliep')}</span>
                  </div>
                  <div className="slider-text-small">
                    <span>Filiep Vanthournout, Alpro Leiemarathon</span>
                  </div>
                </div>
                <div className="slider-text-body">
                  <div className="slider-text">
                    <span>{t('De deelnemers kunnen de uitslagen en aantal ronden live volgen op hun smartphone, wat voor een 24u MTB race een grote meerwaarde is')}</span>
                  </div>
                  <div className="slider-text-small">
                    <span>Robin Vanleirsberge, 24u MTB Hooglede-Gits</span>
                  </div>
                </div>
                <div className="slider-text-body">
                  <div className="slider-text">
                    <span>{t('Door de professionaliteit van StarTracking twijfelden we niet lang om hen in te schakelen voor de tijdsregistratie van het BK halve marathon')}</span>
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
              <Link to="newevent"><button type="button" className="btn btn-red btn-create-event btn-organizer">{t('Maak nu jouw event aan')}</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default translate('translations')(Organizer);