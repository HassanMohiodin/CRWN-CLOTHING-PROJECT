import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from './../../assets/cartIcon.svg';

import './cartIcon.styles.scss';

import { toggleHidden } from './../../redux/cart/cartActions';
import { selectCartItemCount } from './../../redux/cart/cartSelectors';

const CartIcon = ({ toggleHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleHidden}>
    <ShoppingIcon className="ShoppingIcon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
