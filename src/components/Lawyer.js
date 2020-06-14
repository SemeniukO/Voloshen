import React from "react";
import {Link} from 'react-router-dom';

export function scrollTo(){
   window.scrollTo(0, 0)
}
function Lawyer() {
   return (
      <div className='container'>
         <div className='lawyer'>
            <div className='text__main text__h2'>Meet The Lawyer</div>
            <p className='flex__p'>At the law offices of VOLOSHEN LAW FIRM P.C, we never hesitate to zealously advocate for your rights. Our Immigration Law specialist provide clients with full-service practice in Pennsylvania and New Jersey as well as Immigration practice across the United States.</p>
            <div className="directions__items lawyer__column">
               <img src='../img/Igor-A.-Voloshen-Esquire.webp' alt='Igor A. Voloshen'></img>
               <div className='text'>
                  <div className="text__h2 text-bkcolor">Igor A. Voloshen</div>
                  <div className='lawyer__profile'>
                     <p>Experienced and accomplished immigration and deportation defense attorney, representing individuals all over the United States.</p>
                     <div className='text__center'><Link to='/attorney' onClick={scrollTo}>SEE FULL PROFILE &rarr;</Link></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Lawyer;