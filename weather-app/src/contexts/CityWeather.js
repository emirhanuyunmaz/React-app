import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import WeatherDesign from "../components/WeatherDesign";


const CityWeatherContext = createContext()

//Buradaki children de oluşturduğumuz comp. içerisindeki elemanları tekrar içerisine göndermemizi sağlar.
export const WeatherProvider = ({children}) => {
    const [search,setSearch]=useState(false)
    const [massage,setMessage]=useState(false)
    const {cityName}=useParams()//Burada ise parametre olarak gelen değeri çekme işlemi yapılmaktadır.
    
    useEffect(()=>{
        if (cityName){
            setSearch(true)
            console.log(cityName)
        }
    },[cityName])
    
    const [cityWeather,setCityWeather]=useState()
    useEffect(()=>{
        if (search){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ff6dd1d223aa7f28cc3fbc6770de199b`).then((res)=>setCityWeather(res.data))
        }else{
            setMessage("Please Enter City Name")
        }
    },[search])

    return <CityWeatherContext.Provider value={cityWeather}>{search ? <WeatherDesign/> : massage} </CityWeatherContext.Provider>
}

export default CityWeatherContext