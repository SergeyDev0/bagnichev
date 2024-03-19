import React from "react"
import logo from "../../assets/img/name_bagn.png"
import { Link } from "react-router-dom";
import "./header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Логотип" className="header__logo--img" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list-item"><Link to="/" className="header__nav__list-item--link">Главная</Link></li>
          <li className="header__nav__list-item"><Link to="/furniture" className="header__nav__list-item--link">Мебель</Link></li>
          <li className="header__nav__list-item"><Link to="/toys" className="header__nav__list-item--link">Игрушки</Link></li>
          <li className="header__nav__list-item"><Link to="/about" className="header__nav__list-item--link">О нас</Link></li>
        </ul>
      </nav>
      <ul className="header__phone__list">
        <li className="header__phone__list-item">
          <Link to="tel:+74993756047" className="footer__phone__list-item--link">+7-499-375-60-47</Link>
        </li>
        <li className="header__phone__list-item">
          <Link to="tel:+78003010128" className="footer__phone__list-item--link">+7-800-301-01-28</Link>
        </li>
      </ul>
    </header>
  )
};

export default Header;
