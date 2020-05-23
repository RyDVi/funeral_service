import React from "react"
import "./Product.css"

export default function Product(props: { imgPath: string; text: string }) {
  return (
    <div className="container">
      <div className="card product-card mb-4">
        <img src={props.imgPath} className="card-img-top product-img" alt="" />
        <div className="card-body product-card-content m-25">
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  )
}
