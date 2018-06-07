import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import Slider from "react-slick";
import HomeSlide from "./HomeSlide/HomeSlide";
import CategorySlide from "./CategorySlide/CategorySlide";
import LapsSlide from "./LapsSlide/LapsSlide";
import WinnerSlide from "./WinnerSlide/WinnerSlide";
import TopWinnerSlide from "./TopWinnerSlide/TopWinnerSlide";
import ImageSlide from "./ImageSlide/ImageSlide";

import * as resultActions from "../../store/results/actions";
import * as resultSelectors from "../../store/results/reducer";
import * as adActions from "../../store/ads/actions";
import * as adSelectors from "../../store/ads/reducer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./LcdScreen.css";

class LcdScreen extends Component {
  static propTypes = {
    resultInfos: PropTypes.arrayOf(PropTypes.any).isRequired,
    ads: PropTypes.arrayOf(PropTypes.any).isRequired
  };

  componentDidMount = () => {
    // Get event id
    const eventId = this.props.match.params.id;

    // Get current language
    let currentlanguage = this.props.i18n.language;
    if (this.props.i18n.language.length > 2) {
      currentlanguage = this.props.i18n.language.substring(0, 2);
    }

    this.props.dispatch(
      resultActions.fetchResultCategories(eventId, currentlanguage)
    );

    this.props.dispatch(adActions.fetchAds(eventId, currentlanguage));
  };

  buildResultInfoSlides = () => {
    const { resultInfos } = this.props;
    let slides = [];

    for (let i = 0; i < resultInfos.length; i++) {
      const resultInfo = resultInfos[i];
      if (resultInfo.Details.ID !== undefined) {
        slides.push(
          <CategorySlide
            category={resultInfo.Type}
            key={`CategorySlide-${i}`}
          />
        );
        slides.push(
          <LapsSlide detail={resultInfo.Details} key={`LapsSlide-${i}`} />
        );
        slides.push(
          <WinnerSlide detail={resultInfo.Details} key={`WinnerSlide-${i}`} />
        );
        slides.push(
          <TopWinnerSlide
            header={resultInfo.Header}
            winners={resultInfo.Winners}
            key={`TopWinnerSlide-${i}`}
          />
        );
      }
    }

    return slides;
  };

  render() {
    const settings = {
      dots: false,
      arrows: false,
      pauseOnHover: false,
      fade: true,
      lazyLoad: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const { ads } = this.props;
    const resultInfoSlides = this.buildResultInfoSlides();

    return (
      <div className="LcdScreen">
        <Slider {...settings}>
          <HomeSlide /> {resultInfoSlides}
          {ads.map(ad => <ImageSlide url={ad} key={ad} />)}
        </Slider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const resultInfos = resultSelectors.getResultInfos(state);
  const ads = adSelectors.getAds(state);

  return { resultInfos, ads };
}

export default connect(mapStateToProps)(translate("translations")(LcdScreen));
