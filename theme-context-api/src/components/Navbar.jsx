import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Navbar(){
    //Oluşturulan context bileşenlerine erişme ve kullanma işlemi.
    const {handleClick,themeName} = useContext(ThemeContext)

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${themeName}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className={"nav-link"} to={"/"} >Home</NavLink>
                    <NavLink  className={"nav-link"}  to={"/about"}>About</NavLink>
                    <NavLink className={"nav-link"} to={"/contact"}>Contact</NavLink>
                </div>
                    <a onClick={handleClick} className={"btn text-primary link nav-link ms-auto"} >{themeName === "dark" ? "light" : "dark"}</a>
            </div>
        </div>
        </nav>
    )
}