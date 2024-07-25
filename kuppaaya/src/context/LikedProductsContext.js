// src/context/LikedProductsContext.js
import React, { createContext, useContext, useState } from 'react';

const LikedProductsContext = createContext();

export const LikedProductsProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (product) => {
    setLikedProducts((prevLikedProducts) => {
      const isLiked = prevLikedProducts.some((p) => p.id === product.id);
      if (isLiked) {
        return prevLikedProducts.filter((p) => p.id !== product.id);
      } else {
        return [...prevLikedProducts, product];
      }
    });
  };

  return (
    <LikedProductsContext.Provider value={{ likedProducts, toggleLike }}>
      {children}
    </LikedProductsContext.Provider>
  );
};

export const useLikedProducts = () => {
  return useContext(LikedProductsContext);
};
