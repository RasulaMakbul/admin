import React from "react"
import Logo from "../../logo/logo.jpg"
import {FaShoppingBag} from "react-icons/fa"
import Slider from "react-slick"

const BannerItems = [
  {
    id: 1,
    title: "Tams Collection",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eligendi obcaecati nam totam iure maxime eius quibusdam vitae illum nisi.",
    imgUrl: Logo,
  },
  {
    id: 2,
    title: "Tams Collection",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eligendi obcaecati nam totam iure maxime eius quibusdam vitae illum nisi.",
    imgUrl: Logo,
  },
  {
    id: 3,
    title: "Tams Collection",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eligendi obcaecati nam totam iure maxime eius quibusdam vitae illum nisi.",
    imgUrl: Logo,
  },
  {
    id: 4,
    title: "Tams Collection",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eligendi obcaecati nam totam iure maxime eius quibusdam vitae illum nisi.",
    imgUrl: Logo,
  },
]

const Banner = () => {
  var settings = {
    dots: false,
    arrows: false,
    Infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  }
  return (
    <>
      <div className="bg-primary py-12 xl:px-28 px-4">
        <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
          <Slider {...settings}>
            {BannerItems.map(data => (
              <div className="" key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-3xl sm:text-6xl lg:text-7xl font-bold "
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-sm"
                    >
                      {data.description}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                      className=""
                    >
                      <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                        Order Now{" "}
                      </button>
                    </div>
                  </div>
                  {/* Image section */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
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
