import React from "react";

function Speaklanguage() {
   return (
      <div className='speak__language'>
         <div className='container'>
            <div className='speak__flex'>
               <div className='speak__font'>We speak your <span className='font__white'>language</span>
               </div>
               <div className='speak__right'>
                  <div className='language__font'>English</div>
                  <div className='language__font'>Русский</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Speaklanguage;