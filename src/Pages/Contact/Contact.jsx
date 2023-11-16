import React from "react";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>College Name:</strong> Your College Name
        </p>
        <p>
          <strong>Address:</strong> 123 College Street, City, Country
        </p>
        <p>
          <strong>Phone:</strong> +1 123-456-7890
        </p>
        <p>
          <strong>Email:</strong> info@college.edu
        </p>
      </div>
      <div className="whatsapp-option">
        <a
          href="https://api.whatsapp.com/send?phone=+8801623447488"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
          <p>Send us a WhatsApp message</p>
        </a>
      </div>
      <div className="iframe-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10666.185767194696!2d90.6791522317205!3d23.32623638992256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBardia%20kazi%20sultan!5e0!3m2!1sen!2sbd!4v1694059707080!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
