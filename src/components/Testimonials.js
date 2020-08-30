import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { withNamespaces } from 'react-i18next';

class Testimonials extends React.Component {
   render() {
      const { t } = this.props;

      var settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 2,
         slidesToScroll: 2,
         initialSlide: 0,
         adaptiveHeight: false,
         responsive: [
            {
               breakpoint: 1024,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
               }
            },
            {
               breakpoint: 600,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
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
               <div className='text__main text__h2 testimonial'>{t('Testimonials')}</div>
               <Slider {...settings}>
                  <div>
                     <div className='testimonials'>
                        <div className='stars'>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                        <div className="stars__name">Tetiana</div>
                        <p className='testimonials__italic'>Igor has a warm and comforting personality. When you discuss your legal needs it is clear that he listens and gives you knowledgeable solutions based on your specific issues. Igor also has a good sense of humor and it really supports you if you have a difficult case.</p>

                     </div>
                  </div>

                  <div>
                     <div className='testimonials'>
                        <div className='stars'>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                        <div className="stars__name">Karina</div>
                        <p>I was at a consultation with Igor once on receiving a green card and was very pleased. I got very detailed answers to all my questions. It feels that Igor is very professional and has extensive experience in immigration cases. Therefore, I highly recommend!</p>
                     </div>
                  </div>

                  <div>
                     <div className='testimonials'>
                        <div className='stars'>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                        <div className="stars__name">Venera</div>
                        <p>Igor A. Voloshen is the best attorney in town. He is very knowledgeable, professional and and efficient. Thank you for all your hard work and efforts.
I would highly recommend him to everyone to represent and handle your case.</p>
                     </div>
                  </div>

                  <div>
                     <div className='testimonials'>
                        <div className='stars'>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                        <div className="stars__name">Younous</div>
                        <p>Igor is one of the best lawyer that you need him to get you the job done; He will fight for your case not matter how long your case will take. He is a real fighter lawyer and very honest person. I wish I can give him more than five stars.</p>
                     </div>
                  </div>

                  <div>
                     <div className='testimonials'>
                        <div className='stars'>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                        <div className="stars__name">Lara L.</div>
                        <p>Большое вам спасибо за помощь, я вам очень благодарна и жалею только о том, что мне раньше вас не посоветовали.</p>
                     </div>
                  </div>

                  <div>
                     <div className='testimonials'>
                        <div className='stars'>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                        <div className="stars__name">Demetri</div>
                        <p> Igor is highly respected in the legal community with a strong reputation for client advocacy and dedication. I endorse Igor without hesitation.</p>
                     </div>
                  </div>
               </Slider>
            </div>
         </div>
      );
   }
}


export default withNamespaces()(Testimonials);