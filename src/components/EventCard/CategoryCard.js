import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default class CategoryCard extends Component {
  static propTypes = {
    event: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  render() {
    const { event } = this.props;
    return (
      <div className="category-card col-12 col-md-6 col-xl-4">
        <div className="card-banner">
          <img alt="banner" src="img/category-banner.png" />
        </div>
        <div className="card-glass">
          <div className="category-name">
            {event.Name}
          </div>
          <div className="item-num">
            {event.categorynum} ITEMS
          </div>
          <div className="category-line">
            <div className="line"></div>
          </div>
        </div>
      </div>
    );
  }
}
