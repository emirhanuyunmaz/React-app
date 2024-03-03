import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link" to={`/`}>Home</NavLink>
                    <NavLink className="nav-link" to={`/fetch`}>Fetch</NavLink>
                    <NavLink className="nav-link" to={`/axios`}>Axios</NavLink>
                </div>
                </div>
            </div>
        </nav>
    )
}