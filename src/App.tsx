import LandingPage from './components/LandingPage'
import { Route,  Routes } from 'react-router-dom'
import AuthPages from './page/Auth'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path="/signin" element={<AuthPages />} />
      <Route path="/signup" element={<AuthPages />} />
    </Routes>
    </>

  )
}

export default App
