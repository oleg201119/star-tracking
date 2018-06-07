import React, { Component } from "react";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";

import Images from "../../../resource/Images";
import "./HomeSlide.css";

const styles = {
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounce, "bounce")
  }
};

class HomeSlide extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="HomeSlide">
          <div className="LogoWrapper">
            <img
              src={Images.ic_logo_big}
              alt="Logo"
              className="Logo"
              style={styles.bounce}
            />
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default HomeSlide;
