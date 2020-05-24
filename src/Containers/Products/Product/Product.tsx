import React from "react"
import "./Product.css"

export default function Product(props: { imgPath: string; text: string }) {
  return (
    <div className="container">
      <div className="card product-card mb-4">
        <div className="card-img-top product-img-content">
          <img src={props.imgPath} className="product-img" alt="" />
        </div>
        <div className="card-body product-card-content m-25">
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  )
}
