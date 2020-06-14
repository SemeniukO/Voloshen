import React from "react";

function Directions() {
   return (
      <div className='container'>
         <div className='practice'>
            <div className='practice__text'>PRACTICE AREAS</div>
            <div className='practice__line'></div>
         </div>
         <div className='directions'>
            <div className="directions__items">
               <img src='../img/id.svg' alt='menu' width='34' ></img>
               <div className='directions__item'>
                  <h3>Permanent Residency - Greencard</h3>
                  <p>Permanent residency refers to a person’s visa status. The person is allowed to reside indefinitely within a country of which he or she is not a citizen.</p>
               </div>
            </div>
            <div className="directions__items">
               <img src='../img/courthouse.svg' alt='menu' width='34' ></img>
               <div className='directions__item'>
                  <h3>Naturalization</h3>
                  <p>Naturalization is the process by which U.S. citizenship is granted to a foreign citizen or national after he or she fulfills the requirements established by Congress in the Immigration and Nationality Act (INA).</p>
               </div>
            </div>
            <div className="directions__items">
               <img src='../img/law.svg' alt='menu' width='34' ></img>
               <div className='directions__item'>
                  <h3>Removal and Deportation Defense</h3>
                  <p>Defense involves representing and advocating for immigrants who have already been admitted to the United States or are seeking admission to the United States at a Port of Entry.</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Directions;