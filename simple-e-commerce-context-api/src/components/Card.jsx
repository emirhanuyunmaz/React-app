import { useState } from "react"
import { useEffect } from "react"
import "../style.css"

import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Card({selectedProduct}) {

    const [activeUser,setAcviveUser] = useState({})

    useEffect(() => {
        setAcviveUser(JSON.parse(localStorage.getItem("activeUser")))
    },[])

    //Toast Mesaj yapma işlemi
    const notify = () => toast.success('Successfully saved to favorites', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

    //Tekrar eden verileri engellemek için yapılan fonk.
    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }

    //Favorilere ekleme işlemi
    function favOnClick(){
        notify()
        let a = (JSON.parse(localStorage.getItem(activeUser.email)) !== null ? JSON.parse(localStorage.getItem(activeUser.email)) : [])
        a.push(selectedProduct.id)
        a=removeDuplicates(a)
        localStorage.setItem(activeUser.email,JSON.stringify(a))
    }


    return (<div className="col-sm-4">
        <div className="card m-2" >
            <a href={`/product/${selectedProduct.id}`}>
                <img src={`${selectedProduct.image}`} className="cardImage card-img-top img-thumbnail" alt={`${selectedProduct.title}`} />
            </a>

            <div className="card-body">
                <h5 className="card-title">{selectedProduct.title.slice(0,10)}...</h5>
                <p className="card-text">{selectedProduct.description.slice(0,5)}...</p>              
                {
                    activeUser !== null ? <button onClick={favOnClick}className="btn btn-primary">Fav</button> :<></>
                }
            </div>
            <ToastContainer />
        </div>
        
    </div>)
}