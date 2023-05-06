import React from 'react';
import './footer.css';
import Clock from '../Clock';

const Footer = () => (
  <div className="tech__footer section__padding">

    <div className="tech__footer-links">
      <div className="tech__footer-links_div">
        <h4>Linkler</h4>
        <p>Eğitimler</p>
        <p>Social Media</p>
        <p>İletişim</p>
      </div>
      <div className="tech__footer-links_div">
        <h4>Info</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="tech__footer-links_div">
        <h4>Bize Ulaşın</h4>
        <p>Istanbul/Tuzla</p>
        <p>+90999999999</p>
        <p>info@düdüt.net</p>
       
      </div>
    </div>

    <div className="tech__footer-copyright">
  <p>@2023 M.Kaan. All rights reserved.</p>
  <div className="footer__clock">
    <Clock />
  </div>
</div>

  </div>
);

export default Footer;