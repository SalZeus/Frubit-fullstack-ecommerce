import './App.scss'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from "./Pages/Home/Home"
import Header from './Components/Header/Header'
import Login from "./Pages/Login/Login"
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
