import React from 'react';
import "./contactPage.scss";
import Form from '../../components/form/Form';

function Contact() {
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
                <h3 className="contact_card_title">Message</h3>
                <p className="contact_card_desc">022.321.165.19</p>
              </div>
            </div>
            <button>mail now</button>
          </div>
        </div>
        <Form />
      </div>
      <div className="flex-item-right">
        <div className="contact_images">
          {/* <div className="contact_orbe"></div> */}
          <div className="img">
            <img src="/contact.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;