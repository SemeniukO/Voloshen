import React from "react";
import Speaklanguage from './Speak__language';
import Award from './Award';
import { withNamespaces } from 'react-i18next';

function Attorney({ t }) {
   document.title = 'Attorney - VOLOSHEN LAW FIRM P.C'
   return (
      <div>
         <div className='container'>
            <div className='attorney'>
               <div className='attorney__data'>
                  <div className="attorney__img"><img src='../img/Igor-A.-Voloshen-Esquire.webp' alt='Igor A. Voloshen'></img></div>
                  <div className='attorney__area'>
                     <div className="attorney__practice">
                        <div className="text__h2 text-bkcolor">{t('Igor A. Voloshen')}</div>
                        <div className='attorney__m'>
                        <div className='attorney__h'>{t('Areas of Practice')}</div>
                        <li className='attorney__list'>{t('Immigration')}</li>
                        <li className='attorney__list'>{t('Personal injury')}</li>
                        <li className='attorney__list'>{t('Transportation')}</li>
                        <li className='attorney__list'>{t('Divorce and separation')}</li>
                        <li className='attorney__list'>{t('Trademark application')}</li>
                        </div>
                     </div>
                     
                  </div>
                  <div className="logo__attorney">
                        <div className='attorney__info'> <a href="../data/Igor-Voloshen.vcf" download>{t('DOWNLOAD VCARD')}</a></div>
                        <div className='attorney__info'>{t('CALL')}<a href="tel:215-437-7854">(215) 437-7854</a></div>
                        <div className='attorney__info'><a href="mailto:Igor@vdlawfirm.com<">Igor@vdlawfirm.com</a></div>
                     </div>
               </div>
               <div className='attorney__biography'>
                  <div className='text__biography'>
                  <p>{t('attorney__biography p1')}</p>
                  <p>{t('attorney__biography p2')}</p>
                  <p>{t('attorney__biography p3')}</p>
                  <p>{t('attorney__biography p4')}</p>
                  <p>{t('attorney__biography p5')}</p>
                  </div>
               </div>
            </div>
            <Award />
            
         </div>
         <Speaklanguage />
      </div>
   )
}

export default withNamespaces()(Attorney);