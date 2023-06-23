import { useProduct } from "./productContext";
import StarIcon from "@mui/icons-material/Star";
import "../css/buyproduct.css";
import Button from "@mui/material/Button";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "./cartContext";
import { useRegisterUser } from "./registerUserContext";
import { useNavigate } from "react-router-dom"


const BuyProduct = () => {
  const { finalProduct, setFinalProduct } = useProduct();
  const { carts, setCarts } = useCart();
  const { registerDetails, setAccess } = useRegisterUser();
  const navigate = useNavigate();
  let firstname = "";
  if (registerDetails.firstname !== "") {
    firstname = registerDetails.firstname + "'s";
  }

  const handleOrder = () => {
    setCarts(carts.filter((cart) => cart.id !== finalProduct.id));
    toast.success(`${firstname} Order Successfully Placed.`);
    setTimeout(() => {
      navigate("/");
      setFinalProduct("");
      setAccess(false)
    }, 3000);
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
        Purchase Product
      </p>
      {finalProduct !== "" ? (
        <div className="cointainer">
          <div className="left-section">
            <img src={finalProduct.image} width="250px" height="300px" />
          </div>
          <div className="right-section">
            <p className="title">{finalProduct.title}</p>
            <p className="category">{finalProduct.category}</p>
            <p>{finalProduct.description}</p>
            <p className="rating">{finalProduct.rating.rate}</p>
            <sub>
              <StarIcon sx={{ color: "#398fdd" }} fontSize="small" />
            </sub>
            <p>available product - {finalProduct.rating.count}</p>
            <p>
              <span style={{ fontSize: "28px", fontWeight: "600" }}>$</span>{" "}
              <span style={{ fontSize: "24px", fontWeight: "600" }}>
                {finalProduct.price}
              </span>{" "}
            </p>
            <p>Only Cash On delivery</p>
            <Button
              className="orderBtn"
              variant="contained"
              onClick={handleOrder}
            >
              Place Order
            </Button>
          </div>
        </div>
      ) : (
        <div style={{ position: "fixed", top: "45%", left: "44%" }}>
          <p>NO PRODUCT FOR PURCHASE</p>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default BuyProduct;
