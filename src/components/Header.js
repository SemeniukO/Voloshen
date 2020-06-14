import React from 'react';

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
                  <div className='logo__contacts'>
                     <div className="logo__phone">
                        <a href="tel:215-437-7854"> &#9742; (215) 437-7854</a>
                     </div>               
                     <div className="logo__social">
                     <a className="social-icons__link" href="mailto:Igor@vdlawfirm.com" target="_blank" rel="noopener noreferrer">
                           <img src='../img/interface.svg' alt='Voloshen Low Firm P.C. email' width='23' height='25'></img>
                        </a>
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
                     <div className='logo__loc'>
                     <a className="logo__location" href="https://www.google.com/maps/place/Voloshen+Law+Firm,+P.C./@40.1627907,-75.0562785,15z/data=!4m5!3m4!1s0x0:0xc80e7585a91c73d8!8m2!3d40.1627907!4d-75.0562785" target="_blank" rel="noopener noreferrer">
                           <img src='../img/google-maps.svg' alt='Voloshen Low Firm P.C. address' width='30'></img>
                        </a>
                     </div>
                  </div>    
            </div>
         </header>
      </div>
   )

}

export default Header;