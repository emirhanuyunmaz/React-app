import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export default function Categories() {
    const [categoryList,setCategoryList] = useState([])

    //Verilerin çekilmesi işlemi.
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => setCategoryList(json))
    } ,[])

    return (<>
    <div className="list-group">
        {
            categoryList.map((item,index) => {
            return (<NavLink key={index} to={`category/${item}`} className={"list-group-item list-group-item-action"}>{item}</NavLink>
            )
        })}
        
    </div>
        
    </>)
}