import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const KeyDown = (e) =>{
    if (e.key === "Enter"){
      setName(e.target.value)
      e.target.value = ""
    }
  }

  const [name, setName] = useState("marco")

  return (
    <div className="App">
      <input type="text" placeholder='inserisci nome' onKeyDown={(e)=>KeyDown(e)}/>
      <p>ti chiami: {name}</p>
    </div>
  );
}

export default App;
