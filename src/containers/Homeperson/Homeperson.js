import React, { Component } from 'react';
import './Homeperson.css';

export default class Homeperson extends Component {
  constructor(){
    super();
    this.state = {
      stay_signin : false
    }
  }
  render() {
    return (
      <div>Homeperson</div>
    );
  }
}
