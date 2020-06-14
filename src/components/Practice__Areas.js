import React from "react";
import Speaklanguage from './Speak__language';

function Practice__Areas() {
   return (
      <div>
      <div className='container'>
         <div className='practice__areas'>
         <p>Our firm’s Immigration Law practice is divided into numerous tracks, including the preparation and filing of family-based immigration petitions (including consular processing and adjustment of status in the United States), fiance (marriage based) visas (K-1), student visas (F-1), business or employment-based immigration, investment visas (EB-5), inadmissibility waivers, removal/deportation defense, including the pursuit of asylum and refugee based forms of protection, as well as cancellation of removal.</p>
         <p>Our firm also represents clients in various humanitarian forms of relief, including relief for survivors of domestic violence (VAWA) and human trafficking (T Visas), crime victims (U Visas), and unaccompanied minors. We regularly represent clients during the naturalization application process before the U.S. Citizenship and Immigration Services and do not hesitate to zealously advocate for our client’s right to obtain citizenship.</p>
         <p>At the law offices of VOLOSHEN LAW FIRM P.C, we provide our clients with full-service immigration services across the United States.</p>
         </div>
         <div className='practice__img'>
        
            <div className='tr'><img src='../img/Immigration-Law-Vdlaw.jpg' alt='quality service you can trust.'></img></div>
            <div className='tr'><img src='../img/Vd-law-Immigration.jpg' alt='quality service you can trust.'></img></div>
         </div>
      </div>
       <Speaklanguage />
       </div>
   )
}

export default Practice__Areas;