import React from 'react';
import "./contactPage.scss";
import Form from '../../components/form/Form';

function Contact() {
  return (
    <div className="flex-container">
      <div className="flex-item-left">
        <Form />
        <div class="contact_card">
                                <div class="contact_card_box">
                                    <div class="contact_card_info">
                                        <i class="bx bxs-phone-call"></i>
                                    <div>
                                        <h3 class="contact_card_title">
                                            Call
                                        </h3>
                                        <p class="contact_card_desc">
                                            022.321.165.19
                                        </p>
                                </div>
                            </div>
                            <button class="contact_card_btn">
                                Call Now
                            </button>
                        </div>

                        <div class="contact_card_box">
                            <div class="contact_card_info">
                                <i class="bx bxs-message-rounded-dots"></i>
                            <div>
                                <h3 class="contact_card_title">
                                    Chat
                                </h3>
                                <p class="contact_card_desc">
                                    022.321.165.19
                                </p>
                        </div>
                    </div>
                    <button class="contact_card_btn">
                        Chat Now
                    </button>
                </div>

                <div class="contact_card_box">
                    <div class="contact_card_info">
                        <i class="bx bxs-envelope"></i>
                    <div>
                        <h3 class="contact_card_title">
                            Message
                        </h3>
                        <p class="contact_card_desc">
                            022.321.165.19
                        </p>
                </div>
            </div>
            <button class="contact_card_btn">
                mail now
            </button>
        </div>

        </div>
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