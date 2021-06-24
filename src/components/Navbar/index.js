import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
      <nav className='navbar'>
          <ul className='nav-list'>
              <li><h3><NavLink exact activeStyle={{textDecoration:"underline", textDecorationColor:"#142565"}} to="/">HOME</NavLink></h3></li>
              <li><h3><NavLink exact activeStyle={{textDecoration:"underline", textDecorationColor:"#142565"}} to="/projects">Projects</NavLink></h3></li>
              <li><h3><NavLink exact activeStyle={{textDecoration:"underline", textDecorationColor:"#142565"}} to="/resume">Resume</NavLink></h3></li>
              <li><h3><NavLink exact activeStyle={{textDecoration:"underline", textDecorationColor:"#142565"}} to="/contact">Contact</NavLink></h3></li>
          </ul>
      </nav>
  )

}

export default Navbar