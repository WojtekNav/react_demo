import React from 'react';
import './signup.css';

const Signup = () => {
  return (
    <div className="tech__header section__padding" id="home">
      <div className="tech__header_content">
        <p>Kayıt Ol</p>
        <div className="tech__header-content__input">
          <input type="text" placeholder="Adınız" />
          <input type="text" placeholder="Soyadınız" />
        </div>
        <div className="tech__header-content__input">
          <input type="email" placeholder="Emailinizi Giriniz" />
        </div>
        <div className="tech__header-content__input">
          <input type="password" placeholder="Şifrenizi Giriniz" />
        </div>
        <div className="tech__header-content__input">
          <button type="button">Hesap Oluştur</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
