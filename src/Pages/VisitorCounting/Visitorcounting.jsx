import React from "react";
import "./Visitorcounting.css";

const VisitorCounting = () => {
  return (
    <div className="visitor-count">
      <h2>Visitor Statistics</h2>
      <div className="count-item">
        <span className="count-text">Live Visitor:</span>
        <div className="bar"></div>
        <span className="count-number">4</span>
      </div>
      <div className="count-item">
        <span className="count-text">This Month:</span>
        <div className="bar"></div>
        <span className="count-number">40</span>
      </div>
      <div className="count-item">
        <span className="count-text ">All Time:</span>
        <div className="bar"></div>
        <span className="count-number all-time">367</span>
      </div>
    </div>
  );
};

export default VisitorCounting;
