import React, { Component } from "react";
import { translate } from "react-i18next";
import "./Register2.css";

class Register2 extends Component {
  constructor() {
    super();
    this.state = {
      street: "",
      postcode: "",
      no: "",
      township: "",
      country: ""
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    // const { t } = this.props;
    return (
      <div>
        <div className="header-banner mobile-person-header">
          <div className="glass-section">
            <div className="slogan-section">
              <div className="container">
                <span className="slogan">Register</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container register-wizard">
          <div className="row">
            <div className="col-12 col-md-10 col-xl-8 about-body-container">
              <div className="register-wizard-state">
                <span>Add more info</span>
                <span className="register-step">2/5</span>
              </div>
              <div className="about-body-topic">
                <span>Address details (for your tickets / race numbers)</span>
              </div>
              <div className="contact-body">
                <div>Street:</div>
                <input
                  type="text"
                  className="contact-body-input"
                  value={this.state.street}
                  onChange={e => this.setState({ street: e.target.value })}
                />
                <div>No.:</div>
                <input
                  type="text"
                  className="contact-body-input"
                  value={this.state.no}
                  onChange={e => this.setState({ no: e.target.value })}
                />
                <div>Postal Code:</div>
                <input
                  type="text"
                  className="contact-body-input"
                  value={this.state.postcode}
                  onChange={e => this.setState({ postcode: e.target.value })}
                />
                <div>Township:</div>
                <input
                  type="text"
                  className="contact-body-input"
                  value={this.state.township}
                  onChange={e => this.setState({ township: e.target.value })}
                />
                <div>Country:</div>
                <input
                  type="text"
                  className="contact-body-input"
                  value={this.state.country}
                  onChange={e => this.setState({ country: e.target.value })}
                />
                <div className="sent-state">
                  <button
                    onClick={() => {
                      this.props.nextStep();
                    }}
                    className="btn btn-red btn-register-next"
                  >
                    Save your preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default translate("translations")(Register2);
