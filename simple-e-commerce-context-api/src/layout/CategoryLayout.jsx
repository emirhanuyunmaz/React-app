import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../components/Card"

export default function CategoryLayout (){
    const {categoryName} = useParams()
    const [categoryProduct,setCategoryProduct] = useState([])

    //Kategori bilgilerinin çekilmesi işlemi.
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then((res) => res.json())
        .then((json) => setCategoryProduct(json))
    } , [categoryName])

    return (<div className="row">
        
        {categoryProduct.map((item) => {
            return (<Card key={item.id} selectedProduct = {item}/>)
        })}
        
    </div>)
}