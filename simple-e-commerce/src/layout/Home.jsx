import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Outlet, useParams } from "react-router-dom";

export default function Home ({ loginActiveUser }) {

    const [products,setProducts] = useState([])
    const {category} = useParams()
    //loginActiveUser.setActiveUser(JSON.parse(localStorage.getItem("activeUser")))
    //console.log("home :: ",loginActiveUser.activeUser)
    //console.log(category)
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



    return(<>
        {products.map(item => <Card key={item.id} item ={item} loginActiveUser = {loginActiveUser} />)}
    </>)
}