import React from 'react';
import "./contactPage.scss";
import Form from '../../components/form/Form';

function Contact() {
  const handleMailNowClick = () => {
    window.location.href = 'mailto:someone@example.com'; // Replace with your email address
  };

  return (
    <div className="flex-container">
      <div className="flex-item-left">
        <div className="fleft-head">
          <h2>Get in Touch</h2>
        </div>
        <div className="contact_card">
          <div className="contact_card_box">
            <div className="contact_card_info">
              <i className="bx bxs-envelope"></i>
              <div>
                <h3 className="contact_card_title">Email</h3>
                <p className="contact_card_desc">care@nexthome.in</p>
              </div>
            </div>
            <button 
              onClick={handleMailNowClick} 
              style={{ backgroundColor: '#99060694' }}
            >
              mail now
            </button>
          </div>
          <div className="contact_card_box">
            <div className="contact_card_info">
              <i className="bx bxs-envelope"></i>
              <div>
                <h3 className="contact_card_title">Message</h3>
                <p className="contact_card_desc">+1-401-4563</p>
              </div>
            </div>
            <button onClick={handleMailNowClick}>Chat Now</button>
          </div>
        </div>
        <Form />
      </div>
      <div className="flex-item-right">
        <div className="contact_images">
          <div className="img">
            <img src="/contact.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;