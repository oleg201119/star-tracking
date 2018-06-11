import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Images from '../../../resource/Images';
import './LapsSlide.css';

class LapsSlide extends Component {
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
  };

  state = {
    now: '',
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      const now = moment().format('HH:mm:ss');
      this.setState({ now });
    }, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render() {
    const { resultName, detail } = this.props;
    const { now } = this.state;

    return (
      <div className="LapsSlide">
        <div className="TopContent">
          <img src={Images.ic_timer} alt="Timer" className="Timer" />
          <div className="ResultName">{resultName}</div>
        </div>
        <div className="CenterContent">{`Total Laps ${detail.TotalLaps}`}</div>
        <div className="BottomContent">
          <div className="Distance">
            {`${detail.TotalDistance} km`}
          </div>
          <div className="Time">{now}</div>
        </div>
        <div className="LogoWrapper">
          <img src={Images.ic_logo_small} alt="Logo" className="Logo" />
        </div>
      </div>
    );
  }
}

export default LapsSlide;
