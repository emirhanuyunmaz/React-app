import { useEffect, useState } from "react"
import Card from "../components/Card"
import Categories from "../components/Categories"

export default function Home (){
    const [product,setProducts] = useState([])

    //Tüm ürünlerin çekilmesi işlemi.
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json))
    } , [])

    return (<>
        <div>
        <h1>Home</h1>
            <div className="row">
                <div className="col-sm-8">
                    <div className="row">
                    {product.map((item) => {
                    return (
                        <Card key={item.id} selectedProduct = {item} />    
                    )
                })}
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="row">
                        <Categories/>
                    </div>
                </div>
            </div>
        </div>

    </>)
}