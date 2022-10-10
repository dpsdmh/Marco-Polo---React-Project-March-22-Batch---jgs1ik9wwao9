import React from 'react'
import '../styles/App.css';
import {useState} from 'react';

const App = () => {
  const [alternate,setAlternate] = useState(false);
  const handleClick = () =>{
  if(alternate == false){
  setAlternate(true)
  }
    else{
    setAlternate(false)
  }
  }
  return (
    <div id="main">
     <h1 id='marco-polo'>{alternate?"Polo":"Marco"}</h1>
    <button id="marco-polo-toggler" onClick={handleClick}>{ alternate?"Marco":"Polo"}</button>
    </div>
  )
}


export default App;
