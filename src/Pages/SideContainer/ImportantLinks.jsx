// ImportantLinks.js
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./ImportantLink.css";

const links = [
  "Directorate of Technical Education",
  "Bangladesh Technical Education",
  "Education Ministry of Bangladesh",
  "ICT Division",
  "Ministry of Education",
  "Dhaka Educational Board",
];

function ImportantLinks() {
  return (
    <div className="important-links">
      <h2 className="section-title_links">গুরুত্বপূর্ণ লিংক</h2>
      <div className="links-list">
        {links.map((link, index) => (
          <div key={index} className="link-row">
            <FaExternalLinkAlt className="link-icon" />
            <a href="#" className="link-text">
              {link}
            </a>
          </div>
        ))}
      </div>
      <div className="bottom-line" />
    </div>
  );
}

export default ImportantLinks;
