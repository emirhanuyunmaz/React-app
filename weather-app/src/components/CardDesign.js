import React, { useContext, useEffect, useState } from 'react'
import CityWeatherContext from '../contexts/CityWeather'
import Card from 'react-bootstrap/Card';
import { Stack } from 'react-bootstrap';


function CardDesign({data}) {
    //Resim ekleyebilmek için require fonksiyonunu kullanmamız gerek.
    const [sunshineDate,setSunshineDate]=useState("0")

    const [loading,setLoading]=useState(true)
//    const weather = useContext(CityWeatherContext) 
    //console.log(weather)

    console.log("asddsa::::",data.sunrise)
    const toDate = (second) => {
    
      var date = new Date(null);
      date.setSeconds(second);
      return date.toISOString().substr(11, 8);
  }

  useEffect(() => {
      if (data){
        setLoading(false)
      }
  },[data])


  return (
    <Stack gap={3} direction='horizontal' className='mx-auto'>
    {/* <div className='ms-auto'>
    <Card style={{ width: '10rem', height:"16rem" }}>
      <Card.Img variant="top" src={require('../images/sunshine.jpg')} />
      <Card.Body>
        <Card.Title>Sunshine </Card.Title>
        <Card.Text>
          {loading ? <p>Loading</p> : <p>{toDate(data.sunrise)}</p>}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='ms-auto'>
    <Card style={{ width: '10rem', height:"16rem" }}>
      <Card.Img variant="top" src={require('../images/sunset.jpg')} />
      <Card.Body>
        <Card.Title>Sunshine </Card.Title>
        <Card.Text>
          {loading ? <p>Loading</p> : <p>{toDate(data.sunset)}</p>}
        </Card.Text>
      </Card.Body>
    </Card>
    </div> */}

   <div className='ms-auto'>
   <Card style={{ width: '10rem' , height:"16rem"}}>
      <Card.Img variant="top" src={require('../images/humidity.jpg')} />
      <Card.Body>
        <Card.Title>Humidity </Card.Title>
        <Card.Text>
          {loading ? <p>Loading</p> : <p>%{data.humidity}</p>}
        </Card.Text>
      </Card.Body>
    </Card>
   </div>

    <div className='ms-auto'>
    <Card style={{ width: '10rem', height:"16rem" }}>
      <Card.Img variant="top" height={160} src={require('../images/pressure.jpg')} />
      <Card.Body>
        <Card.Title>Pressure </Card.Title>
        <Card.Text>
          {loading ? <p>Loading</p> : <p>{data.pressure}</p>}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='mx-auto'>
    <Card style={{ width: '10rem', height:"16rem" }}>
      <Card.Img variant="top" height={160} src={require('../images/temp.jpg')} />
      <Card.Body>
        <Card.Title>Temp </Card.Title>
        <Card.Text>
          {loading ? <p>Loading</p> : <p>{data.temp}°F</p>}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    {/* <div className='ms-auto'>
    <Card style={{ width: '10rem', height:"16rem" }}>
      <Card.Img variant="top" height={160} src={require('../images/clouds.jpg')} />
      <Card.Body>
        <Card.Title>Clouds </Card.Title>
        <Card.Text>
          {loading ? <p>Loading</p> : <p>%{data.clouds}</p>}
        </Card.Text>
      </Card.Body>
    </Card>
    </div> */}
    
    </Stack>
  )
}

export default CardDesign