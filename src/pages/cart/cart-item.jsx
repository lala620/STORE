import React, { useContext } from 'react';
import {ShopContext} from '../../context/shop-context' // Import your ShopContext from the correct location

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data.item;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  const addToCartHandler = () => {
    addToCart(props.data.item); // Assuming addToCart takes an item as a parameter
  };

  const removeFromCartHandler = () => {
    removeFromCart(id); // Assuming removeFromCart takes an item ID as a parameter
  };

  const updateCartItemCountHandler = (newCount) => {
    updateCartItemCount(id, newCount); // Assuming updateCartItemCount takes an item ID and new count as parameters
  };

  return (
    <div className="cart-item">
      <img src={productImage} alt={productName} />
      <h2>{productName}</h2>
      <span>${price}</span>
      <button onClick={()=> removeFromCart(id)}> -</button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(e.target.value, id)}/>
                <button onClick={()=> addToCart(id)}> +</button>
      <input
        type="number"
        value={cartItems[id] || 0}
        onChange={(e) => updateCartItemCountHandler(Number(e.target.value))}
      />
    </div>
  );
};

export default CartItem;
