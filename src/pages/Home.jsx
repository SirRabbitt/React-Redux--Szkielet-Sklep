import React, { useEffect, useState } from "react"
import { Banner } from "../componets/banner"
import { Products } from "../componets/Products"
import { useLoaderData } from "react-router-dom"

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data)
  },[data])
 
  return (
    <div>
    <Banner/>
    <Products products={products} />
    </div>
  )
}

export default Home
