import LandingPage from './page/LandingPage'
import { Route,  Routes } from 'react-router-dom'
import AuthPages from './page/Auth'
import ChatConversation from './page/Conversation'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path="/signin" element={<AuthPages />} />
      <Route path="/signup" element={<AuthPages />} />
      <Route path='/conversation' element={<ChatConversation/>}/>
    </Routes>
    </>

  )
}

export default App
