import React from 'react';
import { useLikedProducts } from '../context/LikedProductsContext';
import Footer from './Footer';
import PageNavbar from '../pages/PageNavbar';
import woman1 from '../assets/website/woman1.jpg'; // Replace with correct import if necessary

const LikedProductsPage = () => {
  const { likedProducts, toggleLike } = useLikedProducts();

  const handleRemove = (product) => {
    toggleLike(product);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <PageNavbar/>
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-8">Liked Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {likedProducts.length > 0 ? (
            likedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col">
                <div className="relative flex-grow">
                  <div className="pt-[100%] relative">
                    <img
                      src={product.image || woman1}
                      alt={product.name}
                      className="absolute top-0 left-0 w-full h-full object-contain"
                    />
                  </div>
                  <button
                    onClick={() => handleRemove(product)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors duration-200"
                    aria-label={`Remove ${product.name} from liked products`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
            ))
          ) : (
            <p className="text-lg text-gray-600">You have no liked products.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LikedProductsPage;