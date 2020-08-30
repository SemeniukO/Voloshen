import React from "react";
import {Link} from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

export function scrollTo(){
   window.scrollTo(0, 0)
}
function Lawyer({ t }) {
   return (
      <div className='container'>
         <div className='lawyer'>
            <div className='text__main text__h2'>{t('Meet The Lawyer')}</div>
            <p className='flex__p'>{t('Lawyer text')}</p>
            <div className="directions__items lawyer__column">
               <img src='../img/Igor-A.-Voloshen-Esquire.webp' alt='Igor A. Voloshen'></img>
               <div className='text'>
                  <div className="text__h2 text-bkcolor">{t('Igor A. Voloshen')}</div>
                  <div className='lawyer__profile'>
                     <p>{t('Voloshen text')}</p>
                     <div className='text__center'><Link to='/attorney' onClick={scrollTo}>{t('SEE FULL PROFILE')}&rarr;</Link></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default withNamespaces()(Lawyer);