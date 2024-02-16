import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card ({item , loginActiveUser }){
    


    function activeUserFav(event){
        event.preventDefault()
        //console.log(loginActiveUser.activeUser.userName)
        
        let favList = JSON.parse(localStorage.getItem(JSON.stringify(loginActiveUser.activeUser.userName))) === null ? [] : JSON.parse(localStorage.getItem(JSON.stringify(loginActiveUser.activeUser.userName))) 
        console.log(favList)
        favList.push(item.id)
        localStorage.setItem(JSON.stringify(loginActiveUser.activeUser.userName),JSON.stringify(favList))
        console.log(favList)
        
    }

    return (<>
        <div className="col-sm-4 ">
            <div className="card p-3 m-1" >
            <Link to={`/product/${item.id}`} ><img src={`${item.image}`} className="card-img-top card-img" alt={`${item.title}`} /></Link>
                <div className="card-body">
                    <h5 className="card-title">{item.title.substring(0,10)}...</h5>
                    <p className="card-text">{item.description.substring(0,10)}...</p>
                    { loginActiveUser.activeUser !== null && <a href="/" className="btn btn-primary" onClick={activeUserFav}>Fav</a>}
                </div>
            </div>
        </div>
    
    </>)
}