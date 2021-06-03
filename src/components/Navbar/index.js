import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';


/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return (
    // <nav class="navbar navbar-expand-md navbar-light">
    //   <div class="navbar-collapse" id="navbarNav">
    //     <ul class="navbar-nav">
    //       <li id="home-link" class="nav-item active">
    //           <NavLink to="/"><h3>HOME</h3></NavLink>
    //       </li>
    //       <li id="work-link" class="nav-item">
    //         <NavLink to="/work"><h3>Projects</h3></NavLink>
    //       </li>
    //       <li  id="contact-link" class="nav-item">
    //         <NavLink to="/contact"><h3>Contact</h3></NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
      <nav className='navbar'>
          <ul className='nav-list'>
              <li id="home-link"><NavLink to="/"><h3>HOME</h3></NavLink></li>
              <li id="work-link"><NavLink to="/work"><h3>Projects</h3></NavLink></li>
              <li id="resume-link"><NavLink to="/resume"><h3>Resume</h3></NavLink></li>
              <li id="contact-link"><NavLink to="/contact"><h3>Contact</h3></NavLink></li>
          </ul>
      </nav>
  )

}

export default Navbar