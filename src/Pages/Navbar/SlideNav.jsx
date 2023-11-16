// SlideNav.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./SlideNav.css";

const SlideNav = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="slide-nav-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="latest-notice">
        {" "}
        <i className="fas fa-bell"></i> Latest Notice
      </div>
      <div className={`notice-slider ${isHovered ? "paused" : ""}`}>
        <Link to="/notice/1" className="notice">
          Notice 1: Lorem ipsum dolor sit amet...
        </Link>
        <Link to="/notice/2" className="notice">
          Notice 2: Consectetur adipiscing elit...
        </Link>
        <Link to="/notice/3" className="notice">
          Notice 3: Sed do eiusmod tempor incididunt...
        </Link>
        {/* Add more notices as needed */}
      </div>
    </div>
  );
};

export default SlideNav;
