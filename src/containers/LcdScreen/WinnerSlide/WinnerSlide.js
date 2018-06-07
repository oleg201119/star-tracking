import React, { Component } from "react";
import PropTypes from "prop-types";

import Images from "../../../resource/Images";
import "./WinnerSlide.css";

class WinnerSlide extends Component {
  static propTypes = {
    detail: PropTypes.object.isRequired
  };

  render() {
    const { detail } = this.props;

    return (
      <div className="WinnerSlide">
        <div className="TopContent">
          <img src={Images.ic_cup} alt="Cup" className="Cup" />
        </div>
        <div className="CenterContent">{detail.FastestTeam}</div>
        <div className="BottomContent">
          <div className="Extra">
            {detail.FastestTeamExtraInfos.join(" | ")}
          </div>
          <div className="TotalLaps">{detail.FastestTeamTotalLaps}</div>
          <div className="Time">{detail.TimeStamp}</div>
        </div>
        <div className="LogoWrapper">
          <img src={Images.ic_logo_small} alt="Logo" className="Logo" />
        </div>
      </div>
    );
  }
}

export default WinnerSlide;
