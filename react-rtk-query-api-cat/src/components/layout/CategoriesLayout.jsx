import { useFetchCategoriesQuery } from "../../store/catApi/catApiSlicer"
import LoadingCategories from "../LoadingCategoties"

export default function CategoriesLayout(){
    const {data, isLoading, isError, error} = useFetchCategoriesQuery()


    return(<div>
        {isError && <Error/>}
    <div className="list-group">
        {isLoading && !isError ? <LoadingCategories/> : data.map((item,index) =><a key={index} href={`/rtk-query/${item.id}`} className="list-group-item list-group-item-action">
            {item.name}
        </a>)}
        
    </div>


    </div>)
}