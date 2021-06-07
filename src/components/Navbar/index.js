import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';


/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return (
      <nav className='navbar'>
          <ul className='nav-list'>
              <li id="home-link"><NavLink exact to="/"><h3>HOME</h3></NavLink></li>
              <li id="work-link"><NavLink exact to="/projects"><h3>Projects</h3></NavLink></li>
              <li id="resume-link"><NavLink exact to="/resume"><h3>Resume</h3></NavLink></li>
              <li id="contact-link"><NavLink exact to="/contact"><h3>Contact</h3></NavLink></li>
          </ul>
      </nav>
  )

}

export default Navbar