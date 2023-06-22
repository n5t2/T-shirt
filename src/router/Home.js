import React from 'react'
import '../App.css';
import FootballTop from "../Photos/Psg.jpg"
import Wings from "../Photos/Wings.jpg"
import R from "../Photos/R.jpg"
import KidsNike from "../Photos/KidsNike.jpg"

export default function Home(){
  return(
    <div className= "Content">
      <img src={FootballTop} alt='FootballTop' width='300px' height='300px'/>
      <img src={Wings} alt='Wings' width='300px' height='300px'/>
      <img src={R} alt="R"  width='300px' height='300px'/>
      <img src={KidsNike} alt="KidsNike" width='300px' height='300px'/>
    
    
    
    </div>
  )

}


