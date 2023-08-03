import React from 'react'


export default function Navbar(props){
    return(
        <nav className={`navbar navbar-${props.mode} navbar-expand bg${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><strong><i>{props.title}</i></strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
        <div className='d-flex'>
          <div className='bg-primary rounded mx-1' onClick={()=>{props.togglemode('primary')}} style={{cursor:'pointer',height:'20px',border:'2px solid black', width:'20px'}}></div>
          <div className='bg-danger rounded mx-1'  onClick={()=>{props.togglemode('danger')}} style={{cursor:'pointer',height:'20px',border:'2px solid black',width:'20px'}}></div>
          <div className='bg-success rounded mx-1' onClick={()=>{props.togglemode('success')}} style={{cursor:'pointer',height:'20px',border:'2px solid black',width:'20px'}}></div>
          <div className='bg-warning rounded mx-1' onClick={()=>{props.togglemode('warning')}} style={{cursor:'pointer',height:'20px',border:'2px solid black', width:'20px'}}></div>
          <div className='bg-light rounded mx-1' onClick={()=>{props.togglemode('light')}} style={{cursor:'pointer',height:'20px',border:'2px solid black', width:'20px'}}></div>
          <div className='bg-dark rounded mx-1' onClick={()=>{props.togglemode('dark')}} style={{cursor:'pointer',height:'20px',border:'2px solid black', width:'20px'}}></div>
          
        </div>
          {/* <div className="form-check form-switch  mx-5 ">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.togglemode(null)}}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark Mode</label>
          </div> */}
      <form className="d-flex" role="search">
     
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
    )
  
}
