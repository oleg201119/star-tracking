import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as authActions from '../../store/auth/actions';
import * as authSelectors from '../../store/auth/reducer';
import './Login.css';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      stay_signin : false,
      username : '',
      password : '',
    }
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }
  changeUsername(e){
    this.setState({username:e.target.value})
  }
  changePassword(e){
    this.setState({password:e.target.value})
  }
  render() {
    const { authToken } = this.props;

    if (authToken !== '') return <Redirect to="/person" />;
    else 
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
              <input type="text" placeholder="Username" value={this.state.username} onChange={this.changeUsername}/>
            </div>
            <div className="login-other-line"></div>
            <div className="login-other-input">
              <img className="login-other-icon login-other-icon-password" alt="ST-icon" src="img/login-icon-password.png" />
              <input type="password" placeholder="Password"  value={this.state.password} onChange={this.changePassword}/>
              {this.state.password!==""?<button type="button" className="btn btn-clear" onClick={()=>this.setState({password:""})}>x</button>:null}
            </div>
          </div>
          <button type="button" className="btn btn-red signin" onClick={()=>{
            this.props.dispatch(authActions.fetchLoginAuth(this.state.username,this.state.password));
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
function mapStateToProps(state) {
  const authToken = authSelectors.getLoginAuth(state);

  return {
    authToken,
  };
}

export default connect(mapStateToProps)(Login);