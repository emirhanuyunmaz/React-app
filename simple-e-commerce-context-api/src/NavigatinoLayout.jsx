import { Route, Routes } from "react-router-dom";
import { About, CategoryLayout, Contact, Favori, Home,Login,NotFound, ProductDetail, SignIn } from "./layout";
import { useEffect, useState } from "react";

export default function NavigationLayout(){
    //Sayfaların hangi link ile nereye yönlendirileceği işlemi.
    const [acitveUser,setActiveUser] = useState()
    useEffect(() => {
        setActiveUser(JSON.parse(localStorage.getItem("activeUser")))
    }, [])
    return (<>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/category/:categoryName" element={<CategoryLayout/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
            {acitveUser === null ? <Route path="/signin" element={<SignIn/>}/>: <></>}
            {acitveUser === null ? <Route path="/login" element={<Login/>}/>: <></>}
            {acitveUser !== null ? <Route path="/favori" element={<Favori/>}/>: <></>}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>)
}