import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BgTexture from '../assets/website/bg.jpeg';
import NavbarMiddle from './NavbarMiddle';
import woman1 from '../assets/website/woman1.jpg';
import woman2 from '../assets/website/woman2.jpg';
import stand from '../assets/website/stand.png';
import woman3 from '../assets/website/woman3.jpg';
import woman4 from '../assets/website/woman4.jpg';
import woman5 from '../assets/website/woman5.jpg';
import woman6 from '../assets/website/woman6.jpg';
import woman7 from '../assets/website/woman7.jpg';

import Navbar from '../pages/Navbar'

import PageNavbar from '../pages/PageNavbar';

import Footer from '../pages/Footer';
import { useLikedProducts } from '../context/LikedProductsContext';
// import PageNavbar from './PageNavbar';

const initialProducts = [
  { id: 1, name: 'Long Wool Coat', color: 'Grey', price: 4499, image: woman1 },
  { id: 2, name: 'Long Wool Coat', color: 'White', price: 4499, image: woman2 },
  { id: 3, name: 'Leather Coat', color: 'Black', price: 3199, image: stand },
  { id: 4, name: 'Autumn Wear', color: 'Blue', price: 2899, image: woman3 },
  { id: 5, name: 'Long Wool Coat', color: 'Purple', price: 4499, image: woman4 },
  { id: 6, name: 'Long Wool Coat', color: 'White', price: 4499, image: woman5 },
  { id: 7, name: 'Summer Wear', color: 'Green', price: 3199, image: woman6 },
  { id: 8, name: 'Summer Wear', color: 'Blue', price: 2899, image: woman7 },
];

const ProductCard = ({ product, toggleLike, openProductDetail, isLiked }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col">
    <div className="relative flex-grow">
      <div className="pt-[100%] relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute top-0 left-0 w-full h-full object-contain cursor-pointer" 
          onClick={() => openProductDetail(product)}
        />
      </div>
      <button onClick={() => toggleLike(product)} className="absolute top-2 right-2 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
    </div>
    <div className="p-6">
      <h3 className="font-medium text-sm">{product.name}</h3>
      <div className="flex items-center mt-1">
        <div className={`w-4 h-4 rounded-full mr-2 bg-${product.color.toLowerCase()}-500`}></div>
        <span className="text-xs text-gray-600">{product.color}</span>
      </div>
      <p className="mt-1 text-sm text-gray-800">₹ {product.price}</p>
    </div>
  </div>
);

const ProductDetailPage = ({ product, onAddToCart }) => (
  <div className="bg-yellow min-h-screen flex flex-col">
    <PageNavbar className="w-full" />
    <div className="p-8 flex-grow">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2">
            <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
            <div className="flex space-x-2 mt-4">
              {[product.image, product.image, product.image].map((img, idx) => (
                <img key={idx} src={img} alt={`thumbnail-${idx}`} className="w-1/4 h-auto object-contain" />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 border-2 border-black border-solid p-6 md:ml-8">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-xl mb-4">₹ {product.price}</p>
            <div className="mb-4">
              <p className="font-semibold mb-2">Size:</p>
              <div className="flex flex-wrap gap-2">
                {['Extra Small', 'Small', 'Medium', 'Large', 'Xtra Large'].map((size) => (
                  <button key={size} className="px-4 py-2 border rounded hover:bg-gray-100">{size}</button>
                ))}
              </div>
            </div>
            <button onClick={() => onAddToCart(product)} className="bg-black text-white px-6 py-2 font-semibold w-full">ADD</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WomenPage = () => {
  const navigate = useNavigate();
  const { likedProducts, toggleLike } = useLikedProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    // In a real application, you'd update your cart state here
    // For now, we'll just navigate to the cart page with the selected product
    navigate('/cart', { state: { cartItems: [product] } });
  };

  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo(0, 0);
    }
  }, [selectedProduct]);

  return (
    <div className="overflow-x-hidden">
      {/* <PageNavbar /> */}
      {!selectedProduct && (
        
        <>
          {/* Hero section */}
          <Navbar />
          <div 
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat md:bg-auto md:bg-top relative flex items-center"
            style={{ 
              backgroundImage: `url(${BgTexture})`,
              backgroundSize: 'cover'
            }}
          >     
            <div className="p-4 sm:p-8 md:p-12 lg:p-16">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-none mb-2">
                UNLOCK
              </h1>
              <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light italic tracking-wide">
                Your Style
              </p>
            </div> 
          </div>

          <NavbarMiddle />
        </>
      )}

      <div className="py-8">
        {selectedProduct && (
          <div className="mb-12">
            <ProductDetailPage 
              product={selectedProduct}
              onAddToCart={handleAddToCart}
            />
          </div>
        )}
        {/* Product grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="ml-11">
            <h3 className="text-lg font-semibold mb-8">You may also like</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {initialProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                toggleLike={toggleLike}
                openProductDetail={openProductDetail}
                isLiked={likedProducts.some(p => p.id === product.id)}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4 mb-12">
          <button className="bg-black text-white px-6 py-2 font-semibold">Load More</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WomenPage;