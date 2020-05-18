import cartActionTypes from './cartTypes';

export const toggleHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const decrementItemFromCart = (item) => ({
  type: cartActionTypes.DECREMENT_ITEM,
  payload: item,
});
