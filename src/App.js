import { useState } from 'react';
import './App.css';

// function App() {
//   const [counter, setCounter] = useState(0);
//   const incrementCounter = () => setCounter(counter + 1);
//   let decrementCounter = () => setCounter(counter - 1);
//   // if(counter<=0) {
//   //   decrementCounter = () => setCounter(1);
//   // }
//   return (
//     <div className='container'> 
//       <button id='countDown' onClickFunc={decrementCounter}>-</button>
//       <h1>{counter}</h1>
//       <button id='countUp' onClickFunc={incrementCounter}>+</button>
//     </div>
//   );
// }

function App() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(count => count + 1)
  }

  const subtract = () => {
    setCounter(count => count - 1)
  }
  
  return (
    
    <div className="container">
      <button className="button" onClick={subtract}>-</button>
      <h1 className='counter'>{counter}</h1>
      <button className="button" onClick={add}>+</button>
    </div>
  );
}

export default App;