export const addItemToCart = (cartItems, toBeAdded) => {
  const match = cartItems.find((item) => item.id === toBeAdded.id);

  if (match) {
    return cartItems.map((item) =>
      item.id === toBeAdded.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...toBeAdded, quantity: 1 }];
};

export const decrementFromCart = (cartItems, toBeRemoved) => {
  if (toBeRemoved.quantity === 1) {
    return cartItems.filter((item) => item.id !== toBeRemoved.id);
  }

  return cartItems.map((item) =>
    item.id === toBeRemoved.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
