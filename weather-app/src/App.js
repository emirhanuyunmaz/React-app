
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WeatherProvider } from './contexts/CityWeather';
import NavbarWeather from './components/NavbarWeather.js';
import CardDesign from './components/CardDesign.js';
import WeatherDesign from './components/WeatherDesign.js';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {

  //Veri dağıtımı işlemini context ile yapılacak
  //Veri çekme işlemi yapılmaktadır.
  

  return (
    <Router>
      <NavbarWeather/>
        {/* <WeatherProvider>
          <WeatherDesign/>
        </WeatherProvider>    */}

        <Routes>
          <Route path='/:cityName' element={<WeatherProvider/>} />
        </Routes>
      
    </Router>
  );
}

export default App;
