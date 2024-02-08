import React from "react"
import BannerImg from "../assets/img/banner.jpg"
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
      <div className="relative ">
        <div className="container w-full ">
          <Slider {...settings}>
            {BannerItems.map(item => (
              <div key={item.id} className="relative w-auto h-[720px]">
                <img
                  data-aos="flip-left"
                  data-aos-once="true"
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-full h-full z-10"
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white">
                  <div className="text-center bg-[rgba(95,93,93,0.5)] px-2 py-5">
                    <h1 className="text-8xl font-bold">{item.title}</h1>
                    <p>{item.description}</p>
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
