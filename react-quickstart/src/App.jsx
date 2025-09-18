import './App.css'

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); 

  function positiveClick() {
    setCount(count + 1); 
  }

  function negativeClick() {
    setCount(count - 1); 
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={positiveClick}>Increase</button>
      <button onClick={negativeClick}>Decrease</button>
    </div>
  );
}

export default App;



