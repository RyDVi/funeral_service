import React from "react"
import "./NavHeader.css"

export default function NavHeader() {
  return (
    <nav
      id="main_navbar"
      className="nav nav-pills navbar-default fixed-top justify-content-between"
    >
      <div id="nav-links" className="nav nav-pills">
        <a className="nav-link nav-menu" href="#mainHeader">
          Главная
        </a>
        <a className="nav-link nav-menu" href="#aboutUs">
          О нас
        </a>
        <a className="nav-link nav-menu" href="#ourServices">
          Услуги
        </a>
        <a className="nav-link nav-menu" href="#products">
          Товары
        </a>
        <a className="nav-link nav-menu" href="#contacts">
          Контакты
        </a>
      </div>
      <span className="additionalInfo">
        <img src="icons/телефон.png" alt="" />
        <span>8 (952) 867-92-82</span>
        <img src="icons/письмо.png" alt="" />
        <span>katk78@yandex.ru</span>
        <img src="icons/часы.png" alt="" />
        <span>Круглосуточно</span>
      </span>
    </nav>
  )
}
