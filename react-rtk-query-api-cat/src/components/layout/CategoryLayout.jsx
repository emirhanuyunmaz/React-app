import { useParams } from "react-router-dom"
import { useFetchCategoryQuery } from "../../store/catApi/catApiSlicer"
import CategoryCard from "../CategoryCard"
import LoadingCategories from "../LoadingCategoties"
import ErrorLayout from "../ErrorLayout"

export default function CategoryLayout (){
    const {categoryName} = useParams()
    const{data, isLoading, isError, error} =useFetchCategoryQuery(categoryName)
    console.log(data)

    return(<div className="container">
        {isError && <ErrorLayout/>}
        <div className="row">
        {isLoading && !isError ? <LoadingCategories/> :data.map((item,index) => {
            return <div key={index} className="col-sm-4">
                <CategoryCard item={item}/>
            </div>
        })}
        </div>
    </div>)
}