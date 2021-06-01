import React from 'react';
import Navbar from '../Navbar';
import './style.css';
import circle from '../../assets/circle.png'

const Header = (props) => {
  return(
    <header className="header">
      <div className='logo'>
          <h1 className="header-text">Kelsey Sanderson</h1>
      </div>
       <Navbar/>
    </header>
   )

 }

export default Header