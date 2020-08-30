import React from "react";
import { withNamespaces } from 'react-i18next';

function Directions({ t }) {
   return (
      <div className='container'>
         <div className='practice'>
            <div className='practice__text'>{t('Practice Areas2')}</div>
            <div className='practice__line'></div>
         </div>
         <div className='directions'>
            <div className="directions__items">
               <img src='../img/id.svg' alt='menu' width='34' ></img>
               <div className='directions__item'>
                  <h3>{t('Permanent Residency - Greencard')}</h3>
                  <p>{t('Greencard text')}</p>
               </div>
            </div>
            <div className="directions__items">
               <img src='../img/courthouse.svg' alt='menu' width='34' ></img>
               <div className='directions__item'>
                  <h3>{t('Naturalization')}</h3>
                  <p>{t('Naturalization text')}</p>
               </div>
            </div>
            <div className="directions__items">
               <img src='../img/law.svg' alt='menu' width='34' ></img>
               <div className='directions__item'>
                  <h3>{t('Removal and Deportation Defense')}</h3>
                  <p>{t('Deportation Defense text')}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default withNamespaces()(Directions);