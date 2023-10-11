import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from './components/navbar';
import Shop from './pages/shop/shop'
import Cart from './pages/cart/Cart'
import Login from './login/login'


function App() {


  return (
    <div className="App">
      


        <Router>
          <Navbar />


          <Routes>
            <Route path="/" element={<Shop />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/Login" element={<Login/>}/>
          </Routes>
        </Router>




     








    </div>
  )
}

export default App
