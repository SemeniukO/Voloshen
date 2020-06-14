import React from "react";

function MainText() {
   return (
      <div className='container'>
         <div className='text__main text__h2'>We are a multi-faceted law firm focused on results.</div>
         <p className='flex__p'>At VOLOSHEN LAW FIRM P.C, we are committed to providing our clients with “quality service they can trust.” We treat our clients with respect and give our clients full attention, along with personal service, reasonable fees and quick access to an experienced and knowledgeable attorney.</p>
         <div className='flex__column'>
            <div className='image__service'>
               <img src='../img/Vd-law-Immigration.jpg' alt='quality service you can trust.'></img>
            </div>
            <div className='text'>
               <div className='text__h2'>Immigration Law</div>
               <p>At the law offices of VOLOSHEN LAW FIRM P.C, we provide our clients with full-service immigration services, which includes agency-based practice and litigation practice across the United States.</p>
            </div>
         </div>
      </div>
   )
}

export default MainText;