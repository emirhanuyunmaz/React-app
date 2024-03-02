import { useEffect, useState } from "react"

//Burada yapılan işlem sayesinde components ve layout içerisindeki kodları sadeleştirmiş olduk aynı zamanda verilerin yüklenmesi ve bir hata ile karşılaşılması durumunda ele alınacak işlemleri göstermiş olduk.
//Sadece bir kategoriye ait verileri çekmek için yapılan işlemdir.
export default function useCategoryFetchApi(categoryName) {
    //console.log("categoryName::",categoryName)
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [errorData,setErrorData] = useState(false)
    const catUrl = import.meta.env.VITE_CAT_URL
    const apiKey = import.meta.env.VITE_CAT_API_KEY

    const catApiHeader = {
        headers:{
            'x-api-key': apiKey
        }
    }

    const categoryNameCatApi = async () => {
        const response =await fetch(`${catUrl}/images/search?limit=10&breed_ids=${categoryName}`,catApiHeader)
        //console.log("response:" ,response.ok)
        
        if(!response.ok){
            setLoading(false)
            setErrorData(true)
            setData([])
        }else{
            const responseData = await response.json() 
            setData(responseData)
            //console.log(data)
            setErrorData(false)
            setLoading(false)
        }
    }

    useEffect (() => {
        categoryNameCatApi()
    } ,[])

    return [loading,errorData,data]
}