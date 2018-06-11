import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HomeSlide from './HomeSlide/HomeSlide';
import StarTrackingSlide from './StarTrackingSlide/StarTrackingSlide';
import CategorySlide from './CategorySlide/CategorySlide';
import LapsSlide from './LapsSlide/LapsSlide';
import WinnerSlide from './WinnerSlide/WinnerSlide';
import TopWinnerSlide from './TopWinnerSlide/TopWinnerSlide';
import ImageSlide from './ImageSlide/ImageSlide';

import * as resultActions from '../../store/results/actions';
import * as resultSelectors from '../../store/results/reducer';
import * as adActions from '../../store/ads/actions';
import * as adSelectors from '../../store/ads/reducer';

import * as Config from './Config';

import './LcdScreen.css';

class LcdScreen extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({ id: PropTypes.string.isRequired }),
    }),
    resultInfos: PropTypes
      .arrayOf(PropTypes.any)
      .isRequired,
    ads: PropTypes
      .arrayOf(PropTypes.any)
      .isRequired,
  };

  static defaultProps = {
    match: {
      params: {
        id: 409,
      },
    },
  }

  state = {
    checkIndex: 0,
    currentIndex: -1,
  };

  componentDidMount = () => {
    // Get event id
    const eventId = this.props.match.params.id;

    // Get current language
    let currentlanguage = this.props.i18n.language;
    if (this.props.i18n.language.length > 2) {
      currentlanguage = this
        .props
        .i18n
        .language
        .substring(0, 2);
    }

    this.fetchData(eventId, currentlanguage);
    this.interval = setInterval(() => {
      this.fetchData(eventId, currentlanguage);
    }, Config.RESULT_CHECK_PERIOD);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  fetchData = (eventId, language) => {
    this
      .props
      .dispatch(resultActions.fetchResultCategories(eventId, language));
    this
      .props
      .dispatch(adActions.fetchAds(eventId, language));
  }

  buildSlides = () => {
    const { checkIndex, currentIndex } = this.state;
    const { resultInfos, ads } = this.props;

    const slides = [];
    let slideIndex = 0;

    slides.push(<HomeSlide
      slideIndex={slideIndex}
      checkIndex={checkIndex}
      currentIndex={currentIndex}
      key="HomeSlide" 
    />);
    slideIndex += 1;

    slides.push(<StarTrackingSlide
      slideIndex={slideIndex}
      checkIndex={checkIndex}
      currentIndex={currentIndex}
      key="StarTrackingSlide" 
    />);
    slideIndex += 1;

    let i;
    for (i = 0; i < resultInfos.length; i += 1) {
      const resultInfo = resultInfos[i];

      slides.push(<CategorySlide category={resultInfo.Type} key={`CategorySlide-${i}`} />);
      slideIndex += 1;

      slides.push(<LapsSlide
        resultName={resultInfo.Name}
        detail={resultInfo.Detail}
        key={`LapsSlide-${i}`} 
      />);
      slideIndex += 1;

      slides.push(<WinnerSlide
        slideIndex={slideIndex}
        checkIndex={checkIndex}
        currentIndex={currentIndex}
        resultName={resultInfo.Name}
        detail={resultInfo.Detail}
        key={`WinnerSlide-${i}`} 
      />);
      slideIndex += 1;

      slides.push(<TopWinnerSlide
        slideIndex={slideIndex}
        checkIndex={checkIndex}
        currentIndex={currentIndex}
        name={resultInfo.Name}
        header={resultInfo.Header}
        winners={resultInfo.Winners}
        key={`TopWinnerSlide-${i}`} 
      />);
      slideIndex += 1;

      if (ads.length > 0) {
        const ad = ads[i % ads.length];
        slides.push(<ImageSlide url={ad} key={`AdSlide-${i}`} />);
        slideIndex += 1;
      }
    }

    while (i < ads.length) {
      /*
      if (resultInfos.length > 0) {
        const resultInfo = resultInfos[i % resultInfos.length];

        slides.push(<CategorySlide category={resultInfo.Type} key={`CategorySlide-${i}`} />);
        slides.push(<LapsSlide
          resultName={resultInfo.Name}
          detail={resultInfo.Detail}
          key={`LapsSlide-${i}`}
        />);
        slides.push(<WinnerSlide
          resultName={resultInfo.Name}
          detail={resultInfo.Detail}
          key={`WinnerSlide-${i}`}
        />);
        slides.push(<TopWinnerSlide
          name={resultInfo.Name}
          header={resultInfo.Header}
          winners={resultInfo.Winners}
          key={`TopWinnerSlide-${i}`}
        />);
      }
      */
      const ad = ads[i];
      slides.push(<ImageSlide url={ad} key={`AdSlide-${i}`} />);
      slideIndex += 1;
      i += 1;
    }

    return slides;
  }

  handleSlideBeforeChange = (newIndex) => {
    this.setState({ checkIndex: newIndex });
  }

  handleSlideAfterChange = (curIndex) => {
    this.setState({ currentIndex: curIndex });
  }

  render() {
    const settings = {
      dots: false,
      arrows: false,
      pauseOnHover: false,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: Config.SLIDE_FADE_SPEED,
      autoplaySpeed: Config.AUTO_PLAY_SPEED,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (oldIndex, newIndex) => this.handleSlideBeforeChange(newIndex),
      afterChange: currentIndex => this.handleSlideAfterChange(currentIndex),
    };

    const slides = this.buildSlides();

    return (
      <div className="LcdScreen">
        <Slider {...settings}>
          {slides}
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

export default connect(mapStateToProps)(translate('translations')(LcdScreen));
