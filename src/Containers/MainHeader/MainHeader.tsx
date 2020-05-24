import React from "react"
import "./MainHeader.css"

export default function MainHeader() {
  return (
    <header id="mainHeader">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-6 col-xl-6">
            <h1>Милосердие</h1>
            <h2>Похоронная служба</h2>
            <h2>
              <span className="we_help">Мы поможем</span> проводить ваших родных
              и близких в последний путь достойно
            </h2>
          </div>
          <div className="col-md-4 col-lg-6 col-xl-6">

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
