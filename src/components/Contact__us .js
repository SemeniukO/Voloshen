import React from "react";
import Speaklanguage from './Speak__language';
import { withNamespaces } from 'react-i18next';

function Contact__us({ t }) {
   document.title = 'Contact us - VOLOSHEN LAW FIRM P.C'
   return (
      <div className="">
         <div className='container'>
            <div className='directions contacts'>

               <div className='contacts__loc'>
                  <div className='text__h2'>VOLOSHEN LAW FIRM P.C</div>


                  <div className="logo__location"><span role="img" aria-label='direction'>&#127970;</span> 611 County Line Road, Suite A Huntingdon Valley, PA 19006</div>
                  <div className="">
                     <div><a href="tel:215-437-7854"> <span role="img" aria-label='phone number'>&#9742;</span> (215) 437-7854</a></div>
                     <div> <a href="tel:215-494-5494"><span role="img" aria-label='phone number'> &#9742;</span> (215) 494-5494</a></div>
                  </div>
                  <div><a href="mailto:Igor@vdlawfirm.com" target="_blank" rel="noopener noreferrer">
                  <span role="img" aria-label='email'>&#9993;</span> Igor@vdlawfirm.com
                  </a></div>

                  <div className='connect__us'>{t('CONNECT WITH US')}</div>
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
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?q=VOLOSHEN%20LAW%20FIRM%20P.C&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
                  aria-label="VOLOSHEN LAW FIRM P.C">
               </iframe>
            </div>
         </div>

         <Speaklanguage />
      </div>
   )
}

export default withNamespaces()(Contact__us);