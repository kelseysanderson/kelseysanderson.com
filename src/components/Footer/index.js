import React from 'react';
import ContactLinks from '../ContactLinks';
import './style.css'

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <footer className="footer">
        <p> &#169; Kelsey Sanderson 2021</p>
        <ContactLinks style={{ height:'20px'}}/>
    </footer>
   )
 }

export default Footer