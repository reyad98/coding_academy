import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // You can create a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="footer-icons">
        <a href="https://web.facebook.com/profile.php?id=100008367510048">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://web.facebook.com/profile.php?id=100008367510048">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://web.facebook.com/profile.php?id=100008367510048">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://web.facebook.com/profile.php?id=100008367510048">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      <hr className="footer-line" />

      <div className="footer-content">
        <div className="copyright">
          &copy; {new Date().getFullYear()} Your School/College Name. All Rights
          Reserved.
        </div>
        <div></div>
        <div className="developed-by"> Developed by: Campus plus plus</div>
      </div>
    </footer>
  );
};

export default Footer;
