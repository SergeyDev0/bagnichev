import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Product from './pages/product';
import Toys from './pages/toys';
import Furniture from './pages/furniture';
import About from './pages/about';
import "./assets/scss/reset.scss"
import "./assets/scss/index.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/:id" element={ <Product /> } />
        <Route path="/toys" element={ <Toys /> } />
        <Route path="/furniture" element={ <Furniture /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
