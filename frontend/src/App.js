import Header from "./component/Header"
import Homepage from "./pages/Homepage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Signup from "./pages/Signup"

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
