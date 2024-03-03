import CategoriesLoading from "../components/CategoriesLoading"
import DataError from "../components/DataError"
import useCategoriesAxiosApi from "../customHooks/useCategoriesAxiosApi"

export default function AxiosCategoriesLayout(){
    //axios ile verilerin alınması işlemi.
    const [data,loading,err] = useCategoriesAxiosApi()

    return (<div className="mt-3">
    
        <h1>Axios Categories Layout</h1>

        <div className="list-group mt-3">
            {err && <DataError/>}

            {loading && !err ? <CategoriesLoading/> : data.map((item,index) => {
                return <a key={index} href={`axios/${item.id}`} className="list-group-item list-group-item-action">{item.name}</a> 
            })}
            
            
        </div>

    
    </div>)
}