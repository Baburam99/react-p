import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();
    emailjs
      .sendForm('service_ysgk7ze', 'template_b7zlonz', form.current, {
        publicKey: 'pIPCPi9B3WZoK4X-x',
      })
      .then(
        () => {
          alert('SUCCESS!');
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          
   
        },
      );
  };

  return (
    
    <div className ="contact">
    <div className="title">
        <h2>Get In Touch!</h2>
      </div>
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-content">
      <input type="text" name="user_name" placeholder='Enter Your Name' required />
      <input type="email"  name="user_email" placeholder='Enter Your Email' required />
    <textarea name="message" id='text' placeholder='Your Message' required/>
    </div>
      <button type="submit">Send!</button>
    </form>
    </div>
  );
};
export default Contact