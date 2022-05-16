import './App.css';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import Navbar from './component/Navbar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route,Routes, Link } from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
  <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/products" element={<Products/>} />
        <Route  path="/products/:id" element={<Product/>} />
      </Routes>
</div>
      </Router>
  );
}

export default App;
