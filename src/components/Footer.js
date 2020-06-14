import React from "react";
import { Link } from 'react-router-dom';
import {scrollTo} from './Lawyer'

function Footer() {
   return (
      <footer>
         <div className='wrapper'>
            <div className='container'>
               <div className='footer'>
                  <div className='footer__column1'>
                  <div className='logo__img'>
                  <div className='logo__img1'>
                     <img src='../img/logo_left.webp' alt='Voloshen Low Firm P.C.'></img>
                  </div>
                  <div className='logo__text'>
                     <h1>Voloshen Low Firm P.C.</h1>
                     <h2>Integrity, Quality, Justice</h2>
                  </div>
               </div> 
                     <div className='footer__line'>We treat our clients with respect and give each and every one of our clients full attention, along with personal service, reasonable fees and quick access to an experienced and knowledgeable attorney.</div>
                  </div>

                  <div className='footer__column2'>
                     <div className='text__h2'>Law Firm</div>
                     <Link className='' to='/attorney' onClick={scrollTo}>About</Link>
                     <Link className='' to='/practice-area' onClick={scrollTo}>Legal Services</Link>
                  </div>

                  <div className='footer__column3'>
                     <div className='text__h2'>Resources</div>                               
                        <a className="social-icons__link" href="https://www.facebook.com/voloshenlawfirm" target="_blank" rel="noopener noreferrer">
                        Facebook
                        </a>
                        <a className="social-icons__link" href="https://twitter.com/esqigor" target="_blank" rel="noopener noreferrer">
                        Twitter
                        </a>
                        <a className="social-icons__link" href="https://www.youtube.com/channel/UCEotd7FHkfIvx0Dp5IJ1pGQ" target="_blank" rel="noopener noreferrer">
                        Youtube
                        </a>                    
                  </div>

                  <div className='footer__column4'>
                     <div className='text__h2'>Contact Details</div>
                     <div className="logo__phone">
                        <a href="tel:215-437-7854"> &#9742; (215) 437-7854</a>
                     </div>
                     <div className='logo__loc'>
                        <a className="logo__location" href="https://www.google.com/maps/place/Voloshen+Law+Firm,+P.C./@40.1627907,-75.0562785,15z/data=!4m5!3m4!1s0x0:0xc80e7585a91c73d8!8m2!3d40.1627907!4d-75.0562785" target="_blank" rel="noopener noreferrer">
                           611 County Line Road, Suite A
                           Huntingdon Valley, PA 19006
                        </a>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer;