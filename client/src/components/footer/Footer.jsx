import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer-info">
    <p>Copyright &copy; 2024 Designed by <span className="designer">Mencraft</span>
    </p>
    <div className="socialIcons">
    <a href="#"><i className='bx bxl-facebook'></i></a>
    <a href="#"><i className='bx bxl-instagram'></i></a>
    <a href="#"><i className='bx bxl-youtube'></i></a>
    <a href="#"><i className='bx bxl-telegram'></i></a>
    <a href="#"><i className='bx bx-envelope'></i></a>
  </div>
  </div>
  );
}

export default Footer;