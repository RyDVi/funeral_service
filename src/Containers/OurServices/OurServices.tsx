import React from "react"
import "./OurServices.css"
import Section from "../Section/Section"
import ServiceCard from "../ServiceCard/ServiceCard"

export default function OurServices() {
  return (
    <Section
      id="ourServices"
      title="Наши услуги"
      isWhiteBlock={false}
      children={
        <div className="d-flex container-fluid">
          <div className="row w-100 justify-content-center">
            <div className="col-xs">
              <ServiceCard
                title="Захоронение"
                text=""
                topContent={<img src="icons/захоронение.png" alt="" />}
              />
            </div>
            <div className="col-xs">
              <ServiceCard
                title="Продажа ритуальных товаров"
                text=""
                topContent={<img src="icons/ритуальные_услуги.png" alt="" />}
              />
            </div>
            <div className="col-xs">
              <ServiceCard
                title="Изготовление гробов по размерам заказчика"
                text=""
                topContent={<img src="icons/изготовление_гробов.png" alt="" />}
              />
            </div>
            <div className="col-xs">
              <ServiceCard
                title="Услуги по доставке в морг и на кладбище"
                text=""
                topContent={<img src="icons/доставка.png" alt="" />}
              />
            </div>
            <div className="col-xs">
              <ServiceCard
                title="Груз 200 с оформлением сопроводительных документов"
                text=""
                topContent={<img src="icons/груз_200.png" alt="" />}
              />
            </div>
          </div>
        </div>
      }
    />
  )
}
