import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AllRoutes from './routings/AllRoutes'

function App() {
  
  return (
    <BrowserRouter>
      <AllRoutes/>
    </BrowserRouter>
  )
}

export default App
