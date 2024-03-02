import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import FetchApi from './components/FetchApi'
import AxiosApiLayout from './components/AxiosApiLayout'
import NotFound from './components/NotFound'
import FetchCategoryDetail from './components/FetchCategoryDetail'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* Buradaki işlem sayesinde sayfaların yönlendirilmesi işlemi yapılmaktadır. */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/fetch/' element={<FetchApi/>} />
        <Route path='/fetch/:categoryName' element={<FetchCategoryDetail/>} />

        <Route path='/axios' element={<AxiosApiLayout/>} />
        <Route path='/*' element={<NotFound/>} />

      </Routes>

    </>
  )
}

export default App
