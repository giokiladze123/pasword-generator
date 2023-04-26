import './App.css'
import {useState} from "react";
import CopyImg from"./assets/images/icon-copy.svg"; 
import Check from "./assets/images/icon-check.svg";
import Arrow from "./assets/images/icon-arrow-right.svg";

function App() {
           
    const [inputValue, setInputValue] = useState(0);
    const [uppercaseCheck, setUppercaseCheck] = useState(false);
    const [lowercaseCheck, setLowercaseCheck] = useState(false);
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false);


    const symbolsFunction = () => {
        setSymbols(!symbols)
    };

    const numbersFunction = () => {
        setNumbers(!numbers)
    };

    const lowercaseFunction = () => {
        setLowercaseCheck(!lowercaseCheck);
    };

    const uppercaseFunction = () => {
        setUppercaseCheck(!uppercaseCheck)
    };

    const handleInputChange = (event) => {
      setInputValue(event.target.value)
    };


    
  

 return ( <div>
           <p className='title'>Password Generator</p>
           <div className='copyContainer'>
              <p className='copyText'>P4$5W0rD!</p>
              <img className='CopyImg' src={CopyImg} alt="" />
           </div>

           <div className='Card'>
                 <div className='titleContainer'>
                   <p className='cardTitle'>Character Length</p>
                   <p className='characterLength'>{inputValue}</p>
                 </div>
              
            <div className="sliderContainer">
                 <div className="slideBackground" > </div>
                 <input className="slider" type="range" min="0" max="20" value={inputValue} id="ranger"  onChange={handleInputChange}/>
           </div>

              
               <div className='checkboxContainer first'>
                   <div className='firstCheckBox' onClick={ uppercaseFunction} style={{background:uppercaseCheck?"#A4FFAF":"transparent"}} >
                    {uppercaseCheck? <img className='FirstCheck' src={Check} alt="" />:null}
                    </div>
                   <p className='checkboxText'>Include Uppercase Letters</p>
               </div>  

               <div className='checkboxContainer'>
                   <div className='secondCheckBox' onClick={lowercaseFunction} style={{background:lowercaseCheck?"#A4FFAF":"transparent"}}>
                    {lowercaseCheck?<img className='secondCheck' src={Check} alt="" />:null }
                   </div>
                   <p className='checkboxText'>Include Lowercase Letters</p>
               </div>
                  
               <div className='checkboxContainer'>
                   <div className='thirdCheckBox' onClick={numbersFunction} style={{background:numbers?"#A4FFAF":"transparent"}}>
                    {numbers?<img className='thirdCheck' src={Check} alt="" />:null}
                   </div>
                   <p className='checkboxText'>Include Numbers</p>
               </div>


               <div className='checkboxContainer'>
                   <div className='fourthCheckBox' onClick={symbolsFunction} style={{background:symbols?"#A4FFAF":"transparent"}}>
                    {symbols?<img className='fourthCheckbox' src={Check} alt="" />:null}
                   </div>
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
