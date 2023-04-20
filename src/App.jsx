import './App.css'
import CopyImg from"./assets/images/icon-copy.svg"; 
import Check from "./assets/images/icon-check.svg";
import Arrow from "./assets/images/icon-arrow-right.svg";

function App() {

    

 return ( <div>
           <p className='title'>Password Generator</p>
           <div className='copyContainer'>
              <p className='copyText'>P4$5W0rD!</p>
              <img className='CopyImg' src={CopyImg} alt="" />
           </div>

           <div className='Card'>
                 <div className='titleContainer'>
                   <p className='cardTitle'>Character Length</p>
                   <p className='characterLength'>10</p>
                 </div>
              
            <div className="sliderContainer">
                 <div className="slideBackground"></div>
                 <input className="slider" type="range" min="0" max="20" value="0" id="ranger"/>
           </div>

              
               <div className='checkboxContainer first'>
                   <div className='firstCheckBox'></div>
                   <p className='checkboxText'>Include Uppercase Letters</p>
               </div>  

               <div className='checkboxContainer'>
                   <div className='secondCheckBox'></div>
                   <p className='checkboxText'>Include Lowercase Letters</p>
               </div>
                  
               <div className='checkboxContainer'>
                   <div className='thirdCheckBox'></div>
                   <p className='checkboxText'>Include Numbers</p>
               </div>


               <div className='checkboxContainer'>
                   <div className='fourthCheckBox'></div>
                   <p className='checkboxText'>Include Symbols</p>
               </div>


               <div className='measureContainer'> 
                   <p className='strength'>STRENGTH</p>
                   <div className='strengthBoxes'>
                      <p className='strengthLevel'></p>
                      <div className='tooWeakBox'></div>
                      <div className='weakBox'></div>
                      <div className='mediumBox'></div>
                      <div className='strongBox'></div>
                   </div>
               </div>
                

               <div className='generateContainer'> 
                     <p className='generate'>GENERATE</p>
                     <img className='Arrow' src={Arrow} alt="" />
              </div>
             
             
             </div>
           
           
         </div>
 );

};








export default App
