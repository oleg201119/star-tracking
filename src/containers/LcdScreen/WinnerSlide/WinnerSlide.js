import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import Images from '../../../resource/Images';
import './WinnerSlide.css';

const styles = {
  zoomIn: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn'),
  },
  none: {
    display: 'none',
  },
};

class WinnerSlide extends Component {
  static propTypes = {
    resultName: PropTypes.string.isRequired,
    detail: PropTypes
      .shape({
        ID: PropTypes.number,
        TimeStamp: PropTypes.string,
        FastestLap: PropTypes.string,
        FastestTeam: PropTypes.string,
        FastestTeamTotalLaps: PropTypes.number,
        TotalLaps: PropTypes.number,
        TotalDistance: PropTypes.string,
        FastestTeamExtraInfos: PropTypes.arrayOf(PropTypes.string),
      })
      .isRequired,
    slideIndex: PropTypes.number.isRequired,
    checkIndex: PropTypes.number.isRequired,
    currentIndex: PropTypes.number.isRequired,
  };

  state = {
    style: {},
    now: '',
  };

  componentDidMount = () => {
    this.interval = setInterval(() => {
      const now = moment().format('HH:mm:ss');
      this.setState({ now });
    }, 1000);
  }

  componentWillReceiveProps = (nextProps) => {
    const { slideIndex, checkIndex, currentIndex } = nextProps;

    if (slideIndex === checkIndex && slideIndex !== currentIndex) {
      this.setState({ style: styles.zoomIn });
    } else if (slideIndex !== currentIndex) {
      this.setState({ style: styles.none });
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render() {
    const { resultName, detail } = this.props;
    const { style } = this.state;
    const { now } = this.state;

    return (
      <StyleRoot>
        <div className="WinnerSlide">
          <div className="TopContent">
            <img src={Images.ic_cup} alt="Cup" className="Cup" />
            <div className="ResultName">{resultName}</div>
          </div>
          <div className="CenterContent">
            <div style={style}>{detail.FastestTeam}</div>
          </div>
          <div className="BottomContent">
            <div className="Extra" style={style}>
              {detail
                .FastestTeamExtraInfos
                .join(' | ')}
            </div>
            <div className="TotalLaps" style={style}>{`${detail
              .FastestTeamTotalLaps} Laps - Fastest lap ${detail
              .FastestLap
              .substring(0, 5)} `}
            </div>
            <div className="Time">{now}</div>
          </div>
          <div className="LogoWrapper">
            <img src={Images.ic_logo_small} alt="Logo" className="Logo" />
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default WinnerSlide;
