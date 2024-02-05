import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"
import Home from "./assets/pages/Home/Home.jsx"

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
