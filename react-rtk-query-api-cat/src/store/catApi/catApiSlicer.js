import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

//.env dosyasından verinin çekilmesi işlemi.
const apiKey = import.meta.env.VITE_CAT_API_KEY
const catApiUrl = import.meta.env.VITE_CAT_URL

export const catApiSlice = createApi({
    reducerPath : "catApi",
    //Veri çekilmesi için başlangıçta yapılacak işlemler.
    baseQuery : fetchBaseQuery({
        baseUrl: catApiUrl ,
        prepareHeader (header){
            header.set("x-api-key",apiKey)
            return header
        }
    }),
    //Verinin çekilirken base url e eklenen ve farklı uzantılardan da veri çekilmesine olanak sağlar.
    endpoints (builder){
        return  {
            fetchCategories : builder.query({
                query(){
                    return "breeds"
                }
            }),
            fetchCategory : builder.query({
                query(categoryName){
                    return `images/search?breed_ids=${categoryName}&limit=10`
                }
            })
        }
    }
})

export const {useFetchCategoriesQuery , useFetchCategoryQuery} = catApiSlice