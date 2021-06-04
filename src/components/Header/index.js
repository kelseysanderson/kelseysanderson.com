import React from 'react';
import Navbar from '../Navbar';
import { useLocation } from "react-router-dom";
import './style.css';

const Header = (props) => {
  const location = useLocation();
  const pathName = location.pathname



  return (
    <header className="header">

      {pathName === '/' ? (
         <div className="patterns">
         <svg width="100vw" height="115px">
           <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>
           <text x="50%" y="60%" textAnchor="middle"  >
              Kelsey Sanderson
         </text>
         </svg>
       </div>

      ): null } 
        
        <Navbar />



      {/* <h1 className="header-text">Kelsey Sanderson</h1> */}
    </header>


  )

}

export default Header