import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./aboutPage.scss";

function About() {
  const navigate = useNavigate(); // Initialize useNavigate here

  return (
    <div className="a-container">
      <div className="fleft">
        <div className="amission">
          <h2>Our Mission</h2>
          <p>At NextHome, we're dedicated to simplifying the housing search for students and bachelors. We understand the unique challenges you face when looking for a place to call home, and we're here to make that journey easier.</p>
          <div className='about-btn-div'>
            <button onClick={() => navigate('/list')} className="amission_btn btn1">
              Find a Rental
            </button>
            <button onClick={() => navigate('/contact')} className="amission_btn">
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className="fright">
        <div className="img">
          <img src="/mission.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
