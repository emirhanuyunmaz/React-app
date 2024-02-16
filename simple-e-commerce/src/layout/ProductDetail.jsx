import React from "react"
import { useEffect, useState  } from "react"
import { useParams } from "react-router-dom"

export default function ProductsDetail() {
    // const params = useParams()

    const {productID} =useParams()
    const [product,setProduct] = useState({})
    console.log(productID)

    useEffect(()=> {
        fetch(`https://fakestoreapi.com/products/${productID}`)
        .then(res => res.json())
        .then(json => setProduct(json))
    } ,[])

    return (<>
        <div className="container">
            <div className="row">
                <div className="col-sm-10 m-1">
                    <img src={`${product.image}`} alt="" />
                </div>
            </div>
            <div className="row col-sm-10 m-1">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
        </div>
    </>)
}