// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from './pages/Navbar';
// import Footer from './pages/Footer';
import Home from './pages/HomePage';
import WomenPage from './pages/WomenPage';
import KidsPage from './pages/KidsPage';
import LikedProductsPage from './pages/LikedProductsPage';
import { LikedProductsProvider } from './context/LikedProductsContext';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';


function App() {
  return (
    <LikedProductsProvider>
      <Router>
        <div>
          {/* <Navbar /> */}
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/women"  element={<WomenPage />} />

            <Route path="/kids"  element={<KidsPage />} />
            <Route path="/liked-products"  element={<LikedProductsPage />} />
            <Route path="/cart"  element={<Cart />} />
            <Route path="/checkout"  element={<CheckOut />} />

          </Routes>
        </div>
      </Router>
    </LikedProductsProvider>
  );
}

export default App;
