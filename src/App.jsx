import React, {useState, useEffect} from "react"
import "./App.css"
import {Outlet} from "react-router-dom"
import Nav from "./Components/Nav"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
