import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="tech__header section__padding" id="home">
      <div className='tech__header_content'>
        <p>Giriş Yap</p>
        <div className="tech__header-content__input">
          <input type="email" placeholder="Emailinizi Giriniz" />
          <input type='password' placeholder='Şifrenizi Giriniz'/>
          <button type="button">Giriş Yap</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
