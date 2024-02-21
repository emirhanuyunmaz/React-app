import {  useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [activeUser,setActiveUser] = useState({})
    
    const navigate = useNavigate()

    function onClickLogout(){
        localStorage.removeItem("activeUser")
        navigate("/login")
        location.reload()
    }
    //Localstorage de aktif kullanıcının çekilmesi işlemi
    useEffect(() => {
        setActiveUser(JSON.parse(localStorage.getItem("activeUser")) )
    }, [])
    
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className={"nav-link"}  to={"/"} >Home</NavLink>
                        <NavLink className={"nav-link"} to={"/about"}>About</NavLink>
                        <NavLink className={"nav-link"} to={"/contact"}>Contact</NavLink>
                        {activeUser !== null ? <NavLink className={"nav-link"} to={"/favori"}>Favori</NavLink>:<></>}
                        {activeUser === null ? <NavLink className={"nav-link"} to={"/signin"}>Sign In</NavLink>:<></>}
                        {activeUser === null ? <NavLink className={"nav-link"} to={"/login"}>Login</NavLink> : <></>}
                        {activeUser !== null ? <NavLink onClick={onClickLogout} className={"nav-link"}>Logout</NavLink> : <></>}
                    </div>
                </div>
            </div>
        </nav>
    </>)
}