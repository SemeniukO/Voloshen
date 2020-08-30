import React from "react";
import { Link } from 'react-router-dom';
import Speaklanguage from './Speak__language';
import { withNamespaces } from 'react-i18next';

function Consultations({ t }) {
   document.title = 'Consultations - VOLOSHEN LAW FIRM P.C'
   return (
      <div>
         <div className='container'>
            <div className='attorney__biography'>
            <h2>Voloshen Law Firm — The Full-Service Immigration Attorney in Philadelphia, PA</h2>
               <p>Immigrating to the United States is an exciting, life-changing event, but it also comes with its fair share of
               headaches and barriers. Failing to overcome just one of these barriers could result in an unsuccessful application
               and set you back years in your pursuit of a life in the U.S. In fact, one of the most common reasons that applicants
               are unsuccessful is a failure to file an application correctly! Simple mistakes can cost unnecessary time, money, and stress, which is why it is best to
               put this high-stakes process in the hands of a qualified immigration attorney.</p>
               <h2>Quality Service You Can Trust</h2>
               <p>Not just any immigration attorney will do — you need one that understands your situation&#8217;s specific intricacies
               and how to move forward with your particular case. At Voloshen Law Firm, we know that every case has a personal impact
               and that we take on the responsibility of people&#8217;s lives, relationships, and dreams whenever we accept a new client.
               This is the passion that drives us and is precisely why you can trust our expert immigration attorney, Igor A. Voloshen, to put his all into any case.</p>
               <h2>Immigration Attorney Services in Philadelphia, PA</h2>
               <p>We are committed to accommodating all services that you may require from an immigration attorney. Some of our most popular services include:</p>
               <div className='consultations__list'>
                  <li>Permanent residency – Green Card applications</li>
                  <li>Naturalization processes</li>
                  <li>Removal and deportation defense</li>
                  <li>Student visa applications (F-1)</li>
                  <li>Business or employment-based immigration</li>
                  <li>Marriage-based visas (K-1)</li>
                  <li>Investment visas (EB-5)</li>
               </div>
               <h2>Our Humanitarian Work</h2>
               <p>In addition to offering a full range of immigration law services, we also represent clients in need of humanitarian relief. This includes:</p>
               <div className='consultations__list'>
                  <li>Survivors of domestic abuse (VAWA)</li>
                  <li>Victims of human trafficking (T visa)</li>
                  <li>Victims of crime (U visa)</li>
                  <li>Unaccompanied minors</li>
               </div>
               <p>Our efforts to help those who need it most are some of the most rewarding cases we take on and are proof of our commitment
               to providing everyone the legal counsel they deserve regardless of their background or status.</p>
               <h2>Your Experienced and Accomplished Immigration and Deportation Defense Attorney</h2>
               <p>Igor A. Voloshen is a partner and lead attorney at VOLOSHEN LAW FIRM P.C.</p>
               <p>Having graduated with a B.A. in Political Science and Business (<em>magna cum laude)</em>, he then gained an undergraduate
               Certificate in Russian and East European Studies, before going on to attain a Master of Public and International Affairs Degree
               and a Graduate Certificate in Russian Studies. Following this, he studied law at West Virginia University College of Law in
               Morgantown, where he was also an Assistant Editor of the West Virginia Law Review and served as the President of the
               Alternative Dispute Resolution (ADR) Organization.</p>
               <p>As a member of the American Immigration Lawyers
               Association (AILA), the New Jersey Bar Association (NJSBA), and the American Bar Association (ABA), he is one of the most
               highly accomplished immigration attorneys in the U.S.</p>
               <p>This status was confirmed in 2016 when he was included in the Top 100 Lawyers in the practice area of Immigration Law by the
               National Advocates.</p>
               <p>With Igor Voloshen and VOLOSHEN LAW FIRM P.C. in Philadelphia, PA, you are in safe hands and stand the best chance of securing the outcome you want from
               your case.</p>
               <p>If you are looking for an experienced and highly accomplished immigration attorney in Philadelphia, PA, look no further than
               VOLOSHEN LAW FIRM P.C. Our team of qualified experts in immigration law will take you through the process of your case
               step-by-step, so you have a complete understanding at every stage. We are currently taking on clients from the Philadelphia
               region and beyond. Please don&#8217;t hesitate to  <strong><Link to='/contacts'>{t('contact us')}</Link></strong> via phone at <strong><a href="tel:215-437-7854">  (215) 437-7854</a></strong> for a consultation today.</p>
         </div>
         </div>
         <Speaklanguage />
      </div>
   )
}

export default withNamespaces()(Consultations);