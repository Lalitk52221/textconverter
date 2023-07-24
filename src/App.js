
import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Textconverter from './Component/Textconverter';

function App() {
  const [mode,setMode] =useState('light');

const togglemode=()=>{
  if (mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
}
else{
  setMode('light')
  document.body.style.backgroundColor="white"
  document.body.style = 'black'
}
}

  return (
    <>
    <Navbar title="Text-Converter" mode={mode} togglemode={togglemode}/>
    <Textconverter mode={mode}/>
 </>   
)
}

export default App;
