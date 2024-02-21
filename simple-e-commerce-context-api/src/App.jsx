import NavigationLayout from './NavigatinoLayout'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <h1 className='bg-primary'>E-Commerce</h1>
      <div className="container">
        <NavigationLayout/>
      </div>
    </>
  )
}

export default App
