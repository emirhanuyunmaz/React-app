
import Loading from "./Loading";
import ErrorData from "./ErrorData";
import useCategoriesFetchApi from "../customHooks/fetchApi/useCategoriesFetchApi";

export default function FetchApi(){
    //burada veri alındıktan sonra değişkenlere atanma işlemi yapılmaktadır.
    const[loading,err,data] = useCategoriesFetchApi()

    return (<>
        <h1>Fetch Api </h1>

        <div className="list-group">
            {err && <ErrorData/> }

            {loading && !err ?<Loading/> :data.map((item,index) =>  <a key={index} href={`/fetch/${item.id}`} className="list-group-item list-group-item-action" >{item.name}</a>)}
            
        </div>
    </>)
}