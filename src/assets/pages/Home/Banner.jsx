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
  return <></>
}

export default Banner
