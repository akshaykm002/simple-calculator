import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        setValue((prevValue) => prevValue + key);
      } else if (key === 'Enter') {
        event.preventDefault(); 
        setValue((prevValue) => eval(prevValue).toString());
      } else if (key === 'Backspace') {
        setValue((prevValue) => prevValue.slice(0, -1));
      } else if (key === 'Escape') {
        setValue('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className='backG'>
        <h1 className='title'>Simple Calculator</h1>

        <div className='calculator'>
          <form action=''>
            <div>
              <input type='text' placeholder='0' value={value} />
            </div>
            <div>
              <input type='button' value='AC' onClick={() => setValue('')} />
              <input type='button' value='DEL' onClick={() => setValue(value.slice(0, -1))} />
              <input type='button' value='.' onClick={(e) => setValue(value + e.target.value)} />
              <input type='button' value='/' onClick={(e) => setValue(value + e.target.value)} />
            </div>
            <div>
              <input type='button' value='7' onClick={(e) => setValue(value + e.target.value)} />
              <input type='button' value='8' onClick={(e) => setValue(value + e.target.value)} />
              <input type='button' value='9' onClick={(e) => setValue(value + e.target.value)} />
              <input type='button' value='*' onClick={(e) => setValue(value + e.target.value)} />
            </div>
            <div>
              <input type='button' value='4' onClick={(e) => setValue(value + e.target.value)} />
              <input type='button' value='5' onClick={(e) => setValue(value + e.target.value)} />
              <input type='button' value='6' onClick={(e) => setValue(value + e.target.value)} />
              <input type='button' value='+' onClick={(e) => setValue(value + e.target.value)} />
            </div>
            <div>
              <input type='button' value='1' onClick={(e) => setValue(value + e.target.value)} />
              <input type='button' value='2' onClick={(e) => setValue(value + e.target.value)} />
              <input type='button' value='3' onClick={(e) => setValue(value + e.target.value)} />
              <input type='button' value='-' onClick={(e) => setValue(value + e.target.value)} />
            </div>
            <div>
              <input type='button' value='00' onClick={(e) => setValue(value + e.target.value)} />
              <input type='button' value='0' onClick={(e) => setValue(value + e.target.value)} />
              <input className='equal' type='button' value='=' onClick={() => setValue(eval(value).toString())} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
