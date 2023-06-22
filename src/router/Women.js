


import react from "react"
import '../App.css';
import R from "../Photos/R.jpg"
import WomenNike from '../Photos/WomenNike.jpg'
import WomenNike2 from '../Photos/WomenNike2.jpg'
import WomenNike3 from '../Photos/WomenNike3.jpg'
export default function Women(){
  return(
    <div className= "Content">
      <img src={R} alt='R' width='300px' height='300px'/>
      <img src={WomenNike} alt="WomenNike" width='300px' height='300px'/>
      <img src={WomenNike2} alt="WomenNike2" width='300px' height='300px'/>
      <img src={WomenNike3} alt="WomenNike3" width='300px' height='300px'/>
    
    
    </div>
  )

}
