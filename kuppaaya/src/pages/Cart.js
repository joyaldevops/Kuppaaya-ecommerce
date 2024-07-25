import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../pages/Footer';

import PageNavbar from '../pages/PageNavbar';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems, total } });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageNavbar />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Your Bag</h2>
              <p className="text-lg mb-4">Total({cartItems.length} item) ₹ {total}</p>
              <div className="bg-gray-100 p-4 mb-6 text-sm">
                <p>Pay Online & get discount!</p>
                <p>Pay Online & get 5% discount ! You can choose it in the next step under delivery options</p>
              </div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start mb-6 border-b pb-6">
                  <div className="w-1/4">
                    <img src={item.image} alt={item.name} className="w-full h-auto object-cover"/>
                  </div>
                  <div className="w-3/4 pl-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="text-xl font-bold mt-2">₹ {item.price}</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm">Size: Small</p>
                      <div className="flex items-center mt-2">
                        <select className="border rounded px-2 py-1 mr-4">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        <button className="text-gray-500 hover:text-black">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      
            {/* Right column */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Total({cartItems.length} item)</span>
                    <span>₹ {total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Original price</span>
                    <span>₹ {total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-4 border-t mt-4">
                    <span>Total</span>
                    <span>₹ {total}</span>
                  </div>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-black text-white py-3 mt-6 rounded-lg hover:bg-gray-800 transition duration-300"
                >
                  Continue to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;