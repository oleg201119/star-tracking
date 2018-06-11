import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fadeInLeft } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import Images from '../../../resource/Images';
import './TopWinnerSlide.css';

const styles = {
  fadeInLeft: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft'),
  },
  none: {
    display: 'none',
  },
};

class TopWinnerSlide extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    header: PropTypes
      .arrayOf(PropTypes.any)
      .isRequired,
    winners: PropTypes
      .arrayOf(PropTypes.any)
      .isRequired,
    slideIndex: PropTypes.number.isRequired,
    checkIndex: PropTypes.number.isRequired,
    currentIndex: PropTypes.number.isRequired,
  };

  constructor() {
    super();

    this.state = {
      rowStyles: [],
      rowIndex: 0,
    };
    this.inverval = null;
  }

  componentWillReceiveProps = (nextProps) => {
    const { slideIndex, checkIndex, currentIndex } = nextProps;

    if (slideIndex === checkIndex && slideIndex !== currentIndex && this.interval === null) {
      const needClear = this.updateStyle();

      if (!needClear) {
        this.interval = setInterval(() => {
          if (this.updateStyle()) {
            clearInterval(this.interval);
            this.interval = null;
          }
        }, 500);
      } else {
        clearInterval(this.interval);
        this.interval = null;
      }
    } else if (slideIndex !== currentIndex) {
      clearInterval(this.interval);
      this.resetStyle();
      this.interval = null;
    }
  }

  updateStyle = () => {
    const { winners } = this.props;
    const { rowIndex } = this.state;
    let needClear = false;

    if (winners.length > 0) {
      const rowStyles = [];
      for (let i = 0; i < winners.length; i += 1) {
        if (i <= rowIndex) {
          rowStyles.push(styles.fadeInLeft);
        } else {
          rowStyles.push(styles.none);
        }
      }

      if ((rowIndex + 1) === winners.length) {
        this.setState({ rowIndex: 0, rowStyles });
        needClear = true;
      } else {
        this.setState({
          rowIndex: rowIndex + 1,
          rowStyles,
        });
        needClear = false;
      }
    }

    return needClear;
  }

  resetStyle = () => {
    const { winners } = this.props;

    const rowStyles = [];
    for (let i = 0; i < winners.length; i += 1) {
      rowStyles.push(styles.none);
    }
    this.setState({ rowStyles });
  }

  buildHeaderRow = () => {
    const { header } = this.props;

    const ths = [];
    ths.push(<th key="th-empty" />);
    for (let i = 0; i < header.length; i += 1) {
      ths.push(<th key={`th-${i}`}>{header[i]}</th>,);
    }

    return <tr className="HeaderRow">{ths}</tr>;
  };

  buildBodyRows = () => {
    const { winners } = this.props;
    const trs = [];
    const { rowStyles } = this.state;

    for (let i = 0; i < winners.length; i += 1) {
      const winner = winners[i];
      const className = i % 2 === 0
        ? 'Light'
        : null;
      const tds = [];

      tds.push(<td key="td-empty" className={`EmptyColumn ${className}`} style={rowStyles[i]} />);
      for (let pos = 0; pos < winner.length; pos += 1) {
        tds.push(<td key={`td-${i}-${pos}`} className={`${className}`} style={rowStyles[i]}>{winner[pos]}</td>,);
      }

      trs.push(<tr key={`tr-${i}`} className="BodyRow">
          {tds}
        </tr>,);
    }

    return trs;
  };

  render() {
    const headerRow = this.buildHeaderRow();
    const bodyRows = this.buildBodyRows();
    const winnerCount = this.props.winners.length;
    const { name } = this.props;

    return (
      <StyleRoot>
        <div className="TopWinnerSlide">
          <table className="TopWinnerTable">
            <colgroup>
              <col width="5%" />
              <col width="10%" />
              <col width="10%" />
              <col width="25%" />
              <col width="20%" />
              <col width="10%" />
              <col width="20%" />
            </colgroup>
            <thead>{headerRow}</thead>
            <tbody>
              <tr className="TitleRow">
                <td colSpan="7">
                  <div className="TitleContent">
                    <div className="LogoWrapper">
                      <img src={Images.ic_logo_small} alt="Logo" className="Logo" />
                    </div>
                    <div className="Title">{`Top ${winnerCount} ${name}`}</div>
                  </div>
                </td>
              </tr>
              {bodyRows}
            </tbody>
          </table>
        </div>
      </StyleRoot>
    );
  }
}

export default TopWinnerSlide;
