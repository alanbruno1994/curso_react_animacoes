import React, { useState } from 'react';
import './App.css';
import ModalOne from './components/ModalOne';
import ModalTwo from './components/ModalTwo';

function App() {
 const [enableOne,setEnableOne] = useState(false)
 const [enableTwo,setEnableTwo] = useState(false)

  return (
    <div className="App">
      <button onClick={_=>setEnableOne(true)}>Modal One</button>
      <ModalOne enableOne={enableOne} setEnableOne={setEnableOne}/>      
      <ModalTwo enable={enableTwo} setEnable={setEnableTwo}/>
      <button onClick={_=>setEnableTwo(true)}>Modal Two</button>
    </div>
  );
}

export default App;
