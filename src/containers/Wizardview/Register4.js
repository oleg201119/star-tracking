import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './Register4.css';

class Register4 extends Component {
  constructor() {
    super();
    this.state = {
      sport1: false,
      sport2: false,
      sport3: false,
      sport4: false,
      sport5: false,
      sport6: false,
      sport7: false,
      location1: false,
      location2: false,
      location3: false,
    };
    this.selectsport = this.selectsport.bind(this);
    this.selectlocation = this.selectlocation.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  selectsport(i) {
    const temp = !this.state[`sport${i}`];
    this.setState({ [`sport${i}`]: temp });
  }
  selectlocation(i) {
    const temp = !this.state[`location${i}`];
    this.setState({ [`location${i}`]: temp });
  }
  render() {
    // const { t } = this.props;
    return (
      <div className="container register-wizard">
        <div className="row">
          <div className="col-12 col-md-10 col-xl-8 about-body-container">
            <div className="register-wizard-state">
              <span>Add more info</span>
              <span className="register-step">4/5</span>
            </div>
            <div className="about-body-topic">
              <span>
                YOUR SPORT PREFERENCES
              </span>
            </div>
            <div className="select-body">
              <div className="register-wizard-select">
                <div className="register-wizard-select-item">
                  <img src={this.state.sport1 ? "/img/register-done.png": "/img/register-do.png"} alt="Marathons" onClick={()=>this.selectsport(1)} />
                  <span>Marathons</span>
                </div>
                <div className="register-wizard-select-item">
                  <img src={this.state.sport2 ? "/img/register-done.png": "/img/register-do.png"} alt="Triathlons" onClick={()=>this.selectsport(2)} />
                  <span>Triathlons</span>
                </div>
                <div className="register-wizard-select-item">
                  <img src={this.state.sport3 ? "/img/register-done.png": "/img/register-do.png"} alt="Baanfietsen" onClick={()=>this.selectsport(3)} />
                  <span>Baanfietsen</span>
                </div>
                <div className="register-wizard-select-item">
                  <img src={this.state.sport4 ? "/img/register-done.png": "/img/register-do.png"} alt="Mountainbiking" onClick={()=>this.selectsport(4)} />
                  <span>Mountainbiking</span>
                </div>
                <div className="register-wizard-select-item">
                  <img src={this.state.sport5 ? "/img/register-done.png": "/img/register-do.png"} alt="Multisport" onClick={()=>this.selectsport(5)} />
                  <span>Multisport</span>
                </div>
                <div className="register-wizard-select-item">
                  <img src={this.state.sport6 ? "/img/register-done.png": "/img/register-do.png"} alt="City Mountainbiking" onClick={()=>this.selectsport(6)} />
                  <span>City Mountainbiking</span>
                </div>
                <div className="register-wizard-select-item">
                  <img src={this.state.sport7 ? "/img/register-done.png": "/img/register-do.png"} alt="Iron Man" onClick={()=>this.selectsport(7)} />
                  <span>Iron Man</span>
                </div>
              </div>
            </div>
            <div className="about-body-topic">
              <span>
                YOUR LOCATION PREFERENCES
              </span>
            </div>
            <div className="select-body">
              <div className="register-wizard-select">
                <div className="register-wizard-select-item">
                  <img src={this.state.location1 ? "/img/register-done.png": "/img/register-do.png"} alt="Marathons" onClick={()=>this.selectlocation(1)} />
                  <span>In a radius of xx km</span>
                </div>
                <div className="register-wizard-select-item">
                  <img src={this.state.location2 ? "/img/register-done.png": "/img/register-do.png"} alt="Triathlons" onClick={()=>this.selectlocation(2)} />
                  <span>National</span>
                </div>
                <div className="register-wizard-select-item">
                  <img src={this.state.location3 ? "/img/register-done.png": "/img/register-do.png"} alt="Baanfietsen" onClick={()=>this.selectlocation(3)} />
                  <span>International</span>
                </div>
              </div>
            </div>
            <div className="contact-body">
              <div className="sent-state">
                <button
                  onClick={() => { this.props.nextStep(); }}
                  className="btn btn-red btn-register-next"
                >
                  Save your preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default translate('translations')(Register4);
