import axios from "axios"

//.env dosyasından verinin çekilmesi işlemi.
const apiKey = import.meta.env.VITE_CAT_API_KEY
const catApiUrl = import.meta.env.VITE_CAT_URL

//Burada axiostan veri çekmek için yapılıyor.Bu işlem sayesinde eklenecek url bilgisi sonuna eklenmektedir.
export const axiosCatApi = axios.create({
    baseURL:catApiUrl,
    headers:{
        "x-api-key":apiKey
    }
})