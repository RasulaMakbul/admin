import React from "react"
import Banner from "./Banner"
import OnSale from "./OnSale"
import SuperCategoryShow from "./SuperCategoryShow"
import SuperCategory1Show from "./SuperCategory1Show"
import Trending from "./Trending"
import NewArrival from "./NewArrival"
import ExploreNewLook from "./ExploreNewLook"
import ChooseYourChoice from "./ChooseYourChoice"

const Home = () => {
  return (
    <>
      <div className="w-screen">
        <Banner />
        <OnSale />
        <SuperCategoryShow />
        <SuperCategory1Show />
        <NewArrival />
        <Trending />
        <ExploreNewLook />
        <ChooseYourChoice />
      </div>
    </>
  )
}

export default Home
