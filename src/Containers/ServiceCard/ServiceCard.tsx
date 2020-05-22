import React, { ReactElement } from "react"
import "./ServiceCard.css"

export default function ServiceCard(props: {
  topContent: ReactElement
  title: string
  text: string
}) {
  return (
    <div className="card service-card">
      <div className="card-img-top service-card-img">
        {props.topContent}
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  )
}
