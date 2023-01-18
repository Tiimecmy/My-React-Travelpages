import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/pages/Home'
import Services from './component/pages/Services'
import Products from './component/pages/Product'
import SignUp from './component/pages/SignUp'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route exact path='/'  element={<Home/>} />
      <Route path='/services'  element={<Services/>} />
      <Route path='/products'  element={<Products/>} />
      <Route path='/sign-up'  element={<SignUp/>} />
      </Routes>
    </Router>
    </>  
  );
}

export default App;
