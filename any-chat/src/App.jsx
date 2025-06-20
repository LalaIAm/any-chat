import {Routes, Route} from 'react-router-dom'
import HomePage from './screens/Home'
import JoinChat from './screens/JoinChat'
import ChatPage from './screens/ChatPage'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='join-chat' element={<JoinChat />} />
      <Route path='chat' element={<ChatPage />} />
    </Routes>
  )
}

export default App;