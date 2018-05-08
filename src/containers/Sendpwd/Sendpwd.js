import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as authActions from '../../store/auth/actions';
import * as authSelectors from '../../store/auth/reducer';
import './Sendpwd.css';

class Sendpwd extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
      buttonState: '',
    };
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
      this.props.dispatch(authActions.fetchSendPwdFormat());
    }
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
              <span>{t('Paswoord opnieuw instellen')}</span>
            </div>
            <div className="resetpwd-body">
              {t('U hebt zonet aangegeven dat u uw paswoord vergeten bent en via de link in de mail kon uw identiteit bevestigd worden.')}
              <br />
              {t("Via de knop hieronder kan u nu uw paswoord opnieuw instellen en dit nieuw paswoord wordt dan naar uw email adres gestuurd. Zo kan u opnieuw aanloggen. Daarna kan u via de 'Mijn account' optie uw paswoord wijzigen.")}
            </div>
          </div>
        </div>
        <div className="login-main">
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
                const pathname = this.props.location.pathname;
                const requestId = pathname.substring(23, pathname.length);
                this.props.dispatch(authActions.fetchSendPwd(requestId));
              }}
            >
              {t('Paswoord  instellen')}
            </button>
          }
        </div>
        <div className="container">
          <div className="error-text">
            {this.state.buttonState === 'error' ?
              <span>Your request not be sent. Please try again!</span>
              : null
            }
          </div>
        </div>
        <div className="close-cross">
          <i
            className="material-icons" 
            onClick={()=>{
              this.props.history.go(-1)
            }}
          >clear
          </i>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const resetPwd = authSelectors.getSendPwd(state);

  return {
    resetPwd,
  };
}

export default connect(mapStateToProps)(translate('translations')(Sendpwd));
