import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const {addToCart, cartItems} = useContext(ShopContext)
  


  useEffect(() => {
    // Fetch product data from the API
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        // Update the 'products' state with the fetched data
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Lala shop</h1>
      </div>
      <div className="products">
        {products.map((item) =>{
          const cartItemAmount = cartItems[item.id]
        
          return (
          <div key={item.id}>
          <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p className= 'description'>{item.description}</p>
            <span>${item.price}</span>
            <button className="addToCartBtn" onClick={()=> addToCart(item.id)}>
              Add to cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
            </button>
          </div> 
        )
        })}
        
      </div>
    </div>
  );
};

export default Shop;
