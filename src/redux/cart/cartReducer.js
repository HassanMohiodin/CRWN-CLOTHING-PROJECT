import cartActionTypes from './cartTypes';
import { addItemToCart, decrementFromCart } from './cartUtils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case cartActionTypes.DECREMENT_ITEM:
      return {
        ...state,
        cartItems: decrementFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
