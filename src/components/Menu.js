import React from 'react';

export default function Menu() {
   return (
      <div>
         <div className='nav__main'>
            <div className='container'>
               <ul className='nav__ul'>
                  <li className='nav-items'>Home</li>
                  <li className='nav-items'>Attorney</li>
                  <li className='nav-items'>Practice Areas</li>
                  <li className='nav-items'>Consultations</li>
                  <li className='nav-items'>Our Results</li>
                  <li className='nav-items'>Contact</li>
               </ul>
            </div>

         </div>
         <div className="image">
            <img src='../img/slider11.webp' alt='' />
            <div className="image__centered">Experience </div>
            <div className="image__centered image__line"></div>
            <div className="image__centered image__text">You can trust! </div>
         </div>
      </div>
   )
}