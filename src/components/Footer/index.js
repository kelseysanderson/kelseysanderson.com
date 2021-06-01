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
        <h2>&#169; Kelsey Sanderson 2021</h2>
        <ContactLinks/>
    </footer>
   )
 }

export default Footer