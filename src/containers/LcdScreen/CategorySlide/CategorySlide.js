import React, { Component } from "react";
import PropTypes from "prop-types";

import Images from "../../../resource/Images";
import "./CategorySlide.css";

class CategorySlide extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired
  };

  buildCategoryImage = () => {
    const { category } = this.props;

    if (category === "Cycling") {
      return (
        <img
          src={Images.ic_bike_horiz}
          alt="Category"
          className="CategoryCycling"
        />
      );
    } else if (category === "Running") {
      return (
        <img
          src={Images.ic_running_red}
          alt="Category"
          className="CategoryRunning"
        />
      );
    } else if (category === "Mountainbike") {
      return (
        <img
          src={Images.ic_bike_angle}
          alt="Category"
          className="CategoryMountainBike"
        />
      );
    } else return null;
  };

  render() {
    const categoryImage = this.buildCategoryImage();

    return (
      <div className="CategorySlide">
        <div className="CategoryWrapper">{categoryImage}</div>
        <div className="LogoWrapper">
          <img src={Images.ic_logo_small} alt="Logo" className="Logo" />
        </div>
      </div>
    );
  }
}

export default CategorySlide;
