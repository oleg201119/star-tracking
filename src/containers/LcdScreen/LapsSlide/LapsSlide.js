import React, { Component } from "react";
import PropTypes from "prop-types";

import Images from "../../../resource/Images";
import "./LapsSlide.css";

class LapsSlide extends Component {
  static propTypes = {
    detail: PropTypes.object.isRequired
  };

  render() {
    const { detail } = this.props;

    return (
      <div className="LapsSlide">
        <div className="TopContent">
          <img src={Images.ic_timer} alt="Timer" className="Timer" />
        </div>
        <div className="CenterContent">{detail.TotalLaps}</div>
        <div className="BottomContent">
          <div className="Time">{detail.TimeStamp}</div>
          <div className="Distance">Total distance {detail.TotalDistance}</div>
        </div>
        <div className="LogoWrapper">
          <img src={Images.ic_logo_small} alt="Logo" className="Logo" />
        </div>
      </div>
    );
  }
}

export default LapsSlide;
