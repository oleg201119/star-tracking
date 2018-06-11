import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fadeInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import './StarTrackingSlide.css';

const styles = {
  fadeInDown: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown'),
  },
  none: {
    display: 'none',
  },
};

class StarTrackingSlide extends Component {
  static propTypes = {
    slideIndex: PropTypes.number.isRequired,
    checkIndex: PropTypes.number.isRequired,
    currentIndex: PropTypes.number.isRequired,
  };

  state = {
    style: {},
  };

  componentWillReceiveProps = (nextProps) => {
    const { slideIndex, checkIndex, currentIndex } = nextProps;

    if (slideIndex === checkIndex && slideIndex !== currentIndex) {
      this.setState({ style: styles.fadeInDown });
    } else if (slideIndex !== currentIndex) {
      this.setState({ style: styles.none });
    }
  }

  render() {
    const { style } = this.state;

    return (
      <StyleRoot>
        <div className="StarTrackingSlide">
          <div className="LogoWrapper">
            <div className="Logo" style={style}>
              <div className="Top">Live Coverage & Results</div>
              <div className="Center">on</div>
              <div className="Bottom">www.star-tracking.be</div>
            </div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default StarTrackingSlide;
