import { useEffect, useState } from "react";

//Burada yapılan işlem sayesinde components ve layout içerisindeki kodları sadeleştirmiş olduk aynı zamanda verilerin yüklenmesi ve bir hata ile karşılaşılması durumunda ele alınacak işlemleri göstermiş olduk.
//Tüm kategorileri çekmek için yapılan işlem.
export default function useCategoriesFetchApi(){
    const [loading,setLoading] = useState(true)
    const [err,setErr] = useState(false)
    const [data,setData] = useState([])

    //.env dosyasından verinin çekilmesi işlemi.
    const apiKey = import.meta.env.VITE_CAT_API_KEY
    const catApiUrl = import.meta.env.VITE_CAT_URL

    const catApiHeader = {
        headers:{
            'x-api-key': apiKey
        }
    }

    //Verinin asenkron olarak alınması işlemi.
    const catApiGet = async() => {
        try{

            const response = await fetch(
                `${catApiUrl}/breeds`,catApiHeader)
    
                //console.log(response.ok)//burada verinin alınıp alınmadığı bilgisi gelmektedir.
                
                if(!response.ok){
                    setErr(true)
                    setLoading(false)
                }else{
                    const responseData = await response.json();
                    setErr(false)
                    setLoading(false)
                    setData(responseData)
                }

        }catch(error){
            setErr(true)
            setLoading(false)
            setData([])
        }
    }

    useEffect(() => {
        catApiGet()
    },[])

    return [loading,err,data]

}