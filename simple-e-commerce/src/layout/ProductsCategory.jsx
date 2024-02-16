import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../components/Card"

export default function ProductsCategory( {loginActiveUser} ){
    const [products,setProducts] = useState([])
    const {category} = useParams()
    
    useEffect(() => {
        if(category){
            fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(err => console.error(err))
        }else{
            fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(err => console.error(err))
        }
    },[category])

    return (<>
        {products.map(item => <Card key={item.id} item ={item} loginActiveUser = {loginActiveUser} />)}
    </>)
}