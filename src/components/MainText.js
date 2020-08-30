import React from "react";
import { withNamespaces } from 'react-i18next';

function MainText({ t }) {
   return (
      <div className='container'>
         <div className='text__main text__h2'>{t('We are a multi-faceted')}</div>
         <p className='flex__p'>{t('we are committed')}</p>
         <div className='flex__column'>
            <div className='image__service'>
            <img src='../img/Vd-law-Immigration.webp' alt='quality service you can trust.'></img>
            </div>
            <div className='text'>
               <div className='text__h2'>{t('Immigration Law')}</div>
               <p>{t('Immigration Law text')}</p>
            </div>
         </div>
      </div>
   )
}

export default withNamespaces()(MainText);