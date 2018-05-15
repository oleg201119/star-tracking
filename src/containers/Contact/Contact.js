import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import ProgressButton from './ProgressButton';
import * as generalActions from '../../store/general/actions';
import * as generalSelectors from '../../store/general/reducer';
import Withwork from '../Footer/Withwork';
import './Contact.css';
import './ProgressButton.css';

class Contact extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      organization: '',
      phone: '',
      event: '',
      message: '',
      buttonState: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { requestContact } = nextProps;
    if (requestContact === true) {
      this.setState({ buttonState: 'success' });
      // this.props.dispatch(generalActions.fetchContactFormat());
    }
    if (requestContact === false) {
      this.setState({ buttonState: 'error' });
    }
  }
  handleClick() {
    this.setState({ buttonState: 'loading' });
    if (this.state.name !== '' && this.state.email !== '' && this.state.organization !== '' &&
      this.state.phone !== '' && this.state.event !== '' && this.state.message !== '') {
      this.props.dispatch(generalActions.fetchRequestContact(this.state.name, this.state.email, this.state.organization, this.state.phone, this.state.event, this.state.message));
    } else {
      setTimeout(() => {
        this.setState({ buttonState: 'error' });
      }, 2000);
    }
  }
  render() {
    const { t } = this.props;

    return (
      <div className="about">
        <div className="header-banner contact-banner">
          <div className="glass-section">
            <div className="slogan-section">
              <div className="container">
                <div className="about-banner-text">
                  <span className="slogan">
                    {t('Vragen? Geïnteresseerd?')}
                  </span>
                </div>
                <div className="about-banner-text">
                  <span className="slogan small-slogan">
                    {t('We staan klaar in de startblokken voor jou')}:)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-xl-8 about-body-container">
              <div className="about-body-topic">
                <span>{t('Twijfel je of StarTracking interessant is voor jouw event? Wil je mer weten over de prijzen en voorwaarden? Of wil je ons in actie zien?')} </span>
              </div>
              <div className="about-body-text contact-body-text">
                <span>{t('Bel ons op')} +32 473 19 19 70, {t('Mail naar info@star-tracking.be of vul onderstaand formulier in')} </span>
              </div>
              <div className="contact-body">
                <div>{t('Jouw naam')}:</div>
                <input type="text" className="contact-body-input" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                <div>{t('Jouw organisatie')}:</div>
                <input type="text" className="contact-body-input" value={this.state.organization} onChange={e => this.setState({ organization: e.target.value })} />
                <div>{t('Jouw email adress')}:</div>
                <input type="text" className="contact-body-input" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                <div>{t('Jouw telefoon')}:</div>
                <input type="text" className="contact-body-input" value={this.state.phone} onChange={e => this.setState({ phone: e.target.value })} />
                <div>{t('Sport event')}:</div>
                <input type="text" className="contact-body-input" value={this.state.event} onChange={e => this.setState({ event: e.target.value })} />
                <div>{t('Jouw vraag')}:</div>
                <textarea className="contact-body-input contact-body-multiinput" value={this.state.message} onChange={e => this.setState({ message: e.target.value })} />
                <div className="sent-state">
                  <ProgressButton onClick={this.handleClick} state={this.state.buttonState} className="btn-contact-send">
                    {this.state.buttonState === 'success' ? 'Sent successfully' : t('Verstuur')}
                  </ProgressButton>
                  <div className="error-text">
                    {this.state.buttonState === 'error' ?
                      <span>Your message could not be sent. Please try again!</span>
                      : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Withwork />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const requestContact = generalSelectors.getRequestContact(state);
  return {
    requestContact,
  };
}
export default connect(mapStateToProps)(translate('translations')(Contact));
