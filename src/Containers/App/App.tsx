import React from "react"
import "./App.css"
import AboutUs from "../AboutUs/AboutUs"
import OurServices from "../OurServices/OurServices"
import Products from "../Products/Products"
import Contacts from "../Contacts/Contacts"
import Footer from "../Footer/Footer"
import NavHeader from "../NavHeader/NavHeader"
import MainHeader from "../MainHeader/MainHeader"

export default function App() {
  return (
    <div className="App">
      <NavHeader />
      <MainHeader />
      <AboutUs />
      <OurServices />
      <Products />
      <Contacts />
      <Footer />
    </div>
  )
}
