import React from "react"
import "./Contacts.css"
import Section from "../Section/Section"

export default function Contacts() {
  return (
    <Section
      id="contacts"
      title="Контакты"
      isWhiteBlock={false}
      children={
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="row">
                <div className="col-sm">
                  <div className="d-flex flex-column mb-4 contacts">
                    <h5>Телефоны</h5>
                    <span>8 (952) 867-92-82</span>
                    <span>8 (952) 865-80-86</span>
                    <span>8 (928) 271-27-40</span>
                  </div>
                  <div className="d-flex flex-column mb-4 contacts">
                    <h5>Почта</h5>
                    <span>katk78@yandex.ru</span>
                  </div>
                </div>
                <div className="col-sm d-flex flex-column mb-4 contacts">
                  <h5>Адрес</h5>
                  <span>Краснодарский край</span>
                  <span>Щербиновский район</span>
                  <span>Село Шабельское</span>
                  <span>Улица Партизанская</span>
                  <span>Дом 135</span>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A7d7d8a5f89ad9ff3e02f9e354e256d3e7a27c9f02fa088a257e78f5ed5ec6140&amp;source=constructor"
                className="map"
              ></iframe>
            </div>
          </div>
        </div>
      }
    />
  )
}
