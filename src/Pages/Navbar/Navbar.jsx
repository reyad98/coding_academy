import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
import img from "../images/school_cover.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div>
      <div className="top_img">
        <img src={img} alt="" />
        <div className="overlay">
          <div>
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div>
            <h2>CODING ACADEMY PUBLIC SCHOOL & COLLEGE</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
              molestiae?
            </p>
          </div>
          <div>
            <button>Login</button>
          </div>
        </div>
      </div>

      <nav className={`navbar ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="logo">
          {" "}
          <h3>CAPPSC</h3>{" "}
        </div>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
        </div>
        <ul className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <Link to="/" onClick={closeMobileMenu}>
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" onClick={closeMobileMenu}>
              <i className="fas fa-info-circle"></i> আমাদের সম্পর্কে
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="/">
              <i className="fas fa-user-tie"></i> প্রশাসন
            </Link>
            <ul className="submenu">
              <li>
                <Link to="/administration/staff">কর্মকর্তাবৃন্দ</Link>
              </li>
              <li>
                <Link to="/administration/teachers">শিক্ষক দল</Link>
              </li>
              <li>
                <Link to="/administration/addteacher">শিক্ষক দল ADD</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link to="/academic">
              <i className="fas fa-graduation-cap"></i> একাডেমিক কার্যক্রম
            </Link>
            <ul className="submenu">
              <li>
                <Link to="/academic/courses">কোর্স সমূহ</Link>
              </li>
              <li>
                <Link to="/academic/exams">মেধা পরীক্ষা মেধা পরীক্ষা</Link>
              </li>
              <li>
                <Link to="/academic/courses">কোর্স সমূহ</Link>
              </li>
              <li>
                <Link to="/academic/exams">মেধা পরীক্ষা</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/notice">
              <i className="fas fa-bell"></i> নোটিশ
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/admission">
              <i className="fas fa-user-graduate"></i> ভর্তি
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/results">
              <i className="fas fa-clipboard-check"></i> ফলাফল
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="/gallery">
              <i className="fas fa-images"></i> গ্যালারি
            </Link>
            <ul className="submenu">
              <li>
                <Link to="/gallery/photos">ছবি</Link>
              </li>
              <li>
                <Link to="/gallery/videos">ভিডিও</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/contact">
              <i className="fas fa-address-book"></i> যোগাযোগ
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
