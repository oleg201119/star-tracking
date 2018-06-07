import React, { Component } from "react";
import PropTypes from "prop-types";

import Images from "../../../resource/Images";
import "./TopWinnerSlide.css";

class TopWinnerSlide extends Component {
  static propTypes = {
    header: PropTypes.arrayOf(PropTypes.any).isRequired,
    winners: PropTypes.arrayOf(PropTypes.any).isRequired
  };

  buildHeaderRow = () => {
    const { header } = this.props;

    let ths = [];
    for (let i = 0; i < header.length; i++)
      ths.push(<th key={`th-${i}`}>{header[i]}</th>);

    return <tr className="HeaderRow">{ths}</tr>;
  };

  buildBodyRows = () => {
    const { winners } = this.props;
    let trs = [];
    for (let i = 0; i < winners.length; i++) {
      const winner = winners[i];

      let tds = [];
      for (let pos = 0; pos < winner.length; pos++) {
        tds.push(<td key={`td-${i}-${pos}`}>{winner[pos]}</td>);
      }

      const className = i % 2 === 0 ? "BodyRow Light" : "BodyRow";
      trs.push(
        <tr key={`tr-${i}`} className={className}>
          {tds}
        </tr>
      );
    }

    return trs;
  };

  render() {
    const headerRow = this.buildHeaderRow();
    const bodyRows = this.buildBodyRows();

    return (
      <div className="TopWinnerSlide">
        <table className="TopWinnerTable">
          <thead>{headerRow}</thead>
          <tbody>
            <tr className="TitleRow">
              <td colSpan="6">
                <div className="TitleContent">
                  <div className="LogoWrapper">
                    <img
                      src={Images.ic_logo_small}
                      alt="Logo"
                      className="Logo"
                    />
                  </div>
                  <div className="Title">Top 5 Heren</div>
                </div>
              </td>
            </tr>
            {bodyRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TopWinnerSlide;
