import { useEffect, useState } from "react"
import { axiosCatApi } from "./axiosApi"


export default function useCategoriesAxiosApi(){

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [err,setErr] = useState(false)
    

    const getCategories = async() => {
        //Burada başlangıçta verilen url bilgisine ekleme işlemi yapılmaktadır.

        try{
            const response = await axiosCatApi(`/breeds`)
            const responseData = await response?.data
            if (response.status !== 200){
                setErr(true)
                setLoading(false)
                setData([])
            }else{
                setData(responseData)
                setErr(false)
                setLoading(false)
            }
        }catch(error){
            setErr(true)
            setLoading(false)
            setData([])
        }
    }

    useEffect(() => {
       getCategories() 
    },[])

    return [data,loading,err]

}
