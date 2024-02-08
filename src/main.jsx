import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"
import Home from "./Home/Home.jsx"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={router} />
)
