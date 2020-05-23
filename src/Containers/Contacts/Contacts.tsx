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
            <div className="col-sm">Телефоны</div>
            <div className="col-sm">Карта</div>
          </div>
        </div>
      }
    />
  )
}
