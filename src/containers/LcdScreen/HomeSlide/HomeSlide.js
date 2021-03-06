import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fadeInDown, fadeInLeft } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import Images from '../../../resource/Images';
import './HomeSlide.css';

const styles = {
  fadeInDown: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown'),
  },
  none: {
    display: 'none',
  },
  fadeInLeft: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft'),
  },
};

class HomeSlide extends Component {
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
        <div className="HomeSlide">
          <div className="LogoWrapper">
            <img src={Images.ic_logo_big} alt="Logo" className="Logo" style={style} />
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default HomeSlide;
