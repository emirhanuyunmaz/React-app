import { useParams } from "react-router-dom"
import Card from "./Card"
import LoadingCard from "./LoadingCard"
import useCategoryFetchApi from "../customHooks/fetchApi/useCategoryFetchApi"

export default function FetchCategoryDetail () {
    const {categoryName} = useParams()//Bu işlem url de gelen "categoryName" bilgisini ele almaktadır.
    const [loading,errorData,data] = useCategoryFetchApi(categoryName)//gelen categoryName bilgisine göre server a istek atılmaktadır.
    //console.log(data)
    return (<>
        <h1>Category Detail</h1>
        <div className="row">
                {loading && !errorData ? <LoadingCard/> : data.map((item , index) => {
                  return  <div key={index} className="col-sm-4">
                        <Card  imageUrl={item.url} />
                    </div>
                })}    
            
        </div>
    </>)
}