import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
    <nav className='navbar'>
        <ul className='nav-list'>
            <li id="home-link"><NavLink to="/"><h3>HOME</h3></NavLink></li>
            <li id="work-link"><NavLink to="/work"><h3>Projects</h3></NavLink></li>
            <li id="contact-link"><NavLink to="/contact"><h3>Contact</h3></NavLink></li>
        </ul>
    </nav>
   )

 }

export default Navbar