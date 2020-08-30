import React from "react";
import { withNamespaces } from 'react-i18next';


function MainImage({ t }) {
    return (
      <div className="image">
         <img src='../img/slider11.webp' alt='Voloshen Low Firm P.C.' />
         <div className="image__centered">{t('Experience')}</div>
         <div className="image__centered image__line"></div>
         <div className="image__centered image__text">{t('You can trust!')}</div>
      </div>
   )
}

export default withNamespaces()(MainImage);