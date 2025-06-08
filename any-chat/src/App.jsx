import {Routes, Route} from 'react-router-dom'
import HomePage from './screens/Home'
import JoinChat from './screens/JoinChat'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='join-chat' element={<JoinChat />} />
    </Routes>
  )
}

export default App;