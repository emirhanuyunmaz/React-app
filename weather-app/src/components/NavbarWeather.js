import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { WeatherProvider } from '../contexts/CityWeather';
import { unstable_HistoryRouter,useHistory, useNavigate } from 'react-router-dom';



function NavbarWeather() {
  const [cityName,setCityName]=useState()
  const navigation=useNavigate()
  const handleChanges=(event) => {
    setCityName(event.target.value)
  }

  function submitButton (e) {
    //e.preventDefault()
    navigation(cityName)//Burada yapılan işlem sayesinde url değiştiriliyor

  }


  return (
    <Navbar className="bg-body-tertiary justify-content-between">
        <Navbar.Brand href="">Weather App</Navbar.Brand>
    <Form inline="true">
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
            onChange={handleChanges}
            value={cityName}
          />
        </Col>
        <Col xs="auto">
          <Button type="submit"onClick={submitButton}>Submit</Button>
        </Col>
      </Row>
    </Form>
  </Navbar>
  )
}

export default NavbarWeather
