import { createContext, useContext, useState } from "react";

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [sortProduct, setSortProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [finalProduct, setFinalProduct] = useState("");

  return (
    <productContext.Provider
      value={{
        products,
        setProducts,
        sortProduct,
        setSortProduct,
        finalProduct,
        setFinalProduct,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => {
  return useContext(productContext);
};

export { useProduct, ProductProvider };
