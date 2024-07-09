import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="#"><i className='bx bxl-facebook'></i></a>
          <a href="#"><i className='bx bxl-instagram'></i></a>
          <a href="#"><i className='bx bxl-youtube'></i></a>
          <a href="#"><i className='bx bxl-telegram'></i></a>
          <a href="#"><i className='bx bx-envelope'></i></a>
        </div>
        <div className="footerNav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Our Team</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <p>Copyright &copy;2023 Designed by <span className="designer">CS2 Designs</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;