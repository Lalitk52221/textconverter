import React, { useState } from 'react'


export default function Textconverter(props){
        
    const uppercasetext=()=>{
        let newtext= Textconverter.toUpperCase()
                Text(newtext)
    }
    const lowercasetext=()=>{
        let newtext=Textconverter.toLowerCase()
            Text(newtext)
    }
    const cleartext=()=>{
        console.log("clear" + Text) 
        let newtext = ""
            Text(newtext)
    }
    // const copytext=()=>{
    //     copy(Textconverter)
    // }
    const handlechange=(event) =>{
        console.log("onchange")
        Text(event.target.value)
    }

    const[Textconverter,Text]=useState('');

    return(
        
        <div className='container mb-4' style={{Color: props.mode==='dark'?'grey':'white'}}>
            <h1> Enter your text if you want to change the case </h1>
        <textarea className="form-control" id="mybox" value={Textconverter} onChange={handlechange} rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} /> 
        <button className='btn btn-primary my-4' onClick={uppercasetext}> convert to uppercase</button>
        <button className='btn btn-primary mx-3 my-4' onClick={lowercasetext}> convert to lowercase</button>
        <button className='btn btn-primary mx-3 my-4' onClick={cleartext}> Clear Text</button>
        {/* <button className='btn btn -primary ' onClick={copytext}> copy to clipboard</button> */}
</div>
    )
}

















    


