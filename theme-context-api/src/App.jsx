import Home from './layout/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './layout/About'
import Contact from './layout/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <div className="container" >
        <div className="row">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element = {<Contact/>}/>
          </Routes>
        </div>
      <Footer/>
      </div>
      
    </>
  )
}

export default App
