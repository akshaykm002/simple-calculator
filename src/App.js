import { useState } from 'react';
import './App.css';

function App() {
  const [value,setValue]=useState('')
  return (
  <>
  <div className='backG'>
  <h1 className='title' >Simple Calculator</h1>

    
    <div className='calculator'>
      <form action="">
        <div>
          <input type="text" placeholder='0' value={value} />

        </div>
        <div>
          <input type="button" value='AC' onClick={()=>setValue('')}/>
          <input type="button" value='DEL' onClick={()=>setValue(value.slice(0,-1))}/>
          {/*value.slice(0,-1) is a method used on strings and arrays in JavaScript. It extracts a portion of the string or array and returns it. In this case, it's extracting all elements from the start (0 index) up to, but not including, the last element (-1 index). This effectively removes the last character from value. */}
          <input type="button" value='.' onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='/' onClick={(e)=>setValue(value + e.target.value)}/>
        </div>
        <div>
          <input type="button" value='7' onClick={(e)=>setValue(value + e.target.value)} />
          <input type="button" value='8' onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='9' onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='*' onClick={(e)=>setValue(value + e.target.value)}/>
        </div>
        <div>
          <input type="button" value='4' onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='5' onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='6' onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='+'  onClick={(e)=>setValue(value + e.target.value)}/>
        </div>
        <div>
          <input type="button" value='1' onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='2' onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='3' onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='-' onClick={(e)=>setValue(value + e.target.value)}/>
        </div>
        <div>
          <input type="button" value='00' onClick={(e)=>setValue(value + e.target.value)}/>
          <input type="button" value='0' onClick={(e)=>setValue(value + e.target.value)}/>
          <input className='equal' type="button" value='=' onClick={()=>setValue(eval(value))}/>
          {/* here i used eval , a built in function for the calculations */}
          {/* eval() will evaluate the mathematical expresssion stored in the 'value' */}
        </div>
        
      </form>
    </div>
  </div>
  </>
  );
}

export default App;
