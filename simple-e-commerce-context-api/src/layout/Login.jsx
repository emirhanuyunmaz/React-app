import { useContext, useEffect } from "react"
import { ActiveUserContext } from "../context/ActiveUserContext"
import { useNavigate } from "react-router-dom"

export default function Login () {
    const activeUser = useContext(ActiveUserContext)
    const navigation = useNavigate()
    //Kullanıcı giriş için users verilerinin çekilmesi işlemi.
    useEffect(()=> {
        activeUser.setUsers(localStorage.getItem("users") === null ? [] : JSON.parse(localStorage.getItem("users")))
    }, [])

    //Giriş için yapılan kontrol işlmeleri.
    function userControl(event){
        event.preventDefault()
        activeUser.users.map((item) => {
            if(item.userEmail === activeUser.emailControl && item.userPassword === activeUser.passwordControl ){   
                localStorage.setItem("activeUser",JSON.stringify({"email":activeUser.emailControl,"password":activeUser.passwordControl}))
                activeUser.setActiveUserErr("")
                navigation("/")
                location.reload()
                return
            }
            else{
                activeUser.setActiveUserErr("Account not found")
                return
            }
        })
    }

    return (
    <div className="container">
        <div className="col-sm-8 mx-auto">
        <h1 className="text-center">Login</h1>
        { activeUser.activeUserErr !== "" ? <div className="alert alert-warning" role="alert">
                    {activeUser.activeUserErr}
        </div>:<></>}
        <form>
            <div className="mb-3">
                <label htmlFor="loginInputEmail" className="form-label">Email address</label>
                <input type="email" value={activeUser.emailControl} onChange={(prev) => activeUser.setEmailControl(prev.target.value)} className="form-control" id="loginInputEmail" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="loginInputPassword" className="form-label">Password</label>
                <input type="password" value={activeUser.passwordControl} onChange={(prev) => activeUser.setPasswordControl(prev.target.value)} className="form-control" id="loginInputPassword"/>
            </div>
            <button type="submit" onClick={userControl} className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
    )
}