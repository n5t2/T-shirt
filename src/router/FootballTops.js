import react from "react"
import '../App.css';
import BorussiaDortmund from "../Photos/BorussiaDortmund.jpg"
import ManUTD from '../Photos/ManUTD.jpg'
import RealMadrid from '../Photos/RealMadrid.jpg'
import Psg from '../Photos/Psg.jpg'
export default function FootballTops(){
  return(
    <div className= "Content">
      <img src={BorussiaDortmund} alt='BorussiaDortmund' width='300px' height='300px'/>
      <img src={ManUTD} alt="ManUTD" width='300px' height='300px'/>
      <img src={RealMadrid} alt="RealMadrid" width='300px' height='300px'/>
      <img src={Psg} alt="Psg" width='300px' height='300px'/>
    
    
    </div>
  )

}






