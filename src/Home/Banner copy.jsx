import React from "react"
import Logo from "../../logo/logo.jpg"
import BannerImg from "../../img/banner.jpg"
import {FaShoppingBag} from "react-icons/fa"
import Slider from "react-slick"

const BannerItems = [
  {
    id: 1,
    title: "Tams Collection",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eligendi obcaecati nam totam iure maxime eius quibusdam vitae illum nisi.",
    imgUrl: BannerImg,
  },
  {
    id: 2,
    title: "Tams Collection",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eligendi obcaecati nam totam iure maxime eius quibusdam vitae illum nisi.",
    imgUrl: BannerImg,
  },
  {
    id: 3,
    title: "Tams Collection",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eligendi obcaecati nam totam iure maxime eius quibusdam vitae illum nisi.",
    imgUrl: BannerImg,
  },
  {
    id: 4,
    title: "Tams Collection",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eligendi obcaecati nam totam iure maxime eius quibusdam vitae illum nisi.",
    imgUrl: BannerImg,
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
      <div className="relative overflow-hidden w-full h-[760px] bg-gray-100">
        <div className="container">
          <Slider {...settings}>
            {BannerItems.map(data => (
              <div
                key={data.id}
                className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
                style={{backgroundImage: `url(${data.imgUrl})`}}
              >
                <div className="text-center text-white">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-3xl sm:text-6xl lg:text-7xl font-bold mb-4"
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
                    className="mt-4"
                  >
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Banner
