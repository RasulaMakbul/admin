import React from "react"
import Product1 from "../assets/img/Products/1.jpg"
import Product2 from "../assets/img/Products/2.jpg"
import Product3 from "../assets/img/Products/3.jpg"
import Product4 from "../assets/img/Products/4.jpg"

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

const ExploreNewLook = () => {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-10 mx-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-6xl font-bold">
              Explore New Look
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
              optio incidunt. Molestiae id molestias doloribus repellat
              explicabo. Iure, repellendus. Id?
            </p>
          </div>
          <div className="relative ">
            <div className="container w-full ">
              {CategoryData.map(item => (
                <div key={item.id} className="relative w-auto h-auto scale-100">
                  <img
                    data-aos="flip-left"
                    data-aos-once="true"
                    src={item.img}
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExploreNewLook
