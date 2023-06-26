
import React, { useState } from 'react';
import './App.css';

function App() {
  const [temp,setTemp] = useState(''); 
  const [conversion,setConversion]=useState('');
  const convertTemperature  = () =>{
    const value = parseFloat(temp);
    if(conversion === 'celsiusToFahrenheit'){
      const fahrenheit =  (value * 9/5) +32;
      return `${fahrenheit.toFixed(2)} °F`;
    }
    else{
      const celsius = (value -32) * 5/9;
      return `
      ${celsius.toFixed(2)} °C`;
    }
  };
  return (
    <div className='c'>
    <div className='box'>
      <h1>Temperature Converter</h1>
      <div className='input'>
      <div className='group'>
        <label htmlFor="temperature">Temperature:</label>
        <input type="text" id="temperature" value={temp} onChange={(e) => setTemp(e.target.value)}></input>
      </div>
      <div className='group'>
        <label htmlFor="conversion" >Conversion Type:</label>
        <select id="conversionType" value={conversion} onChange={(e) => setConversion(e.target.value)}>
        <option value="celsiusToFahrenheit">Celsius to Fahrenheit</option>
        <option value="fahrenheitToCelsius">Fahrenheit to Celsius</option>
        </select>
      </div>
      </div>
      <div className='group'>
        <strong>Result:</strong>
        <div id="output">{convertTemperature()}</div>
      </div>
      </div>
    </div>
  );
}

export default App;
   