import React, { Component } from "react";
import { translate } from "react-i18next";
import DatePicker from "react-datepicker";
import Select from "react-select";
import moment from "moment";
import "./Register1.css";

class Register1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      language: "",
      gender: "",
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateselectgender = this.updateselectgender.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  updateselectgender(e) {
    this.setState({ gender: e });
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
                <span className="register-step">1/5</span>
              </div>
              {/* <div className="register-avatar">
              <img src="/img/register-avatar" alt="avatar" />
            </div> */}
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
export default translate("translations")(Register1);
