import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'addToCart':
      return [...state, action.payload];
    // Handle other actions if needed
    default:
      return state;
  }
};

// Example in CartProvider.js
const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);
  
    const addItemToCart = (item) => {
      dispatch({ type: 'addToCart', payload: item });
    };
  
    const value = { cart, addItemToCart };
  
    return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    );
  };
  
