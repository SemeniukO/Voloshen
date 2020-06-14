import React from "react";
import Speaklanguage from './Speak__language';

function Our__Results() {
   let arr = [
      {
         name: 'Adjustment of Status for Parent of U.S. Citizen',
         date: 'June 28, 2013',
         area: 'Immigration',
         outcome: 'LPR status granted',
         description:'Successfully adjusted status for a parent of a U.S. Citizen petitioner, while overcoming extensive challenges including income inquiries and biometric problems.'
      },
      {
         name: 'Adjustment of Status for Ph.D student',
         date: 'April 16, 2013',
         area: 'Immigration',
         outcome: 'LPR – 10 year green card',
         description:'A Ph.D student in F-1 status successful in attaining LPR status and a 10 year green card via adjustment of status as a result of marriage to a US citizen in 2009.'
      },
      {
         name: 'Defensive Asylum in Removal Proceedings',
         date: 'April 1, 2013',
         area: 'Immigration',
         outcome: 'Relief Granted – Asylum',
         description:'Defensive asylum application of husband and wife from the Republic of Belarus, based on “political opinion” and participation in “civil society.”'
      },
      {
         name: 'Adjustment of Status in Removal Proceeding',
         date: 'January 7, 2013',
         area: 'Immigration',
         outcome: 'Relief Granted – Permanent Residence',
         description:'Adjustment of Status based on marriage to a U.S. Citizen spouse, after being placed in removal proceeding after an arrest and completion of ARD program.'
      },
      {
         name: 'Naturalization Application Granted',
         date: 'December 19, 2012',
         area: 'Immigration',
         outcome: 'Citizenship Granted',
         description:'Client was initially denied relief based on failure to file income tax returns over 2 years and a DUI conviction over 10 years prior to the N-400 application filing.'
      },
      {
         name: 'Administrative Appeal for SEVIS Designation',
         date: 'August 10, 2012',
         area: 'Immigration',
         outcome: 'Relief Granted – SEVIS designation granted',
         description:'Successfully appealed a denial by U.S. Department of Homeland Security to designate a local secondary educational institution to accept F-1 and M-1 students for educational programs in the United States.'
      },
      {
         name: 'Naturalization for an Elderly/Ill Client',
         date: 'July 12, 2011',
         area: 'Immigration',
         outcome: 'Citizenship attained',
         description:'Assisted an elderly and ill client seeking to Naturalize, in obtaining his U.S Citizenship after multiple attempts and failures due to lack of English proficiency and memory problems. Worked with client over 4 months to prepare him for the interview and accompanied him to the interview.'
      },
      {
         name: 'O visas for a Choral Group from Sankt Petersburg',
         date: 'May 10, 2011',
         area: 'Immigration',
         outcome: 'O visas attained',
         description:'A choral group of five performers brought to the United States to perform at church-based events.'
      },
      {
         name: 'Change of Status B-2 to F-1',
         date: '',
         area: '',
         outcome: 'Change of Status (I-539) to F-1 Attained',
         description:'Successfully attained change of status from B-2 to F-1 for multiple clients from Russian Federation, Ukraine, and Poland.'
      },
   ]
   return (
      <div>
      <div className='container'>
          {arr.map(hit =>
            <div key={hit.name}>
               <div className='our__results-rows'>
                  <div className='attorney__area'>
                     <div className="our__results">
                        <div className="text-bkcolor result">{hit.name}</div>
                        <div className='results__m'>
                           <ul className='qqq'>
                              <li className='attorney__list'><b>Case Conclusion Date:</b> {hit.date}</li>
                              <li className='attorney__list'><b>Practice Area:</b> {hit.area}</li>
                              <li className='attorney__list'><b>Outcome:</b> {hit.outcome}</li>
                              <li className='attorney__list'><b>Description:</b> {hit.description}</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
       <Speaklanguage />
       </div>
   )
}

export default Our__Results;