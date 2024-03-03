import { useEffect, useState } from "react"
import { axiosCatApi } from "./axiosApi"


export default function useCategoryAxiodApi(categoryName) {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [err,setErr] = useState(false)

    const getData = async() => {
        try{
            const response = await axiosCatApi(`/images/search?limit=10&breed_ids=${categoryName}`)

            if(response.status !== 200){
                setErr(true)
                setLoading(false)
                setData([])
            }else{
                const responseData = response.data
                setData(responseData)
                setLoading(false)
                setErr(false)
            }
        }catch(error) {
            setErr(true)
            setLoading(false)
            setData([])
        }
    }

    useEffect(() => {
        getData()
    },[])

    return [data,loading,err]

} 