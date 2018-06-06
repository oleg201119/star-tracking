import React, { Component } from 'react';
import { translate } from 'react-i18next';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './Register2.css';

class Register2 extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      organization: '',
      type: '',
      city: '',
      startDate: moment(),
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { t } = this.props;
    return (
      <div className="container register-wizard">
        <div className="row">
          <div className="col-12 col-md-10 col-xl-8 about-body-container">
            <div className="register-wizard-state">
              <span>Add more info</span>
              <span className="register-step">2/5</span>
            </div>
            <div className="about-body-topic">
              <span>
                General
              </span>
            </div>
            <div className="contact-body">
              <div>{t('Jouw naam')}:</div>
              <input
                type="text"
                className="contact-body-input"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
              <div>{t('Jouw organisatie')}:</div>
              <input
                type="text"
                className="contact-body-input"
                value={this.state.organization}
                onChange={e =>
                  this.setState({ organization: e.target.value })
                }
              />
              <div>{t('Jouw email adress')}:</div>
              <input
                type="text"
                className="contact-body-input"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <div>{t('Type sport')}:</div>
              <input
                type="text"
                className="contact-body-input"
                value={this.state.type}
                onChange={e => this.setState({ type: e.target.value })}
              />
              <div>{t('Stad')}:</div>
              <input
                type="text"
                className="contact-body-input"
                value={this.state.city}
                onChange={e => this.setState({ city: e.target.value })}
              />
              <div>{t('Datum')}:</div>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
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
export default translate('translations')(Register2);
