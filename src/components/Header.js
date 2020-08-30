import React from 'react';
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';

function Header({ t }) {
   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
   }
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
                     <h2>{t('Integrity, Quality, Justice')}</h2>
                  </div>
               </div>
               <div className='logo__contacts'>
                  <div className="logo__phone">
                     <a href="tel:215-437-7854"> &#9742; (215) 437-7854</a>
                  </div>
                  <div className='logo__loc'>
                     <a className="logo__location" href="https://www.google.com/maps/place/Voloshen+Law+Firm,+P.C./@40.1627907,-75.0562785,15z/data=!4m5!3m4!1s0x0:0xc80e7585a91c73d8!8m2!3d40.1627907!4d-75.0562785" target="_blank" rel="noopener noreferrer">
                        <img src='../img/google-maps.svg' alt='Voloshen Low Firm P.C. address' width='30'></img>
                     </a>
                  </div>
                  <div className="header__location"> <span role="img" aria-label='direction'>&#127970;</span> 611 County Line Road, Suite A Huntingdon Valley, PA 19006
                  </div>
                  <div className='speak__right'>
                  <div className='language__use' onClick={() => changeLanguage('en')}>eng</div>
                  <div className='language__use' onClick={() => changeLanguage('ru')}>рус</div>
               </div>
               </div>
            </div>
         </header>
      </div>
   )

}

export default withNamespaces()(Header);