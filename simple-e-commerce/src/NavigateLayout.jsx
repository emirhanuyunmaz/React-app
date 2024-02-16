import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import About from "./layout/About";
import NotFound from "./layout/NotFound";
import Contact from "./layout/Contact";
import ProductsCategory from "./layout/ProductsCategory";
import IndexLayout from "./layout/IndexLayout";
import ProductsDetail from "./layout/ProductDetail";
import Login from "./layout/Login";
import Signup from "./layout/Signup";
import Favorite from "./layout/Favorite";

export default function NavigateLayout ({login , signup , loginActiveUser }){
 //loginActiveUser.setActiveUser(JSON.parse(localStorage.getItem("activeUser")))
    return (<>
        <Routes>
            <Route path="/" element={<IndexLayout/>} >
                <Route index element={<Home loginActiveUser = {loginActiveUser} />} />
                <Route path="category/:category" element={<ProductsCategory loginActiveUser = {loginActiveUser} />}/>
                <Route path="/product/:productID" element={<ProductsDetail/>}/>
                
                {
                loginActiveUser.activeUser !== null &&
                <Route path="/favorite" element={<Favorite loginActiveUser = {loginActiveUser} />}/>
                }

            </Route>
            <Route path="/signup" element={<Signup signup = {signup} />}/>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>}/>
            {   
                loginActiveUser.activeUser === null &&
                <Route path="/login" element={<Login login = {login} loginActiveUser = {loginActiveUser} />}/>
            }
            
            <Route path="*" element = {<NotFound/>}/>
        </Routes>
    
    
    </>)
}