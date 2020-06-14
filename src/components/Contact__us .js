import React from "react";
import Speaklanguage from './Speak__language';

function Contact__us() {
   return (
      <div className="">
         <div className='container'>
            <div className='directions contacts'>

               <div className='contacts__loc'>
                  <div className='text__h2'>VOLOSHEN LAW FIRM P.C</div>


                  <a className="logo__location" href="https://www.google.com/maps/place/Voloshen+Law+Firm,+P.C./@40.1627907,-75.0562785,15z/data=!4m5!3m4!1s0x0:0xc80e7585a91c73d8!8m2!3d40.1627907!4d-75.0562785" target="_blank" rel="noopener noreferrer">
                     611 County Line Road, Suite A
                     Huntingdon Valley, PA 19006
                        </a>
                  <div className="">
                     <div><a href="tel:215-437-7854"> &#9742; (215) 437-7854</a></div>
                     <div> <a href="tel:215-494-5494"> &#9742; (215) 494-5494</a></div>
                  </div>
                  <div><a href="mailto:Igor@vdlawfirm.com" target="_blank" rel="noopener noreferrer">
                     <img src='../img/interface.svg' alt='Voloshen Low Firm P.C. email' width='20'></img> &#9993; Igor@vdlawfirm.com
                  </a></div>

                  <div className='connect__us'>CONNECT WITH US</div>
                  <div className=''>
                     <a className="social-icons__link" href="https://www.facebook.com/voloshenlawfirm" target="_blank" rel="noopener noreferrer">
                        <img src='../img/icons8-facebook.svg' alt='Voloshen Low Firm P.C. facebook page' width='26'></img>
                     </a>
                     <a className="social-icons__link" href="https://twitter.com/esqigor" target="_blank" rel="noopener noreferrer">
                        <img src='../img/icons8-twitter.svg' alt='Voloshen Low Firm P.C. twitter page' width='24'></img>
                     </a>
                     <a className="social-icons__link" href="https://www.youtube.com/channel/UCEotd7FHkfIvx0Dp5IJ1pGQ" target="_blank" rel="noopener noreferrer">
                        <img src='../img/icons8-play-button.svg' alt='Voloshen Low Firm P.C. youtube channel' width='26'></img>
                     </a>
                  </div>
               </div>
               <iframe
                  width="100%"
                  height="300px"
                  title="VOLOSHEN LAW FIRM P.C"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?q=VOLOSHEN%20LAW%20FIRM%20P.C&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
                  aria-label="VOLOSHEN LAW FIRM P.C">
               </iframe>
            </div>
         </div>

         <Speaklanguage />
      </div>
   )
}

export default Contact__us;