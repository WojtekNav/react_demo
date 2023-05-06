import React from 'react';
import people from '../../img/cube.png';
import './header.css';

const Header = () => (
  <div className="tech__header section__padding" id="home">
    <div className="tech__header-content">
      <h1 className="gradient__text">Pandora'nın Kutusunu Açmaya Hazır Mısın?</h1>
      <p>Gemi Elektroniği, yazılım ve hayata dair yeni şeyler. Seni sabırsızlıkla bekliyoruz!</p>

      <div className="tech__header-content__input">
        <input type="email" placeholder="Email Adresinizi Giriniz" />
        <button type="button">Hemen Başla!</button>
      </div>
    </div>
    <div className="tech__header-image">
      <img src={people} alt='cube' />
    </div>
</div>
);

export default Header;