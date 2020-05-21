import React from "react"
import "./MainHeader.css"

export default function MainHeader() {
  return (
    <header id="mainHeader">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1>Милосердие</h1>
            <h2>Похоронная служба</h2>
            <h2>
              <span className="we_help">Мы поможем</span> проводить ваших родных
              и близких в последний путь достойно
            </h2>
          </div>
          <div className="col-md-7">

          </div>
          {/* <div className="arrow col align-self-center d-flex justify-content-end flex-column"> */}
          <div className="arrow col align-self-center d-flex flex-column justify-content-end">
            <a href="#aboutUs">
              <i className="fas fa-angle-down"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
