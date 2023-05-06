import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="about__about">
      <div className="about__about-heading">
        <h1>Contact Us</h1>
        <p>Get in touch with us</p>
      </div>

      <div className="about__about-container">
        <div className="about__features-container__feature">
          <h2>Location</h2>
          <p>1234 Example St<br />New York, NY 12345<br />USA</p>
          <div className="map-responsive">
            <iframe title="map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.864690111261!2d-73.96489508454138!3d40.780874880784725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5b5c5df5b19%3A0x36d2fc86f52e65f9!2sCentral%20Park%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1651832002753!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>

        <div className="about__features-container__feature">
          <h2>Email</h2>
          <p>info@example.com</p>
        </div>

        <div className="about__features-container__feature">
          <h2>Phone</h2>
          <p>+1 (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
