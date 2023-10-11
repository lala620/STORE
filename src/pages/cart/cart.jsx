import React from 'react'
import { useContext,useState,useEffect } from 'react';
import {ShopContext} from '../../context/shop-context'

const Cart = () => {
    const { cartItems}  = useContext(ShopContext)
    const [products, setProducts ] = useState([])

  const GetTotalCartAmount= () =>{
    let totalAmount = 0;
    for (const item in cartItems){
        if (cartItems[item]>0) {
            let iteminfo =products.find((product) => product.id===Number(item))
            console.log(iteminfo)

            totalAmount += cartItems[item]* iteminfo
            
        }
    }

   
    return totalAmount;

}

const totalAmount =  GetTotalCartAmount()





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
      <div className="cart">
        <div>
          <h1>
            Your cart items
          </h1>
          <div className="cartItems" >
          {products.map((item) => {
            console.log(products)
            if (cartItems[item.id] > 0) {
              return <CartItem data={item} />
            }
          })}
        </div>
        <div className ="checkout">
        <p>Subtotal:${totalAmount}</p>
        <button>Continue Shoppping</button>
        <button><b>
        checkout
        </b></button>
  
        </div>
        </div>
       
        
      </div>
    )
  }

export default Cart