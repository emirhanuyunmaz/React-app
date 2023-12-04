import React, { useContext, useEffect, useState } from 'react'
import CityWeatherContext from '../contexts/CityWeather'
import CardDesign from './CardDesign'

function WeatherDesign() {
  
  const [loading,setLoading]=useState(true)


  const weather = useContext(CityWeatherContext) 
  console.log(weather)

  useEffect(() => {
    if(weather){
      setLoading(false)
    }
    
  },[weather])

  
   return (
    <>
      {loading ? <p>Loading</p> :<CardDesign data={weather.main}/> }
    </>
  )
}

export default WeatherDesign
