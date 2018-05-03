import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Withwork from '../Footer/Withwork';
import { connect } from 'react-redux';
import * as generalActions from '../../store/general/actions';
import * as generalSelectors from '../../store/general/reducer';
import './Contact.css';
class Contact extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      email: "",
      organization: "",
      phone: "",
      event: "",
      message: ""
    }
  }
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }
  componentWillReceiveProps(nextProps) {
    const { requestContact } = nextProps;
    if(requestContact){
      alert('success');
      this.props.dispatch(generalActions.fetchContactFormat());
    }
  }
  render() {
    return (
      <div className="about">
        <div className="header-banner contact-banner">
          <div className="glass-section">
            <div className="slogan-section">
              <div className="container">
                <div className="about-banner-text">
                  <span className="slogan">
                    Vragen? Geïnteresseerd?
                  </span>
                </div>
                <div className="about-banner-text">
                  <span className="slogan small-slogan">
                    We staan klaar in de startblokken voor jou :)
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
                <span>Twijfel je of StarTracking interessant is voor jouw event? Wil je mer weten over de prijzen en voorwaarden? Of wil je ons in actie zien? </span>
              </div>
              <div className="about-body-text contact-body-text">
                <span>Bel ons op +32 473 19 19 70, mail naar info@star-tracking.be of vul onderstaand formulier in </span>
              </div>
              <div className="contact-body">
                <div>Jouw naam:</div>
                <input type="text" className="contact-body-input" value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
                <div>Jouw organisati:</div>
                <input type="text" className="contact-body-input" value={this.state.organization} onChange={e=>this.setState({organization:e.target.value})}/>
                <div>Jouw email adress:</div>
                <input type="text" className="contact-body-input" value={this.state.email} onChange={e=>this.setState({email:e.target.value})}/>
                <div>Jouw telefoon:</div>
                <input type="text" className="contact-body-input" value={this.state.phone} onChange={e=>this.setState({phone:e.target.value})}/>
                <div>Sport event:</div>
                <input type="text" className="contact-body-input" value={this.state.event} onChange={e=>this.setState({event:e.target.value})}/>
                <div>Jouw vraag:</div>
                <textarea className="contact-body-input contact-body-multiinput" value={this.state.message} onChange={e=>this.setState({message:e.target.value})}/>
                <button type="button" className="btn btn-red btn-contact-send" onClick={()=>{
                  if( this.state.name!=="" && this.state.email!=="" && this.state.organization!=="" && 
                  this.state.phone!=="" && this.state.event!=="" && this.state.message!==""){
                    this.props.dispatch( generalActions.fetchRequestContact(this.state.name,this.state.email,this.state.organization,this.state.phone, this.state.event, this.state.message));
                  }
                }}>Verstuur</button>
              </div>
            </div>
          </div>
        </div>
        <Withwork/>
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
export default connect(mapStateToProps)(Contact);