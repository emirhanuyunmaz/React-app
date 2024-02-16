import React, { useState } from "react"
import { NavLink, json } from "react-router-dom"

export default function Signup( {signup} ) {
    
    const [passswortError , setPasswordError] = useState(false)

    function SignupOnclick (){

        if (signup.signupUserPassword1 === signup.signupUserPassword2){
            const signupUser = {"userName":signup.signupUserName,
                "userEmail" : signup.signupUserEmail,
                "userPassword" : signup.signupUserPassword1
            }
            let users = localStorage.getItem("users") !== null ? JSON.parse(localStorage.getItem("users")) : []
            
            console.log(users)
            users.push(signupUser)
            localStorage.setItem("users",JSON.stringify(users))
            setPasswordError(false)
            console.log(signupUser)
        }else{
            setPasswordError(true)
        }
        
        
    }
    return (<div className="container mt-3">
        <div className="col-sm-9 mx-auto">
            {
                passswortError && 
                <div class="alert alert-danger" role="alert">
                Passwords are wrong
                </div>
            }
            <form method="POST" >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">User Name</label>
                    <input type="text" onChange={(props) =>signup.setSignupUserName(props.target.value) } value={signup.signupUserName} className="form-control" id="name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="signupInputEmail" className="form-label">Email address</label>
                    <input type="email" value={signup.signupUserEmail} onChange={(props) => signup.setSignupUserEmail(props.target.value)} className="form-control" id="signupInputEmail" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="signupInputPassword1" className="form-label">Password</label>
                    <input type="password" value={signup.signupUserPassword1} onChange={(props) => signup.setSignupUserPassword1(props.target.value) } className="form-control" id="signupInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="signupInputPassword2" className="form-label">Password</label>
                    <input type="password" value={signup.signupUserPassword2} onChange={(props) => signup.setSignupUserPassword2(props.target.value)} className="form-control" id="signupInputPassword2"/>
                </div>
                <NavLink to={"/signup"} onClick={SignupOnclick} className="btn btn-primary">Submit</NavLink>
            </form>
        </div>
    </div>)
}