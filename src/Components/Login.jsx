// import React from 'react'
import Logo from "../../src/assets/logo/logo.jpg"
const BannerImg = {
  backgroundImage: `url(${Logo})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100em", // Set height to 100vh (100% of the viewport height)
  width: "100%",
}
const Login = () => {
  return (
    <>
      <div
        className=" bg-gray-100 dark:bg-gray-800 text-white"
        style={BannerImg}
      >
        <div className="Container px-10 py-10">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 ">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dak:bg-gray-900 rounded-md duration-200 w-[400px] ">
              {/* header */}
              <div className="flex items-center justify-between">
                <div className="">
                  <img
                    src={Logo}
                    className="rounded-full w-100 h-100 "
                    alt=""
                  />
                </div>
              </div>
              <div className="container backdrop-blur-sm py-10">
                <div className="space-y-6 max-w-xl mx-auto">
                  <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
                    User Login
                  </h1>
                </div>
              </div>
              {/* form */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Insert your name"
                  className="w-full rounded-full border border-gray-500 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <textarea
                  className="w-full rounded-lg border border-gray-500
                  dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  placeholder="Insert your address"
                ></textarea>
                <input
                  type="text"
                  placeholder="Insert your email address"
                  className="w-full rounded-full border border-gray-500 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  placeholder="Insert your password"
                  className="w-full rounded-full border border-gray-500 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
