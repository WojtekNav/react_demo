import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../../img/swco.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="tech__navbar">
      <div className="tech__navbar-links">
        <div className="tech__navbar-links_logo">
          <img src={logo} alt="swco" width={'100px'} />
        </div>
        <div className="tech__navbar-links_container">
          <p>
            <Link to="/">Anasayfa</Link>
          </p>
          <p>
            <a href="https://softito.com.tr/">Eğitimler</a>
          </p>
          <p>
          <Link to="/Contact">İletişim</Link>
          </p>
          <p>
          <Link to="/About">Biz Kimiz</Link>
          </p>
        </div>
      </div>
      <div className="tech__navbar-sign">
        <p>
        <Link to="/Login">Giriş Yap</Link>
        </p>
        <button type="button">
        <Link to="/Signup">Kayıt Ol</Link>
        </button>
      </div>
      <div className="tech__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="tech__navbar-menu_container scale-up-center">
            <div className="tech__navbar-menu_container-links">
              <p>
                <Link to="/">Anasayfa</Link>
              </p>
              <p>
            <a href="https://softito.com.tr/">Eğitimler</a>
          </p>
          <p>
          <Link to="/Contact">İletişim</Link>
          </p>
          <p>
          <Link to="/About">Biz Kimiz</Link>
          </p>
            </div>
            <div className="tech__navbar-menu_container-links-sign">
            <p>
          <Link to="/Login">Giriş Yap</Link>
            </p>
              <button type="button">
              <Link to="/Signup">Kayıt Ol</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
