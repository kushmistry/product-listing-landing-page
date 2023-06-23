import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductProvider } from "./components/productContext";
import { CartProvider } from "./components/cartContext";
import { RegisterUserProvider } from "./components/registerUserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <RegisterUserProvider>
          <App />
        </RegisterUserProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);

reportWebVitals();
