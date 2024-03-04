import { useState } from 'react'
import {  useFetchCategoriesQuery } from './store/catApi/catApiSlicer'
import Navbar from './components/Navbar'
import {Routes , Route} from 'react-router-dom'
import Home from './components/layout/Home'
import RTKQueryLayout from './components/layout/RTKQueryLayout'
import CategoryLayout from './components/layout/CategoryLayout'

function App() {
  const [count, setCount] = useState(0)
  //Bu yapı rtk-query ile otomatik olarak oluşmaktadır.
  const {data, isLoading, isError, error} = useFetchCategoriesQuery()
  console.log(data)

  return (
    <>
    <Navbar/>
      <h1 className='bg-primary' >Hello World</h1>
      <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/rtk-query`} element={<RTKQueryLayout/>}/>
        <Route path={`/rtk-query/:categoryName`} element={<CategoryLayout/>}/>
      </Routes>
    </>
  )
}

export default App
