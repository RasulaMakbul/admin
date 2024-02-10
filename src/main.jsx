import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"
import Home from "./Home/Home.jsx"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ProductShow from "./pages/ProductShow.jsx"
import TrendingPage from "./pages/TrendingPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/show-product",
        element: <ProductShow />,
      },
      {
        path: "/trending",
        element: <TrendingPage />,
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
