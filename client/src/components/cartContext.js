import { createContext, useContext, useState } from "react";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [cartadded, setCartAdded] = useState(false);

  return (
    <cartContext.Provider value={{ carts, setCarts, cartadded, setCartAdded }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => {
  return useContext(cartContext);
};

export { useCart, CartProvider };
