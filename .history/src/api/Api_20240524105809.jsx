import axios from "axios";

export async function productsdata(){
    const Products = await axios.get(
        "https://fakestoreapiserver.reactbd.com/products"
    );
}