import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { withNamespaces } from 'react-i18next';

class SimpleSlider extends React.Component {
  render() {
    const { t } = this.props;

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='container'>
        <div className='testimonial'>
      <div className='text__main text__h2 '>{t('Awards')}</div>
      <Slider {...settings}>
        <div>
        <img src='../img/award/logo.webp' alt=''/>
        </div>
        <div>
        <img src='../img/award/logo1.webp' alt=''/>
        </div>
        <div>
        <img src='../img/award/logo3.webp' alt=''/>
        </div>
        <div>
        <img src='../img/award/avvo-4.webp' alt=''/>
        </div>
        <div>
        <img src='../img/award/imgres.webp' alt=''/>
        </div>
        <div>
        <img src='../img/award/logo_10_best.webp' alt=''/>
        </div>
      </Slider>
      </div>
      </div>
    );
  }
}

export default withNamespaces()(SimpleSlider);