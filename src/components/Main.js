import React from 'react';
import Award from './Award';
import Lawyer from './Lawyer';
import Speaklanguage from './Speak__language';
import Directions from './Directions';
import MainText from './MainText';
import MainImage from './MainImage';
import Testimonials from './Testimonials'

export default function Main() {
   return (
      <div>
         <MainImage />
         <MainText />
         <Directions />        
         <Lawyer />       
         <Testimonials />
         <Award />
         <Speaklanguage />
      </div>
   )
}