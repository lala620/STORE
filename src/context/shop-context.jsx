import React, { createContext, useState, useEffect } from 'react';



export const ShopContext = createContext(null);

// Create a ShopProvider component that will wrap your entire application
const ShopProvider = ({ children }) => {
    // console.log('context')
  // Define the state for your cart and product data
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
//   console.log(cartItems)



  // Define functions for managing the cart
  const addToCart = (id) => {
    // Add item to the cart (update the cartItems state)
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[id]) {
        updatedCartItems[id] += 1; // Increase quantity if item is already in the cart
      } else {
        updatedCartItems[id] = 1; // Add the item to the cart with a quantity of 1
      }
      return updatedCartItems;
    });
  };

  const removeFromCart = (itemId) => {
    // Remove item from the cart (update the cartItems state)
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[itemId]) {
        delete updatedCartItems[itemId]; // Remove the item from the cart
      }
      return updatedCartItems;
    });
  };

  const updateCartItemCount = (itemId, newCount) => {
    // Update the quantity of an item in the cart (update the cartItems state)
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (newCount > 0) {
        updatedCartItems[itemId] = newCount; // Update the quantity
      } else {
        delete updatedCartItems[itemId]; // Remove the item if quantity is 0
      }
      return updatedCartItems;
    });
  };

  // Fetch product data from an API using useEffect
  useEffect(() => {
    // Replace this with your actual API endpoint to fetch products
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Provide the cart data, product data, and functions through the context
  const contextValue = {
    cartItems,
    products,
    addToCart,
    removeFromCart,
    updateCartItemCount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider ;
