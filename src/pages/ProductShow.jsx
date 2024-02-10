import React from "react"
import Product1 from "../assets/img/Products/1.jpg"
import Product2 from "../assets/img/Products/2.jpg"
import Product3 from "../assets/img/Products/3.jpg"
import Product4 from "../assets/img/Products/4.jpg"
import Slider from "react-slick"
import {FaCartPlus, FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa"
import {TbHeartPlus} from "react-icons/tb"

const ProductImg = [
  {
    id: 1,
    img: Product1,
  },
  {
    id: 2,
    img: Product2,
  },
  {
    id: 3,
    img: Product3,
  },
  {
    id: 4,
    img: Product4,
  },
]

const ProductShow = () => {
  var settings = {
    dots: false,
    arrows: false,
    Infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  }
  return (
    <>
      <div className="container mx-auto mb-10">
        <div className="flex justify-center items-start pt-10">
          {/* Left Column */}
          <div className="w-1/2">
            {/* Placeholder for images */}
            <Slider {...settings}>
              {ProductImg.map(data => (
                <div
                  key={data.id}
                  className="flex justify-center items-center h-96"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
            <Slider {...settings} className="mt-5">
              {ProductImg.map(data => (
                <div key={data.id}>
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-full h-20 object-cover cursor-pointer"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Right Column */}
          <div className="w-1/2 pl-5">
            {/* Placeholder for product details */}
            <div className=" p-5">
              <h2 className="text-3xl font-bold mb-3">Product Name</h2>
              <div className="bg-gray-400 h-1 w-30 shadow-md rounded-lg mb-1"></div>
              <p className="text-gray-400 mb-3">
                Tam's Collections/2 Piece/ Regular Wear / Green Silk
              </p>

              <a
                href="#"
                className="font-semibold text-gray-600 border p-3 m-5 rounded-lg hover:bg-gray-400 hover:text-white"
              >
                36s
              </a>
              <a
                href="#"
                className="font-semibold text-gray-600 border p-3 m-5 rounded-lg hover:bg-gray-400 hover:text-white"
              >
                36s
              </a>
              <a
                href="#"
                className="font-semibold text-gray-600 border p-3 m-5 rounded-lg hover:bg-gray-400 hover:text-white"
              >
                36s
              </a>
              <a
                href="#"
                className="font-semibold text-gray-600 border p-3 m-5 rounded-lg hover:bg-gray-400 hover:text-white"
              >
                36s
              </a>
              <a
                href="#"
                className="font-semibold text-gray-600 border p-3 m-5 rounded-lg hover:bg-gray-400 hover:text-white"
              >
                36s
              </a>
              <a
                href="#"
                className="font-semibold text-gray-600 border p-3 m-5 rounded-lg hover:bg-gray-400 hover:text-white"
              >
                36s
              </a>
              <p className="text-gray-700 m-10 text-5xl">
                <strong>Price:</strong> $100
              </p>
              <div className="flex flex-row align-center mb-5">
                <button className=" bg-white  text-gray-500 font-bold py-2 px-4 rounded cursor-pointer over:scale-105  duration-300 drop-shadow-md">
                  <FaRegMinusSquare className="text-2xl over:scale-105 duration-300" />
                </button>
                <input
                  type="number"
                  className="disable border rounded-md text-gray-500 mx-2 text-xl w-20"
                  placeholder="1"
                />
                <button className=" bg-white  text-gray-500 font-bold py-2 px-4 rounded cursor-pointer over:scale-105  duration-300 drop-shadow-md">
                  <FaRegPlusSquare className="text-2xl over:scale-105 duration-300" />
                </button>
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
            <div className="bg-gray-400 h-1 w-30 shadow-md rounded-lg mb-1"></div>
            <div className="my-20">
              <div className=" flex flex-row">
                <div className="w-5/12 text-2xl font-bold">Product Code</div>
                <div className="w-1/12 text-2xl font-bold">:</div>
                <div className="w-6/12 text-2xl ">123456789</div>
              </div>
              <div className=" flex flex-row">
                <div className="w-5/12 text-2xl font-bold">Materials</div>
                <div className="w-1/12 text-2xl font-bold">:</div>
                <div className="w-6/12 text-2xl ">Cotton</div>
              </div>
              <div className=" flex flex-row">
                <div className="w-5/12 text-2xl font-bold">Origin</div>
                <div className="w-1/12 text-2xl font-bold">:</div>
                <div className="w-6/12 text-2xl font-bold">Bangladesh</div>
              </div>
            </div>
            <div className="bg-gray-400 h-1 w-30 shadow-md rounded-lg mb-1"></div>
            <div className="my-20">
              <div className="text text-center align-middle">
                <p className="text-green-500 text-md">Design By</p>
                <h5 className="text-green-500 text-2xl">
                  Sadika Tamanna Bristy
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-400 h-1 w-30 shadow-md rounded-lg mb-1"></div>
        <div className="container lext-left shadow-lg p-10">
          <h4 className="text-xl font-bold text-green-700 underline p-2">
            Description
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            hic praesentium itaque, impedit temporibus nam minima, ducimus,
            dolores mollitia eius omnis sint? Illo perspiciatis numquam expedita
            quidem id voluptates, repudiandae modi quia laudantium dicta
            deleniti harum quo aliquid nostrum recusandae mollitia, error ad
            autem ab accusantium aperiam! Nisi, pariatur laborum?
          </p>
        </div>
        <div className="bg-gray-400 h-1 w-30 shadow-md rounded-lg mb-1"></div>
        <div className="container lext-left shadow-lg p-10">
          <h4 className="text-xl font-bold text-green-700 underline p-2">
            Washing Instruction
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            hic praesentium itaque, impedit temporibus nam minima, ducimus,
            dolores mollitia eius omnis sint? Illo perspiciatis numquam expedita
            quidem id voluptates, repudiandae modi quia laudantium dicta
            deleniti harum quo aliquid nostrum recusandae mollitia, error ad
            autem ab accusantium aperiam! Nisi, pariatur laborum?
          </p>
        </div>
      </div>
    </>
  )
}

export default ProductShow
