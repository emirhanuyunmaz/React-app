import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInContext = createContext()

function SignInContextProvider({children}){
    //Giriş yapmak için girilen bilgilerin kontrol ve kaydı için yapılan işlemler.
    const navigate = useNavigate()
    const [err,setErr] = useState("")
    const [userName,setUserName] = useState("")
    const [userEmail,setUserEmail] = useState("")
    const [userPassword1,setUserPassword1] = useState("")
    const [userPassword2,setUserPassword2] = useState("")

    //Kayıt için verilerin kontrol edilmesi işlemi.
    function signInOnClick(event) {
        event.preventDefault()
        if(userPassword1 === userPassword2 && userPassword1!== ""){

            let getUserList = JSON.parse(localStorage.getItem("users")) === null ? [] : JSON.parse(localStorage.getItem("users")) 
            getUserList.push({
            userEmail:userEmail,
            userName:userName,
            userPassword:userPassword1})
            localStorage.setItem("users",JSON.stringify(getUserList))
            setErr("")
        }else if(userName === "" || userEmail === "" || userPassword1 === "" || userPassword2 === "" ){
            //Hata 
            setErr("Please do not leave empty space")
        }else{
            //Hata
            setErr("Passwords do not match")
        }
        navigate("/login") //İşlemler bitince sayfa yönlendirme işlemi
    }

    const userSignIn = {
        userName,setUserName,
        userEmail,setUserEmail,
        userPassword1,setUserPassword1,
        userPassword2,setUserPassword2,
        err,signInOnClick
    }

    return(
        <SignInContext.Provider value = {userSignIn}>
            {children}
        </SignInContext.Provider>
    )
}
export {SignInContext,SignInContextProvider}