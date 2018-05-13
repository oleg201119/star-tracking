import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as authActions from '../../store/auth/actions';
import * as authSelectors from '../../store/auth/reducer';
import './Resetpwd.css';

class Resetpwd extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
      email: '',
      buttonState: '',
    };
    this.changeEmail = this.changeEmail.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentWillReceiveProps(nextProps) {
    const { resetPwd } = nextProps;
    if (resetPwd === true) {
      this.setState({ buttonState: 'success' });
    }
    if (resetPwd === false) {
      this.setState({ buttonState: 'error' });
      this.props.dispatch(authActions.fetchResetPwdFormat());
    }
  }
  changeEmail(e) {
    this.setState({ email: e.target.value });
  }
  render() {
    const { t } = this.props;
    return (
      <div className="resetpwd">
        <div className="login-logo">
          <a className="logo-link" href="/">
            <img className="logo" alt="ST-logo" src="/img/login-logo.png" />
          </a>
        </div>
        <div className="container">
          <div className="resetpwd-description">
            <div className="resetpwd-title">
              <span>{t('Paswoord vergeten?')}</span>
            </div>
            {this.state.buttonState !== 'success' ?
              <div className="resetpwd-body">
                {t('Als u uw paswoord vergeten bent, kunt u Star-Tracking vragen uw paswoord opnieuw in te stellen.')}
                <br />
                {t('Om na te gaan dat u zelf deze aanvraag stuurt, vragen we u eerst een bevestiging per mail.')}
              </div> :
              <div className="resetpwd-body">
                {t('U zal dan binnen enkele minuten een Star-Tracking email ontvangen met daarin een link.')}
                <br />
                {t('Als u op deze link klikt, zal u uw paswoordwijziging bevestigen en zal uw paswoord opnieuw ingesteld worden.')}
              </div>
            }
          </div>
        </div>
        <div className="login-main">
          <div className="login-other">
            <div className="login-other-input">
              <img className="login-other-icon" alt="ST-icon" src="/img/login-icon-username.png" />
              <input type="text" placeholder="Email" value={this.state.email} onChange={this.changeEmail}/>
            </div>
          </div>
          {this.state.buttonState === 'success' ?
            <button type="button" className="btn btn-red signin reset-success">
              <i className="material-icons">
                done
              </i>
              <span>{t('Request Sent!')}</span>
            </button> :
            <button
              type="button"
              className="btn btn-red signin"
              onClick={() => {
                this.setState({ buttonState: '' });
                this.props.dispatch(authActions.fetchResetPwd(this.state.email));
              }}
            >
              {t('Paswoord terugzetten')}
            </button>
          }
        </div>
        <div className="container">
          <div className="error-text">
            {this.state.buttonState === 'error' ?
              <span>Your request not be sent. Please try again!</span>
              : null}
          </div>
        </div>
        <div className="close-cross" onClick={() => { this.props.history.go(-2); }}>
          <i className="material-icons">
            clear
          </i>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const resetPwd = authSelectors.getResetPwd(state);

  return {
    resetPwd,
  };
}

export default connect(mapStateToProps)(translate('translations')(Resetpwd));
