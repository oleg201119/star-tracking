import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ImageSlide.css";

class ImageSlide extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  };

  render() {
    const { url, ...props } = this.props;

    return (
      <div {...props} className="ImageSlide">
        <div className="ImageWrapper">
          <img src={url} alt="ad slide" />
        </div>
      </div>
    );
  }
}

export default ImageSlide;
