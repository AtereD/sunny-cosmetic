import React, { createContext, useState, useContext } from 'react';

// Create a Cart Context
const CartContext = createContext();

// Create a custom hook to use the Cart Context
export const useCart = () => {
  return useContext(CartContext);
};

// Create a Cart Provider component
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const clearCart = () => {
    setCartCount(0);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
