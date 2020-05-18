import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const cartHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItem = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItem],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItem], (cartItems) =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  )
);
