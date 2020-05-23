import React from "react"
import "./Products.css"
import Section from "../Section/Section"
import Product from "./Product/Product"
import ProductsData from "./products.json"
import $ from "jquery"

export default function Products() {
  // return <section id="products">
  //     <h2>Products</h2>
  // </section>;

  $(".carousel .carousel-item").each(function () {
    var next = $(this).next()
    if (!next.length) {
      next = $(this).siblings(":first")
    }
    next.children(":first-child").clone().appendTo($(this))

    for (var i = 0; i < 2; i++) {
      next = next.next()
      if (!next.length) {
        next = $(this).siblings(":first")
      }

      next.children(":first-child").clone().appendTo($(this))
    }
  })
  return (
    <Section
      id="products"
      title="Товары"
      isWhiteBlock={true}
      children={
        <div>
          <ul
            className="nav nav-pills mb-3 nav-panel"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active nav-link-button"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Гробы
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  nav-link-button"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Венки
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  nav-link-button"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Кресты
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  nav-link-button"
                id="pills-ritualAccessories-tab"
                data-toggle="pill"
                href="#pills-ritualAccessories"
                role="tab"
                aria-controls="pills-ritualAccessories"
                aria-selected="false"
              >
                Ритуальные принадлежности
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="container">
                <div className="row w-100 justify-content-center overflow-auto products-grid">
                  {ProductsData.coffins.map((coffin) => {
                    return (
                      <div className="col-xs">
                        <Product
                          imgPath={`images/products/coffins/${coffin.filename}`}
                          text={coffin.name.toString()}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="container">
                <div className="row w-100 justify-content-center overflow-auto products-grid">
                  {ProductsData.wreathes.map((wreath) => {
                    return (
                      <div className="col-xs">
                        <Product
                          imgPath={`images/products/wreathes/${wreath.filename}`}
                          text={wreath.name.toString()}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="container">
                <div className="row w-100 justify-content-center overflow-auto products-grid">
                  {ProductsData.crosses.map((cross) => {
                    return (
                      <div className="col-xs">
                        <Product
                          imgPath={`images/products/crosses/${cross.filename}`}
                          text={cross.name.toString()}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-ritualAccessories"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="container">
                <div className="row w-100 justify-content-center overflow-auto products-grid">
                  {ProductsData.ritual_accessories.map((ritualA) => {
                    return (
                      <div className="col-xs">
                        <Product
                          imgPath={`images/products/ritual_accessories/${ritualA.filename}`}
                          text={ritualA.name.toString()}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  )
}
