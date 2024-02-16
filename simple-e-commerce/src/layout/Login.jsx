import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login( {login , loginActiveUser } ){
    const navigate = useNavigate()
    let [errControl,setErrControl] = useState(false)
    let users = localStorage.getItem("users") !== null ? JSON.parse(localStorage.getItem("users")) : []
    //console.log("users : ",users)
    function control (item , index , arr ) {
        if ( item.userEmail ===  login.loginUserEmail && item.userPassword === login.loginUserPassword ){
            loginActiveUser.setActiveUser(item)
            localStorage.setItem("activeUser" , JSON.stringify(item))
            navigate("/")
        }else{
            setErrControl(true)
            loginActiveUser.setActiveUser(null)
        }
    }

    function submitOnClick(event){
        event.preventDefault()
        users.forEach(control)
        console.log(loginActiveUser.activeUser)
    }

    return(
    <div className="container">
        <div className="row">
        
            <div className="col-sm-9 mx-auto">
            
                <h1 className="text-center">Login</h1>
                {
                    errControl &&
                    <div className="alert alert-danger" role="alert">
                        Please try again
                    </div>
                }
                <form>
                    <div className="mb-3">
                        <label htmlFor="loginInputEmail" className="form-label">Email address</label>
                        <input type="email" value={login.loginUserEmail} onChange={(props) => login.setLoginUserEmail(props.target.value)} className="form-control" id="loginInputEmail" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="loginInputPassword" className="form-label">Password</label>
                        <input type="password" value={login.loginUserPassword} onChange={(props) => login.setLoginUserPassword(props.target.value)} className="form-control" id="loginInputPassword"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="Check"/>
                        <label className="form-check-label" htmlFor="Check">Check me out</label>
                    </div>
                    <button className="btn btn-primary me-3" onClick={submitOnClick}>Submit</button>
                    <NavLink className={"btn btn-outline-success"} to={"/signup"}>Sign Up</NavLink>
                </form>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-sm-9 mx-auto">
            
            </div>
        </div>
    </div>
    )
} 