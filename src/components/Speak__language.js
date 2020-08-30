import React from "react";
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';

function Speaklanguage({ t }) {
   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
   }
   return (
      <div className='speak__language'>
         <div className='container'>
            <div className='speak__flex'>
               <div className='speak__font'>{t('We speak your')}<span className='font__white'>{t('language')}</span>
               </div>
               <div className='speak__right'>
                  <div className='language__font' onClick={() => changeLanguage('en')}>English</div>
                  <div className='language__font' onClick={() => changeLanguage('ru')}>Русский</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default withNamespaces()(Speaklanguage);