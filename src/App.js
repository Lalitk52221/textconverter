
import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Textconverter from './Component/Textconverter';
import Alert from './Component/Alert';

function App() {
  const [mode,setMode] =useState('light');
  const [alert,setAlert] = useState('null');
  const showalert =(message,type)=>{
    setAlert({  
    msg: message,
    type: type
    })
  setTimeout(() => {
    setAlert(null);
  }, 1000);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }

const togglemode=(cls)=>{
  removeBodyClasses()
  document.body.classList.add('bg-'+cls);

  if (mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
    showalert("Dark mode has been enabled","success");
}
else{
  setMode('light')
  document.body.style.backgroundColor="white"
  document.body.style = 'black'
  showalert("light mode has been enabled","success");
}
}

  return (
    <>
    <Navbar title="Text-Converter" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <Textconverter mode={mode} showalert={showalert}/>
 </>   
)
}

export default App;
