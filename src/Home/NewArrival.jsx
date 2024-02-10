import React from "react"
import productImg from "../assets/img/banner.jpg"
import Slider from "react-slick"

import {FaCartPlus} from "react-icons/fa6"
import {TbHeartPlus} from "react-icons/tb"

const ProductData = [
  {
    id: 1,
    img: productImg,
    title: "Product Title 1",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
    price: "tk. 1,250/-",
  },
  {
    id: 2,
    img: productImg,
    title: "Product Title 2",
    rating: 5.0,
    color: "red",
    aosDelay: "0",
    price: "tk. 1,250/-",
  },
  {
    id: 3,
    img: productImg,
    title: "Product Title 3",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
    price: "tk. 1,250/-",
  },
  {
    id: 4,
    img: productImg,
    title: "Product Title 4",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
    price: "tk. 1,250/-",
  },
  {
    id: 5,
    img: productImg,
    title: "Product Title 5",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
    price: "tk. 1,250/-",
  },
  {
    id: 6,
    img: productImg,
    title: "Product Title 6",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
    price: "tk. 1,250/-",
  },
  {
    id: 7,
    img: productImg,
    title: "Product Title 7",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
    price: "tk. 1,250/-",
  },
  {
    id: 8,
    img: productImg,
    title: "Product Title 8",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
    price: "tk. 1,250/-",
  },
]

const NewArrival = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 14,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "Linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          Infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-10 mx-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-md text-primary">
              Just Came Out
            </p>
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold text-green-600 animate-bounce"
            >
              New Arrival
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
              optio incidunt. Molestiae id molestias doloribus repellat
              explicabo. Iure, repellendus. Id?
            </p>
          </div>
          {/* Body Section */}
          <div className="">
            <Slider {...settings}>
              {/* card section */}

              {ProductData.map(data => (
                <div
                  key={data.id}
                  data-aos="zoom-out"
                  data-aos-delay={data.aosDelay}
                  className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <div className="absolute top-2 left-2 bg-[rgba(62,150,84,0.5)] text-white px-2 py-1 rounded-tr-lg rounded-br-lg">
                    <span>New Arrival</span>
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
                      <div className="mt-4">
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
                  </div>
                </div>
              ))}
            </Slider>
            {/* view all button */}
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-3 rounded-md">
                {" "}
                All Prooduct On Sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewArrival
