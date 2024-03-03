import { useParams } from "react-router-dom"
import useCategoryAxiodApi from "../customHooks/useCategoryAxiosApi"
import Card from "../components/Card"
import LoadingCard from "../components/LoadingCard"
import DataError from "../components/DataError"

export default function AxiosCategoryLayout(){
    //Url bilgisinin alınması işlemi
    const {categoryName} = useParams()
    //axios ile veri ve hata bilgisinin alınması işlemi.
    const [data,loading,err] = useCategoryAxiodApi(categoryName)
    
    return(<>
        <div className="row">
            {err ? <DataError/> : <></>}
            {loading && !err ? <LoadingCard/> : data.map((item,index) => {
                return <div key={index} className="col-sm-4">
                    <Card data={item} />
                </div>
            })}
        </div>
    </>)
}