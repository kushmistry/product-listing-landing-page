import { useCart } from "./cartContext";
import "../css/product.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import Register from "./Register";
import { useProduct } from "./productContext";

const Cart = () => {
  const { carts } = useCart();
  const [open, setOpen] = useState(false);
  const { setFinalProduct } = useProduct();
  console.log(carts);

  const handleOrder = (product) => {
    setFinalProduct(product);
    setOpen(true);
  };

  return (
    <div>
      <p
        style={{
          display: "inline",
          margin: "1rem",
          fontSize: "2.5rem",
          fontWeight: "600",
        }}
      >
        My Cart
      </p>
      {
        <div className={carts.length && "container"}>
          {carts.length > 0 ? (
            carts.map((product) => {
              return (
                <div className="card-contaner" key={product.id}>
                  <div className="img-container">
                    <img src={product.image} width="120px" height="160px" />
                  </div>
                  <div className="desc-section">
                    <p id="title">{product.title}</p>
                    <p className="cart-price">$ {product.price}</p>
                  </div>
                  <Button
                    onClick={() => handleOrder(product)}
                    className="btn-cart"
                    variant="outlined"
                  >
                    Place Order
                  </Button>
                </div>
              );
            })
          ) : (
            <div style={{ position: "fixed", top: "45%", left: "44%" }}>
              <p>NO PRODUCT ADDED IN CART</p>
            </div>
          )}
        </div>
      }
      {open && <Register open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Cart;
