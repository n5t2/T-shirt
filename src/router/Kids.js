import react from "react"
import '../App.css';
import KidsNike from "../Photos/KidsNike.jpg"
import WomenNike from '../Photos/WomenNike.jpg'
import KidsNike2 from '../Photos/KidsNike2.jpg'
import KidsNike3 from '../Photos/KidsNike3.jpg'
export default function Women(){
  return(
    <div className= "Content">
      <img src={KidsNike} alt='KidsNike' width='300px' height='300px'/>
      <img src={WomenNike} alt="WomenNike" width='300px' height='300px'/>
      <img src={KidsNike2} alt="KidsNike2" width='300px' height='300px'/>
      <img src={KidsNike3} alt="KidsNike3" width='300px' height='300px'/>
    
    
    </div>
  )

}


 
