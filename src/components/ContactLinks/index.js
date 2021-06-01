import React from 'react';
import './style.css';
import github from '../../assets/contact-icons/github.png';
import gmail from '../../assets/contact-icons/gmail.png';
import linkedin from '../../assets/contact-icons/linkedin.png';

const ContactLinks = (props) => {
    return (
        <div className="contact-links">
            <a href='https://github.com/kelseysanderson' target="_blank" rel="noreferrer"><img src={github} alt="Github Icon"/></a>
            <a href='mailto:sandersonkelsey1@gmail.com' rel="noreferrer"><img src={gmail} alt="Gmail Icon"/></a>
            <a href='https://www.linkedin.com/in/kelseyschreifels/' target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn Icon"/></a>
        </div>
    )

}

export default ContactLinks