import Header from "./component/Header"
import Homepage from "./pages/Homepage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Signup from "./pages/Signup"
import MyMap from "./pages/Map"
import Mainpage from "./pages/Mainpage"
import Otp from "./pages/Otp"

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path="/main" element={<Mainpage/>}></Route>
          <Route path='/otpverify' element={<Otp/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/map' element={<MyMap />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
