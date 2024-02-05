import React, {useState, useEffect} from "react"
import "./App.css"
import Login from "./Components/Login"
import {Outlet} from "react-router-dom"
import Nav from "./Components/Nav"

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
