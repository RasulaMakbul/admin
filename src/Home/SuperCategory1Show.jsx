import React from "react"
import BannerImg from "../assets/img/banner.jpg"
import Product1 from "../assets/img/Products/1.jpg"
import Product2 from "../assets/img/Products/2.jpg"
import Product3 from "../assets/img/Products/3.jpg"
import Product4 from "../assets/img/Products/4.jpg"
import Slider from "react-slick"

const CategoryData = [
  {
    id: 1,
    title: "Category 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Facere vero velit amet tenetur ex sed nihil ducimuslaboriosam, mollitia placeat minima porro tempora deserunt",

    img: Product1,
  },
  {
    id: 2,
    title: "Category 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Facere vero velit amet tenetur ex sed nihil ducimuslaboriosam, mollitia placeat minima porro tempora deserunt",

    img: Product2,
  },
  {
    id: 3,
    title: "Category 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Facere vero velit amet tenetur ex sed nihil ducimuslaboriosam, mollitia placeat minima porro tempora deserunt",

    img: Product3,
  },
  {
    id: 4,
    title: "Category 4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Facere vero velit amet tenetur ex sed nihil ducimuslaboriosam, mollitia placeat minima porro tempora deserunt",

    img: Product4,
  },
]

const SuperCategory1Show = () => {
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
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2  items-center">
            {/* Image Section */}

            {/* text details Section */}
            <div className="flex flex-col justify-center  sm:pt-0">
              <Slider {...settings}>
                {CategoryData.map(data => (
                  <div
                    data-aos="flip-right"
                    data-aos-once="true"
                    key={data.id}
                    className="relative w-auto h-[720px]"
                  >
                    <img
                      data-aos="flip-left"
                      data-aos-once="true"
                      src={data.img}
                      className="w-full h-full z-10"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-black">
                      <div className="text-center bg-[rgba(95,93,93,0.5)] px-2 py-5">
                        <h1 className="text-8xl font-bold">{data.title}</h1>
                        <p>{data.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="" data-aos="zoom-in">
              <div className="relative w-auto h-[720px]">
                <img
                  data-aos="flip-left"
                  data-aos-once="true"
                  src={BannerImg}
                  className="w-full h-full z-10"
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white">
                  <div className="text-center bg-[rgba(95,93,93,0.5)] px-2 py-4">
                    <h1 className="text-8xl font-bold">Tams Maternity</h1>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Facere vero velit amet tenetur ex sed nihil ducimus
                      laboriosam, mollitia placeat minima porro tempora deserunt
                      aspernatur voluptas? Cupiditate nobis sint repudiandae
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SuperCategory1Show
