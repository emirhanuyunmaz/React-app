import { useEffect, useState } from "react"
import FavCard from "../components/FavCard"

export default function Favori (){
    //Email adresi ile beğenilen gönderilerin local storage kayıt ve kayıtlı verilerin çekilmesi işlemi.
    const [activeUser,setActiveUser] = useState({})
    const [userFavList,setUserFavList] = useState([])
    const [favProductList,setFavProductList] = useState([])

    //Aktif kullanıcının e mail adresinin alıması işlemi.
    useEffect(() => {
        setActiveUser(JSON.parse(localStorage.getItem("activeUser")))
    } ,[])

    //Aktif kullanıcı gelince kullanıcıya ait favori idlerinin alınması işlemi.
    useEffect(() => {
        setUserFavList(JSON.parse(localStorage.getItem(activeUser.email)) === null ? [] : JSON.parse(localStorage.getItem(activeUser.email)))
    } ,[activeUser])

    //Alınan favori idlerinin linklerinin kadyı işlemi.
    useEffect(() => {
        if(userFavList.length !== 0){
            userFavList.map((item) => {
                fetch(`https://fakestoreapi.com/products/${item}`)
                .then((res) => res.json())
                .then((json) => setFavProductList((props) => [...props,json]) )
            })
            
        }
    }, [userFavList])


    return (<>
        <h1>Fav</h1>
        <div className="row">
            <div className="col-sm-8">
                <div className="row">
                {favProductList.map((item) => <FavCard key={item.id} selectedProduct={item}/>)}
                </div>
            </div>
        </div>
    </>)
}