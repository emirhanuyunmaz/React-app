import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../style.css"


export default function ProductDetail() {
    //Card üzerine tıklandığı zaman ürün bilgilerinin listeleneceği sayfa.
    const {id} = useParams()
    const [selectedProduct,setSelectedProduct] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => setSelectedProduct(json))
    }, [])

    return (<>
        <div >
            <img className="detailImage" src={`${selectedProduct.image}`} alt="" />
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
        </div>
        
    </>)
}