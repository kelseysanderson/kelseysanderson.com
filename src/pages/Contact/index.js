import React from 'react';
import ContactLinks from '../../components/ContactLinks';
import Card from '../../components/Card';
import ContactForm from '../../components/ContactForm';
import './style.css';

export default function Contact() {
    document.querySelector('#home-link')?.classList.remove('active-nav')
    document.querySelector('#work-link')?.classList.remove('active-nav')
    document.querySelector('#contact-link')?.classList.add('active-nav')

    return (
        <div className="contact-container">
            <h1 className="contact-header">Contact Me</h1>

            <div className="contact">

                <Card style={{ textAlign: "center", width: "50%", paddingTop:"30px"}}>
                    <ContactLinks/>
                    <h3 className="message-header">Send a Message:</h3>
                    <ContactForm />
                </Card>

            </div>
        </div>

    )
}
