import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Favorite ( {loginActiveUser} ) {

    const [activeUserFav,setActiveUserFav] = useState([])
    let control = false
     const activeUserFavList = JSON.parse(localStorage.getItem(JSON.stringify(loginActiveUser.activeUser.userName)))
    //console.log(activeUserFavList.length)
    
    useEffect(() => {
        if(activeUserFavList !== null && !control){
            control=true
            //console.log(activeUserFavList)
            activeUserFavList.map((item) => (
            (fetch(`https://fakestoreapi.com/products/${item}`))
            .then((res) => res.json())
            .then((json) => (setActiveUserFav((prev) => [...prev ,json] )))))
            setActiveUserFav([])
        } 
    } ,[])
 
    return(<>
        <h1>Favorite Product</h1>
        {   (activeUserFavList !== null) &&
            activeUserFav.map((item , index ) => <Card key={index} item = {item} loginActiveUser = {loginActiveUser}/>)
        }
        
    </>) 

}