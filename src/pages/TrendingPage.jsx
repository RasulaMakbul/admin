import React from "react"
import productImg from "../assets/img/banner.jpg"
import {FaCartPlus} from "react-icons/fa6"
import {TbHeartPlus} from "react-icons/tb"
import {Link} from "react-router-dom"

const ProductData = [
  {
    id: 1,
    img: productImg,
    title: "Product Title 1",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
    price: "tk. 1,250/-",
    productUrl: "/show-product",
  },
  {
    id: 2,
    img: productImg,
    title: "Product Title 2",
    rating: 5.0,
    color: "red",
    aosDelay: "0",
    price: "tk. 1,250/-",
    productUrl: "/show-product",
  },
  {
    id: 3,
    img: productImg,
    title: "Product Title 3",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
    price: "tk. 1,250/-",
    productUrl: "/show-product",
  },
  {
    id: 4,
    img: productImg,
    title: "Product Title 4",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
    price: "tk. 1,250/-",
    productUrl: "/show-product",
  },
  {
    id: 5,
    img: productImg,
    title: "Product Title 5",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
    price: "tk. 1,250/-",
    productUrl: "/show-product",
  },
  {
    id: 6,
    img: productImg,
    title: "Product Title 6",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
    price: "tk. 1,250/-",
    productUrl: "/show-product",
  },
  {
    id: 7,
    img: productImg,
    title: "Product Title 7",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
    price: "tk. 1,250/-",
    productUrl: "/show-product",
  },
  {
    id: 8,
    img: productImg,
    title: "Product Title 8",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
    price: "tk. 1,250/-",
    productUrl: "/show-product",
  },
]

const TrendingPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center m-10">
        {ProductData.map(data => (
          <div
            key={data.id}
            data-aos="zoom-out"
            data-aos-delay={data.aosDelay}
            className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md"
          >
            <Link to={data.productUrl}>
              <div className="absolute top-2 left-2 bg-[rgba(86,199,124,0.5)] text-white px-2 py-1 rounded-tr-lg rounded-br-lg">
                <span>Trending</span>
              </div>
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src={data.img}
                    alt="Product Image"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Product Category
                  </div>
                  <a
                    href="#"
                    className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                  >
                    {data.title}
                  </a>
                  <p className="mt-2 text-gray-500">
                    Product description or details go here.
                  </p>
                  <div className="mt-4">
                    <span className="text-gray-600">Price: </span>
                    <span className="text-gray-900 font-semibold">
                      {data.price}
                    </span>
                  </div>
                  <div className="mt-4 flex felx-row gap-5">
                    <button className=" bg-white  text-green-500 font-bold py-2 px-4 rounded cursor-pointer over:scale-105 duration-300  drop-shadow-md">
                      <TbHeartPlus className="text-2xl " />
                    </button>
                    <button className=" bg-white  text-red-500 font-bold py-2 px-4 rounded cursor-pointer over:scale-105  duration-300 drop-shadow-md">
                      <FaCartPlus className="text-2xl over:scale-105 duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default TrendingPage
