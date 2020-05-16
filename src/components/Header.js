import React from 'react';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';


function Header() {
   return (
      <div className="container">
         <header>
            <div className='logo'>
               <div className='logo__img'>
                  <div className='logo__img1'>
                     <img src='../img/logo_left.webp' alt='Voloshen Low Firm P.C.'></img>
                  </div>
                  <div className='logo__text'>
                     <h1>Voloshen Low Firm P.C.</h1>
                     <h2>Integrity, Quality, Justice</h2>
                  </div>
               </div>
               <div className="logo__info">
                  <div className='logo__contacts'>
                     <div className="logo__phone">
                        <CallIcon /><a href="tel:215-437-7854">(215) 437-7854</a>
                     </div>
                     <div className="logo__email">
                        <MailOutlineIcon /><a href="mailto:someone@yoursite.com">igor@voloshenlaw.com</a>
                     </div>
                     <div className="logo__social">
                        <a className="social-icons__link" href="https://www.facebook.com/voloshenlawfirm" target="_blank" rel="noopener noreferrer">
                           <img src='../img/icons8-facebook.svg' alt='Voloshen Low Firm P.C. facebook page' width='26'></img>
                        </a>
                        <a className="social-icons__link" href="https://twitter.com/esqigor" target="_blank" rel="noopener noreferrer">
                           <img src='../img/icons8-twitter.svg' alt='Voloshen Low Firm P.C. twitter page' width='24'></img>
                        </a>
                        <a className="social-icons__link" href="https://www.youtube.com/channel/UCEotd7FHkfIvx0Dp5IJ1pGQ" target="_blank" rel="noopener noreferrer">
                           <img src='../img/icons8-play-button.svg' alt='Voloshen Low Firm P.C. youtube channel' width='29'></img>
                        </a>
                        <a className="social-icons__link" href="https://www.google.com/maps/place/611+County+Line+Rd+Suite+A,+Huntingdon+Valley,+PA+19006" target="_blank" rel="noopener noreferrer">
                           <img src='../img/pin.svg' alt='Voloshen Low Firm P.C. address' width='25'></img>
                        </a>
                     </div>
                  </div>
                  <div className='logo__line'></div>
                  <div className="logo__adress">
                     <address>
                        <HomeIcon />
                        <div className='address'>
                           <a className="social-icons__link" href="https://www.google.com/maps/place/611+County+Line+Rd+Suite+A,+Huntingdon+Valley,+PA+19006" target="_blank" rel="noopener noreferrer">611 County Line Road, Suite A, Huntingdon Valley, PA 19006 </a>
                        </div>
                     </address>
                  </div>
               </div>
            </div>
         </header>
      </div>
   )

}

export default Header;