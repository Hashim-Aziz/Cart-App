const reducer = (state, action) => {
  if (action.type === "INCREASE") {
    let newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: newCart };
  }
  if (action.type === "DECREASE") {
    let newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    return { ...state, cart: newCart };
  }
  if (action.type === "CLEARCART") {
    return { ...state, cart: [] };
  }
};

export default reducer;
