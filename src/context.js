import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initalState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const Increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const Decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const clearcart = () => {
    dispatch({ type: "CLEARCART" });
  };

  const Remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{ ...state, Increase, Decrease, clearcart, Remove }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
