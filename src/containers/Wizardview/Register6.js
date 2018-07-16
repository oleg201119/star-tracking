import React, { Component } from "react";
import { translate } from "react-i18next";
import DatePicker from "react-datepicker";
import Select from "react-select";
import Switch from "react-switch";
import moment from "moment";
import AuthService from '../../services/auth';
import "./Register6.css";

class Register6 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      language: "",
      gender: "",
      email: "",
      pwd: "",
      street: "",
      postcode: "",
      no: "",
      township: "",
      country: "",
      mobile: "",
      fixedline: "",
      facebook: "",
      twitter: "",
      emailcheck: false,
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateselectgender = this.updateselectgender.bind(this);
    this.handleEmailCheckChange = this.handleEmailCheckChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  updateselectgender(e) {
    this.setState({ gender: e });
  }
  handleEmailCheckChange() {
    this.setState({ emailcheck: !this.state.emailcheck });
  }
  logout() {
		var self = this;
		AuthService.Logout().then(function(value) {
			if (value === 'success') {
				self.props.history.push('/',{tokenstate:false});
			}
		});
	}
  render() {
    const { t } = this.props;
    return (
      <div>
        <div className="header-banner mobile-person-header">
          <div className="glass-section">
            <div className="slogan-section">
              <div className="container">
                <span className="slogan">{t("My account")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container register-wizard">
          <div className="row">
            <div className="col-12 col-md-10 col-xl-8 about-body-container">
              <div className="register-wizard-state">
                <span>Summary</span>
              </div>
              <div className="about-body-topic">
                <span>General</span>
              </div>
              <div className="contact-body">
                <div>Name:</div>
                <input
                  type="text"
                  className="contact-body-input"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
                <div>Email:</div>
                <input
                  type="text"
                  className="contact-body-input"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <div>Password:</div>
                <input
                  type="password"
                  className="contact-body-input"
                  value={this.state.pwd}
                  onChange={e => this.setState({ pwd: e.target.value })}
                />
                <div>Birthday:</div>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
                <div>Gender:</div>
                <Select
                  ref={ref => {
                    this.select = ref;
                  }}
                  options={[
                    { value: "Man", label: "Man" },
                    { value: "Woman", label: "Woman" }
                  ]}
                  simpleValue
                  placeholder="Select gender"
                  value={this.state.gender}
                  onChange={this.updateselectgender}
                  className="search-event"
                  searchable={false}
                />
                <div>Language:</div>
                <input
                  type="text"
                  className="contact-body-input"
                  value={this.state.language}
                  onChange={e => this.setState({ language: e.target.value })}
                />
              </div>
              <div className="about-body-topic">
                <span>Billing Information</span>
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
              </div>
              <div className="about-body-topic">
                <span>CONTACT</span>
              </div>
              <div className="contact-body">
                <div>Mobile:</div>
                <input
                  type="text"
                  className="contact-body-input"
                  value={this.state.mobile}
                  onChange={e => this.setState({ mobile: e.target.value })}
                />
                <div>Fixed line:</div>
                <input
                  type="text"
                  className="contact-body-input"
                  value={this.state.fixedline}
                  onChange={e => this.setState({ fixedline: e.target.value })}
                />
              </div>
              <div className="about-body-topic">
                <span>Social</span>
              </div>
              <div className="contact-body">
                <div className="register-btn">
                  <button type="button" className="btn btn-facebook">
                    <i className="fa fa-facebook" aria-hidden="true" />
                    <span>Connect with your friends</span>
                  </button>
                </div>
                <div>Facebook:</div>
                <input
                  type="text"
                  className="contact-body-input"
                  value={this.state.facebook}
                  onChange={e => this.setState({ facebook: e.target.value })}
                />
                <div>Twitter:</div>
                <input
                  type="text"
                  className="contact-body-input"
                  value={this.state.twitter}
                  onChange={e => this.setState({ twitter: e.target.value })}
                />
              </div>
              <div className="about-body-topic">
                <span>Notifications</span>
              </div>
              <div className="contact-body">
                <div className="register-notification">
                  <span>Email Notifications</span>
                  <div className="register-switch">
                    <Switch
                      checked={this.state.emailcheck}
                      onChange={this.handleEmailCheckChange}
                      onColor="#86d3ff"
                      onHandleColor="#43445B"
                      handleDiameter={30}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                      height={20}
                      width={48}
                      className="react-switch"
                      id="material-switch"
                    />
                  </div>
                </div>
                <div className="sent-state">
                  <button
                    // onClick={() => { this.props.nextStep(); }}
                    className="btn btn-red btn-register-next"
                  >
                    Save
                  </button>
                </div>
                <div className="sent-state">
                  <button
                    onClick={() => { 
                      this.logout();
                    }}
                    className="btn btn-red btn-register-next"
                  >
                    Log out
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
export default translate("translations")(Register6);
