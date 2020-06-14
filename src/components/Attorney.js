import React from "react";
import Speaklanguage from './Speak__language';
import Award from './Award';

function Attorney() {
   return (
      <div>
         <div className='container'>
            <div className='attorney'>
               <div className='attorney__data'>
                  <div className="attorney__img"><img src='../img/Igor-A.-Voloshen-Esquire.webp' alt='Igor A. Voloshen'></img></div>
                  <div className='attorney__area'>
                     <div className="attorney__practice">
                        <div className="text__h2 text-bkcolor">Igor A. Voloshen, Esquire</div>
                        <div className='attorney__m'>
                        <div className='attorney__h'>Areas of Practice</div>
                        <li className='attorney__list'>Immigration</li>
                        <li className='attorney__list'>Personal injury</li>
                        <li className='attorney__list'>Transportation</li>
                        <li className='attorney__list'>Divorce and separation</li>
                        <li className='attorney__list'>Trademark application</li>
                        </div>
                     </div>
                     
                  </div>
                  <div className="logo__attorney">
                        <div className='attorney__info'> <a href="../data/Igor-Voloshen.vcf" download>DOWNLOAD VCARD</a></div>
                        <div className='attorney__info'>CALL: <a href="tel:215-437-7854">(215) 437-7854</a></div>
                        <div className='attorney__info'><a href="mailto:Igor@vdlawfirm.com<">Igor@vdlawfirm.com</a></div>
                     </div>
               </div>
               <div className='attorney__biography'>
                  <div className='text__biography'>
                     <p>Igor A. Voloshen is an experienced and accomplished immigration and deportation defense attorney. He is a partner at VOLOSHEN LAW FIRM P.C, a Pennsylvania law firm focusing on immigration law.</p>
                  <p>Igor was graduate of the University of Pittsburgh in Pittsburgh, Pennsylvania, with a Bachelor of Arts degree in Political Science and Business (magna cum laude). While completing his undergraduate degree at the University of Pittsburgh, Igor was active with the University Center for International Studies, completing coursework in the Center for Russian & East European Studies and the Center for West European Studies, thereby earning an undergraduate Certificate in Russian & East European Studies. Igor focused his coursework on the Enlargement Policy of the European Union, in anticipation of the year 2004 accession of ten new EU member nations. He served in the capacity of an officer for several student organizations related to the EU agenda, including Model United Nations and Model European Union. Parallel to his undergraduate studies, Igor served as an undergraduate assistant to the Executive Director of the European Union Studies Association (EUSA), the premier scholarly organization for the study of the European Union in the United States.</p>
                  <p>Upon graduation from the University of Pittsburgh with a Bachelor’s Degree, Igor remained in City of Pittsburgh and attended the Graduate School of Public & International Affairs (GSPIA) at the University of Pittsburgh on a merit scholarship, enrolling in the Global Political Economy program, which led to the award of a Master of Public & International Affairs Degree and a Graduate Certificate in Russian Studies. During graduate school, he served in the capacity of a Graduate Student Assistant within the Center for Russian & East European Studies, organizing the Undergraduate Research Symposium on subjects ranging from arts, humanities, and social sciences relating to Russia, East Europe, and West Europe/European Union.</p>
                  <p>After attaining his graduate degree, Igor went on to attend the West Virginia University College of Law in Morgantown, West Virginia. During law school, he was an Assistant Editor of the West Virginia Law Review, Volume 111 and served as the President of the Alternative Dispute Resolution (ADR) Organization. He was an active member of several other student organizations, including the West Virginia Association for Justice, Coalition Against Race & Gender Violence, and Mock Trial. Subsequent to the completion of his first year of law school, Igor spent a summer as a Legal Intern with the New Jersey Office of the Attorney General, working within the Office of the Insurance Fraud Prosecutor (OIFP) in Cherry Hill, New Jersey.</p>
                  <p>Upon graduation from law school, he went into private practice, focusing his practice on immigration law and deportation defense. Igor represents individuals all over the United States, before the United States Citizenship and Immigration Services, Immigration Courts, the Board of Immigration Appeals, and Federal Courts. Igor is licensed in the State of New Jersey and is admitted to practice by the Supreme Court of New Jersey and the Federal District Court for New Jersey. His professional memberships include the American Immigration Lawyers Association (AILA), the New Jersey Bar Association (NJSBA), and the American Bar Association (ABA). In 2016, Igor was chosen as a Top 100 Lawyers in the practice area of Immigration Law, by the National Advocates, while in 2017 he was bestowed the honor of being chosen as a Top 40 Immigration Lawyer Under 40 in the state of Pennsylvania. Year after year Avvo.com ranks him as Superb and designates him as Client’s Choice. He is an immigrant from the Ukraine, having arrived to the United States as a Refugee in the 1990s, and currently resides in Philadelphia, Pennsylvania with his wife and two children.</p>
                  </div>
               </div>
            </div>
            <Award />
            
         </div>
         <Speaklanguage />
      </div>
   )
}

export default Attorney;