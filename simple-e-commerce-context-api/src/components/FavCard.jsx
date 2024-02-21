
import { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function FavCard( {selectedProduct} ) {
    //Burada favorilerin bulunduğu sayfadaki "card" tasarımı.
    const [activeUser,setActiveUser] = useState({})
    let a= []
    
    //Tosat mesajı oluşturma işlemi.
    const notify = () => toast.success('Successfully removed from favorites', {
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

        //Local sorage de verilerin çekilmesi işlemi.
        useEffect(() => {
            setActiveUser(JSON.parse(localStorage.getItem("activeUser")))
        },[])


    //Localstorage de verilerin unFav edilmesi işlemi.
    function removeFav (event) {
        console.log(selectedProduct.id)
        event.preventDefault()
        notify()
        a = (JSON.parse(localStorage.getItem(activeUser.email)))
        let index = a.indexOf(selectedProduct.id)
        a.splice(index,1)
        localStorage.setItem(activeUser.email,JSON.stringify(a))
        location.reload()
    }

    return (
        <div className="col-sm-4">
        <div className="card m-2" >
            <a href={`/product/${selectedProduct.id}`}>
                <img src={`${selectedProduct.image}`} className="cardImage card-img-top img-thumbnail" alt={`${selectedProduct.title}`} />
            </a>

            <div className="card-body">
                <h5 className="card-title">{selectedProduct.title.slice(0,10)}...</h5>
                <p className="card-text">{selectedProduct.description.slice(0,5)}...</p>              
                {
                    activeUser !== null ? <button onClick={removeFav}className="btn btn-primary">Unfav</button> :<></>
                }
            </div>
            <ToastContainer />
        </div>
    </div>   
    )
}