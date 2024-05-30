import React, { useEffect, useState } from "react"
import { Banner } from "../componets/banner"
import { Products } from "../componets/Products"
import { useLoaderData } from "react-router-dom"

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData()
  useEffect(() => {
    setProducts()
  })
  console.log(data.data)
  return (
    <div>
    <Banner/>
    <Products/>
    </div>
  )
}

export default Home
