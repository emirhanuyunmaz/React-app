import { useContext } from "react"
import { SignInContext } from "../context/SignInContext"

export default function SignIn() {
    //Kayıt için bilgilerin alınması ve localstorage kayıt işlemleri.
    const signInContext = useContext(SignInContext)

    return (<div className="container">
        <div className="row">
            <div className="col-sm-8 mx-auto">
                <h1 className="text-center">Sign In</h1>
                { signInContext.err!== "" ? <div class="alert alert-warning" role="alert">
                    {signInContext.err}
                </div> : <></>}
             <form>

                <div className="mb-3">
                    <label htmlFor="userNameInput" className="form-label">User Name</label>
                    <input value={signInContext.userName} onChange={(props) => signInContext.setUserName(props.target.value)} type="text" className="form-control" id="userNameInput" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">Email address</label>
                    <input type="email" value={signInContext.userEmail} onChange={(props) => signInContext.setUserEmail(props.target.value)}  className="form-control" id="InputEmail" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="inputPassword1" className="form-label">Password</label>
                    <input type="password" value={signInContext.userPassword1} onChange={(props) => signInContext.setUserPassword1(props.target.value)} className="form-control" id="inputPassword1" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="inputPassword2" className="form-label">Password Again</label>
                    <input type="password" value={signInContext.userPassword2} onChange={(props) => signInContext.setUserPassword2(props.target.value)} className="form-control" id="inputPassword2" required/>
                </div>

                <button type="submit" onClick={signInContext.signInOnClick} className="btn btn-primary">Submit</button>

                </form>
            </div>
        </div>
    </div>)
}