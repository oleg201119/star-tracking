import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      stay_signin : false
    }
  }
  render() {
    return (
      <div className="login">
        <div className="login-logo"> 
          <a className="logo-link" href="/">
            <img className="logo" alt="ST-logo" src="img/login-logo.png" />
          </a>
        </div>

        <div className="login-main">
          <button type="button" className="btn btn-login btn-facebook">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <span>Login using Facebook Connect</span>
          </button>
          <button type="button" className="btn btn-login btn-twitter">
            <i className="fa fa-twitter"></i>
            <span>Login using Twitter</span>
          </button>
          <div className="login-border">
            <div className="login-border-line"></div>
            <div className="login-border-text">OR</div>
            <div className="login-border-line"></div>
          </div>
          <div className="login-other">
            <div className="login-other-input">
              <img className="login-other-icon" alt="ST-icon" src="img/login-icon-username.png" />
              <input type="text" placeholder="Username"/>
            </div>
            <div className="login-other-line"></div>
            <div className="login-other-input">
              <img className="login-other-icon login-other-icon-password" alt="ST-icon" src="img/login-icon-password.png" />
              <input type="text" placeholder="Password"/>
            </div>
          </div>
          <button type="button" className="btn btn-red signin" onClick={()=>{
            this.props.history.push('homeperson');
            }}>Sign In</button>
          <div className="stay-signin">
            <img className="stay-signin-check" alt="ST-icon" src={this.state.stay_signin?"img/check-check.png":"img/check-uncheck.png"} onClick={()=>this.state.stay_signin?this.setState({stay_signin:false}):this.setState({stay_signin:true})}/>
            <span>Stay signed in</span>
          </div>
          <div className="create-forgot">
            <a className="create-forgot-text" href="/#">Create your free account</a>
            <a className="create-forgot-text" href="/#">Forgot Password</a>
          </div>
        </div>
      </div>
    );
  }
}
