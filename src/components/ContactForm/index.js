import React from 'react';
import emailjs from 'emailjs-com';

import './style.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_hh3450z', 'template_hj71q8i', e.target, 'user_R7Y4Ik83btn0p1ThkPSTV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="name-email-row">
          <label >Name:</label>
          <input className="name-email" type="text" name="name" />
        </div>
        <div className="name-email-row">
          <label>Email: </label>
          <input className="name-email" type="email" name="email" />
        </div>
        <div className="name-email-row">
          <label>Message: </label>
          <textarea className="name-email" name="message" />

        </div>
        <input className="contact-button" type="submit" value="Send" />
      </form>
    </div>

  );
}