import React from "react"
import productImg from "../assets/img/banner.jpg"
import Slider from "react-slick"

const ProductData = [
  {
    id: 1,
    img: productImg,
    title: "Product Title 1",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: productImg,
    title: "Product Title 2",
    rating: 5.0,
    color: "red",
    aosDelay: "0",
  },
  {
    id: 3,
    img: productImg,
    title: "Product Title 3",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
  },
  {
    id: 4,
    img: productImg,
    title: "Product Title 4",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
  },
  {
    id: 5,
    img: productImg,
    title: "Product Title 5",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
  },
  {
    id: 6,
    img: productImg,
    title: "Product Title 6",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
  },
  {
    id: 7,
    img: productImg,
    title: "Product Title 7",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
  },
  {
    id: 8,
    img: productImg,
    title: "Product Title 8",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
  },
]

const OnSale = () => {
  var settings = {
    dots: true,
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
            <p data-aos="fade-up" className="text-sm text-primary">
              Top Selling Products for You
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Products
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
              optio incidunt. Molestiae id molestias doloribus repellat
              explicabo. Iure, repellendus. Id?
            </p>
          </div>
          {/* Body Section */}
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* card section */}
              <Slider {...settings}>
                {ProductData.map(data => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={data.id}
                    className="space-y-3"
                  >
                    <img
                      src={data.img}
                      className="w-[220px] h-[150px] object-fit rounded-md"
                      alt=""
                    />
                    <div className="">
                      <h3 className="font-semibold">{data.title}</h3>
                      <p className="text-sm text-gray-600">{data.color}</p>
                      <div className="flex items-center gap-1">
                        <span>{data.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* view all button */}
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-3 rounded-md">
                {" "}
                View All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OnSale
