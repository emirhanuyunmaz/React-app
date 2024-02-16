import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Navbar({loginActiveUser}) {
  const navigate = useNavigate()

  function logout(){
    localStorage.removeItem("activeUser")
    navigate("/login")
    location.reload()
    
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">E-Commerce</Link>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>

              {
                loginActiveUser.activeUser !== null &&
                <li className="nav-item">
                  <NavLink className="nav-link" to="/favorite">Favorite</NavLink>
                </li>
              }

              {
                loginActiveUser.activeUser !== null &&
                <li className="nav-item">
                  <NavLink className="nav-link"  onClick={logout}>Logout</NavLink>
                </li>
              }

              {
                loginActiveUser.activeUser === null &&
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
              }

            </ul>
          </div>
      </div>
    </nav>
    </>
  )
}

