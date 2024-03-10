import React from 'react';
import { Link } from "react-router-dom";
import flashLogo from './flash.png'; 
import './Navbar.css'

const Navbar =()=> {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
          <div className="container-fluid">
          <img src={flashLogo} alt="Flash Logo" className="logo"  style={{ width: '50px', height: 'auto', marginRight: '10px' }}/>
            <Link className="navbar-brand" to="/" style={{ fontSize: '24px', fontWeight: 'bold', fontFamily:'helvetica, roboto, arial,sans-serif' , animation: 'thunderEffect 1s infinite' }}>Flash</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               
                <li className="nav-item"> <Link className="nav-link" style={{fontWeight:'bold'}}to="/business">Business</Link> </li>
                <li className="nav-item"> <Link className="nav-link" style={{fontWeight:'bold'}}to="/entertainment">Entertainment</Link> </li>         
                <li className="nav-item"> <Link className="nav-link" style={{fontWeight:'bold'}}to="/health">Health</Link> </li>
                <li className="nav-item"> <Link className="nav-link" style={{fontWeight:'bold'}}to="/science">Science</Link> </li>
                <li className="nav-item"> <Link className="nav-link" style={{fontWeight:'bold'}}to="/sports">Sports</Link> </li>
                <li className="nav-item"> <Link className="nav-link" style={{fontWeight:'bold'}}to="/technology">Technology</Link> </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  
}

export default Navbar;
