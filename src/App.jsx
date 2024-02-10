import React, {useState, useEffect} from "react"
import "./App.css"
import {Outlet} from "react-router-dom"
import Nav from "./Components/partials/Nav"
import AOS from "aos"
import "aos/dist/aos.css"
import {Footer} from "./Components/partials/Footer"

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-shine",
      delay: 100,
    })
    AOS.refresh()
  }, [])
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
