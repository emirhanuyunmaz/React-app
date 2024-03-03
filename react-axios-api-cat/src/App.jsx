import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AxiosCategoriesLayout from './layout/AxiosCategoriesLayout'
import AxiosCategoryLayout from './layout/AxiosCategoryLayout'


function App() {

  return (
    <>
      <Navbar/>
      <h1 className='bg-primary'>Home</h1>
      <div className="container">
      <Routes>
        <Route path='/axios' element={<AxiosCategoriesLayout/>}/>
        <Route path='/axios/:categoryName' element={<AxiosCategoryLayout/>}/>
      </Routes>
      </div>

    </>
  )
}

export default App
