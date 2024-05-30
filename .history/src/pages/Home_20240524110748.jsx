import React from "react"
import { Banner } from "../componets/banner"
import { Products } from "../componets/Products"
import { useLoaderData } from "react-router-dom"

const Home = () => {
  const data = useLoaderData()
  return (
    <div>
    <Banner/>
    <Products/>
    </div>
  )
}

export default Home
