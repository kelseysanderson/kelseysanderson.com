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
        <div className="patterns scaled">
          <svg width="100vw" height="115px">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>
            <text x="50%" y="60%" textAnchor="middle"  >
              Kelsey Sanderson
            </text>
          </svg>
        </div>
      ) : null}
      <Navbar />
    </header>
  )

}

export default Header