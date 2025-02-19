import React, {useState} from 'react';
import './Calculator.css';


const Calculator = () => {
  const [result, setResult] = useState(" ");


const handleClick = (e) => {
      setResult(result.concat(e.target.name));

}
const clear  = () =>{
      setResult("");
}
// const backsapce = ()=>{
//       setResult(result.slice(0, -1));
// }
const calculate = () =>{
  try{
    setResult(eval(result). toString());
  }  catch(err){
    setResult("Error")
  }
 
}

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <form>
        <input type="text" value={result} />
      </form>

      <div className='keypad'>
         <button className="highlight line" onClick={clear} id="clear">AC</button>
         {/* <button className="highlight" onClick={backsapce} id="backspace">C</button> */}
         <button className="highlight" name="%" onClick={handleClick}>%</button>
         <button className="highlight" name="/" onClick={handleClick}>/</button>

         <button name="7" onClick={handleClick}>7</button>
         <button name="8" onClick={handleClick}>8</button>
         <button name="9" onClick={handleClick}>9</button> 
         <button className="highlight" name="*" onClick={handleClick}>x</button>

         <button name="4" onClick={handleClick}>4</button>
         <button name="5" onClick={handleClick}>5</button>
         <button name="6" onClick={handleClick}>6</button>
         <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>

         <button name="1" onClick={handleClick}>1</button>
         <button name="2" onClick={handleClick}>2</button>
         <button name="3" onClick={handleClick}>3</button>
         <button className="highlight" name="+" onClick={handleClick}>+</button>
         
         <button className="highlight" name="."  onClick={handleClick}>.</button>
         <button name="0" onClick={handleClick}>0</button>
         <button className="highlight line" onClick={calculate} id="result">=</button>
      

      </div>
    </div>
  );
}

export default Calculator;