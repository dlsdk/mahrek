import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import React, { useState } from 'react';
import {faSquareMinus,faSquarePlus,faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';


function App() {

  const [count,setCount] = useState(0);
  const [isNegative,setIsNegative] = useState(false);
  const [increment,setIncrement] = useState(1);

  const handleClick = (increment) => {
    
    let newCount = count + increment;
    let negative = false;
      
    if (newCount < 0)
    {
      newCount = 0;
      negative = true;
    }
    setCount(newCount);
    setIsNegative(negative);
  }

  const handleInputChange = (event) => {
    const value  = event.target.value;
    
    if (!isNaN(value) && parseInt(value) >= 0)
      setIncrement(parseInt(value));
  
  };

  return (
    
    <div className="App">
      <h1 className="title">Counter App</h1>
      <div className='container d-flex justify-content-center'>
        <div className="card text-center">
          <div className="card-body d-flex justify-content-around align-items-center">  
            <FontAwesomeIcon className='minplusicon' onClick={() => handleClick(-increment)} icon={faSquareMinus}/>
            <h1 className='count'>{count}</h1>
            <FontAwesomeIcon   className='minplusicon' onClick={() => handleClick(increment)} icon={faSquarePlus}/>
          </div>
        </div>
      </div> 
        {isNegative && 
          <>  
            <p  className='warningmessage'>
              <FontAwesomeIcon className='warnicon' icon={faTriangleExclamation} /> 
              Number cannot be negative!   
            </p>
          </>
        }  
      <div>
        <label for="val">Increase/decrease value : </label>
        <input id="val" type="text" className='isnegative ? m-0 : m-4' placeholder={increment} onChange={handleInputChange}></input> 
      </div>
    </div> 
   
  );
}

export default App;
