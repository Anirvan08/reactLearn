import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 // let counter = 5;
 let [counter, setCounter] = useState(5);



  const addValue = () => {
    if(counter === 20)
      return;
    setCounter(counter + 1);
    console.log("value added", counter);
  }

  const decreaseValue = () => {
    if(counter === 0)
      return;
    setCounter(counter-1);
  }

  return (
    <>
     <h2>React day-2</h2>
     <h3> Counter Value : {counter}</h3>

     <button onClick={addValue}>Add Value</button>
     <br /><br />
     <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
