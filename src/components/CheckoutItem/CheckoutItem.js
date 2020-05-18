import React from 'react';
import { connect } from 'react-redux';

import './CheckoutItem.styles.scss';

import {
  removeItem,
  addItemToCart,
  decrementItemFromCart,
} from './../../redux/cart/cartActions';

const CheckoutItem = ({
  cartItem,
  removeItemFromCart,
  addItem,
  decrementItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decrementItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => removeItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItemToCart(item)),
  decrementItem: (item) => dispatch(decrementItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
