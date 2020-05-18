import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './cartDropdown.styles.scss';

import CustomButton from './../CustomButton/CustomButton';
import CartItem from './../CartItem/CartItem';
import { selectCartItem } from './../../redux/cart/cartSelectors';
import { toggleHidden } from './../../redux/cart/cartActions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">The Cart is Empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItem(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
