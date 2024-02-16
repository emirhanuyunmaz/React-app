import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import NavigateLayout from './NavigateLayout'


function App() {
  //Buradaki değişkenleri localstorage kaydetmek için kullanacağız.
  const [signupUserName,setSignupUserName] = useState("")
  const [signupUserEmail,setSignupUserEmail] = useState("")
  const [signupUserPassword1,setSignupUserPassword1] = useState("")
  const [signupUserPassword2,setSignupUserPassword2] = useState("")

  const signup = {
    signupUserName,setSignupUserName,
    signupUserEmail,setSignupUserEmail,
    signupUserPassword1,setSignupUserPassword1,
    signupUserPassword2,setSignupUserPassword2
  }


  const [loginUserEmail,setLoginUserEmail] = useState("")
  const [loginUserPassword,setLoginUserPassword] = useState("")
  const [loginUserCheck,setLoginUserCheck] = useState("")

  const login = {
    loginUserEmail,setLoginUserEmail,
    loginUserPassword,setLoginUserPassword,
    loginUserCheck,setLoginUserCheck
  }

  const [activeUser,setActiveUser] = useState(null)

  const loginActiveUser = {
    activeUser,setActiveUser
  }
  //loginActiveUser.setActiveUser(JSON.parse(localStorage.getItem("activeUser")))
  useEffect(() => {
    setActiveUser(JSON.parse(localStorage.getItem("activeUser")))
  } ,[])

  //console.log(activeUser)

  return (
    <>
      <Navbar loginActiveUser = {loginActiveUser} />
      <NavigateLayout signup = {signup} login = {login} loginActiveUser = {loginActiveUser} />
    </>
  )
}

export default App
