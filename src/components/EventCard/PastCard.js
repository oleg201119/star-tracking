import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default class PastCard extends Component {
  static propTypes = {
    event: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  render() {
    const { event } = this.props;
    return (
      <div className="past-card row">
        <div className="col-3 col-md-2 col-xl-1">
          {event.Date}
        </div>
        <div className="col-5 col-md-3 col-xl-2">
          {event.Name}
        </div>
        <div className="d-none d-sm-none d-md-block col-md-6 col-xl-8">
          {event.Description}
        </div>
        <div className="col-4 col-md-1 col-xl-1">
          <a href="#/" className="detail-option">Resultaten</a>
        </div>
      </div>
    );
  }
}
