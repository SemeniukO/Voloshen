import React from "react";
import Speaklanguage from './Speak__language';
import { withNamespaces } from 'react-i18next';

function Practice__Areas({ t }) {
   document.title = 'Practice Areas - VOLOSHEN LAW FIRM P.C'
   return (
      <div>
      <div className='container'>
         <div className='practice__areas'>
         <p>{t('practice__areas p1')}</p>
         <p>{t('practice__areas p2')}</p>
         <p>{t('practice__areas p3')}</p>
         </div>
         <div className='practice__img'>
        
            <div className='tr'><img src='../img/Immigration-Law-Vdlaw.webp' alt='quality service you can trust.'></img></div>
            <div className='tr'><img src='../img/Vd-law-Immigration.webp' alt='quality service you can trust.'></img></div>
         </div>
      </div>
       <Speaklanguage />
       </div>
   )
}

export default withNamespaces()(Practice__Areas);