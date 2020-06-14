import React from 'react';
import {Link} from 'react-router-dom';
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';

function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "nav__ul") {
     x.className += " responsive";
   } else {
     x.className = "nav__ul";
   }
 }

function Menu({ t }) {
   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }
   return (
      <div>
         <div>
      <button onClick={() => changeLanguage('ru')}>ru</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      
    </div>
         <div className='nav__main'>
            <div className='container'>
            <div className='nav__burger' ><div className='flex__grow'><Link to='/' onClick={myFunction}>Home</Link></div> <img src='../img/signs.svg' alt='menu' width='34' onClick={myFunction}></img></div>
               <ul className='nav__ul' id="myTopnav">    
                  <Link className='nav-items hide__class' to='/' onClick={myFunction}>{t('Home')}</Link>       
                  <Link className='nav-items tr' to='/attorney' onClick={myFunction}>{t('Attorney')}</Link>
                  <Link className='nav-items tr' to='/practice-area' onClick={myFunction}>Practice Areas</Link>
                  <li className='nav-items tr' onClick={myFunction}>Consultations</li>
                 <Link className='nav-items tr' to='/our-results' onClick={myFunction}>Our Results</Link>
                  <Link className='nav-items tr' to='/contacts' onClick={myFunction}>Contact</Link>
               </ul>               
            </div>
         </div>
         
      </div>
   )
}

export default withNamespaces()(Menu);