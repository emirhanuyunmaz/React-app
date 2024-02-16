import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CategoryList() {

    const [categoryes,setCategores] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(json => setCategores(json))
    }, [])

    return (<>
    <div className="list-group">
        {
            categoryes.map((item,index) => (
                <NavLink key={index} to={`category/${item}`} className="list-group-item list-group-item-action " aria-current="true">
                    {item}
                </NavLink>
            ))
        }
        
            
        



        
    </div>
    
    </>)
}