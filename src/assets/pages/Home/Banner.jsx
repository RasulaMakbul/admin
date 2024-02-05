import React from "react"
import Logo from "../../logo/logo.jpg"
import {FaShoppingBag} from "react-icons/fa"

const Banner = () => {
  return (
    <>
      <div className="bg-primary py-12 xl:px-28 px-4">
        <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
          <div className="md:w-1/2">
            <img src={Logo} alt="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-light mb-5">Collections</h1>
            <p className="text-xl mb-7">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              eligendi obcaecati nam totam iure maxime eius quibusdam vitae
              illum nisi.
            </p>
            <button className="flex gap-3 items-center bg-green-600 hover:bg-orange-200 px-6 py-2 text-gray-200 font-semibold rounded-full mb-4">
              <FaShoppingBag />
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
