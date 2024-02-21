import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ActiveUserContext = createContext()

function ActiveUserContextProvider({children}){
    //Aktif kullanıcı bilgilerinin iletilmsei işlemi.
    const navigation = useNavigate()
    const [activeUser,setActiveUser] = useState({})
    const [activeUserErr,setActiveUserErr] = useState("")
    const [users,setUsers] = useState([])
    const [emailControl,setEmailControl] = useState("")
    const [passwordControl,setPasswordControl] = useState("")

    useEffect(()=> {
        setUsers(localStorage.getItem("users") === null ? [] : JSON.parse(localStorage.getItem("users")))
    }, [])

    //Kayıt yapmak için kullanıcı adı parolanın local storage den kontrol edilmesi işlemi.
    function userControl(event){
        event.preventDefault()

        users.map((item) => {
            if(item.userEmail === emailControl && item.userPassword === passwordControl ){   
                setActiveUser({"email":emailControl,"password":passwordControl})
                localStorage.setItem("activeUser",JSON.stringify({"email":emailControl,"password":passwordControl}))
                setActiveUserErr("")
                navigation("/")
                location.reload()
                return
            }
            else{
                setActiveUserErr("Account not found")
                return
            }
        })
    }

    const control = {
        emailControl,
        setEmailControl,
        passwordControl,
        setPasswordControl,
        userControl,
        activeUserErr,
        activeUser,
        users,
        setUsers,
        setActiveUserErr
    }

    return (
        <ActiveUserContext.Provider value={control}>
            {children}
        </ActiveUserContext.Provider>
    )
}

export {ActiveUserContext , ActiveUserContextProvider}