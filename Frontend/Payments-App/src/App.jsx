import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Signin} from './pages/signin'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin />} />
          {/* <Route path='/signin' element={<Signin />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='send' element={<SendMoney />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
