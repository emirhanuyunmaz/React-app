
export default function Home (){
    //.env dosyasından verinin çekilmesi işlemi.
    const apiKey = import.meta.env.VITE_CAT_API_KEY
    const catApiUrl = import.meta.env.VITE_CAT_URL


    console.log(apiKey) 
    console.log(catApiUrl)
    return (<>
        <h1>Home</h1>
    
    </>)
}