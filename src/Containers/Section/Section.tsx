import React, { ReactElement } from "react"
import "./Section.css"

export default function Section(props: {
  id: string
  title: string
  isWhiteBlock: Boolean
  children: ReactElement
}) {
  return (
    <section
      id={props.id.toString()}
      className={`container ${props.isWhiteBlock ? "white-block" : ""}`}
    >
      <div className="d-flex justify-content-center">
        <hr className="header-line" />
        <h2>{props.title}</h2>
        <hr className="header-line" />
      </div>
      <div>{props.children}</div>
    </section>
  )
}
