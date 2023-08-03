import React, { useState } from 'react'


export default function Textconverter(props){
        
    const uppercasetext=()=>{
        let newtext= Textconverter.toUpperCase()
                Text(newtext)
                props.showalert("Upper case has been converted","success")
    }
    const lowercasetext=()=>{
        let newtext=Textconverter.toLowerCase()
            Text(newtext)
            props.showalert("Lower case has been converted","success")
    }
    const cleartext=()=>{
        console.log("clear" + Text) 
        let newtext = ""
            Text(newtext)
            props.showalert("Text Cleared","success")
    }
    // const handlecopy = () =>{
    //     console.log("I am Copy");
    //     var text=document.getElementById("myBox");
    //     text.select();
    //     text.setSelectionRange(0, 9999);
    //     navigator.clipboard.writeText(text.value);
    //     props.showalert("Text has copied","success");
    // }
    // const copytext=()=>{
    //     copy(Textconverter)
    // }
    const handlechange=(event) =>{
        console.log("onchange")
        Text(event.target.value)
    }

    const[Textconverter,Text]=useState('');

    return(
        <>
        <div className='container my-5' style={{Color: props.mode==='dark'?'#2d302e':'white'}}>
            <h1> Enter your text if you want to change the case </h1>
        <textarea className="form-control" id="mybox" value={Textconverter} onChange={handlechange} rows="8" style={{backgroundColor: props.mode==='dark'?'#2d302e':'white', color: props.mode==='dark'?'white':'black'}} /> 
        <button style={{border:'2px solid black'}} disabled={Textconverter.length===0} className='btn btn-primary mx-2 my-3' onClick={uppercasetext}> convert to uppercase</button>
        <button style={{border:'2px solid black'}} disabled={Textconverter.length===0} className='btn btn-primary mx-2  my-3'  onClick={lowercasetext}> convert to lowercase</button>
        <button style={{border:'2px solid black'}} disabled={Textconverter.length===0} className='btn btn-primary mx-2  my-3' onClick={cleartext}> Clear Text</button>
        {/* <button className='btn btn-primary mx-3 my-4' onClick={handlecopy}> Copy Text</button> */}
        {/* <button className='btn btn -primary ' onClick={copytext}> copy to clipboard</button> */}
        </div>
        <div className='container'>
            <h3> Text Your Summary</h3>
            <p> {Textconverter.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Textconverter.length} character</p> 
            <h3>
                Preview
            </h3>
            <p> {Textconverter}</p>
        </div>
        </>
    )
}

















    


