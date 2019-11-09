import React from 'react';
import './cart-item.styles.scss';


const CartItem = ({item: {imageUrl, price, name}}) => (
  <div className="cart-item">
    <img src={imageUrl} alt=""/>

  </div>
);


export default CartItem;
