import React, { Component } from "react";
import "./ResultLoadingCard.css";

class ResultLoadingCard extends Component {
  render() {
    return (
      <div className="row">
        <div className="mb-2 result-loading-card">
          <img alt="event-loading-img" src="/img/event-loading-img-small.png" />
        </div>
        <div className="mb-2 result-loading-card">
          <img alt="event-loading-img" src="/img/event-loading-img-small.png" />
        </div>
      </div>
    );
  }
}
export default ResultLoadingCard;
