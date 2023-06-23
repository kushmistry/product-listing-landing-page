import { useEffect, useState } from "react";
import axios from "axios";
import { GET_PRODUCT_API } from "../constants";
import CircularProgress from "@mui/material/CircularProgress";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "../css/product.css";
import { useProduct } from "./productContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "./cartContext";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const { sortProduct, setSortProduct, products, setProducts } = useProduct();
  const navigate = useNavigate();
  const { carts, setCarts } = useCart();
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (sortProduct === "price") {
      const sortedArray = products.sort((product1, product2) => {
        if (product1.price - product2.price === 0) {
          const name1 = product1.title.toLowerCase();
          const name2 = product2.title.toLowerCase();
          if (name1 < name2) {
            return -1;
          }
          if (name1 > name2) {
            return 1;
          }
          return 0;
        }
        return product1.price - product2.price;
      });
      setSortProduct(sortedArray);
    }

    if (sortProduct === "name") {
      const sortedArray = products.sort((product1, product2) => {
        const name1 = product1.title.toLowerCase();
        const name2 = product2.title.toLowerCase();
        if (name1 < name2) {
          return -1;
        }
        if (name1 > name2) {
          return 1;
        }
        return 0;
      });
      setSortProduct(sortedArray);
    }
  }, [sortProduct]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(GET_PRODUCT_API);
        setProducts(data.products);
      } catch (error) {
        console.log("Something Went Wrong.");
      }
    })();
  }, []);

  const handleChange = (event) => {
    setSortProduct(event.target.value);
    setLabel(event.target.value);
  };

  const handleCartBtn = (product) => {
    let flag = true;
    for (let i = 0; i < carts.length; i++) {
      let cart = carts[i];
      if (cart.id === product.id) {
        toast("PRODUCT WAS ALREADY ADDED IN CART");
        flag = false;
        break;
      }
    }
    if (flag) {
      setCarts([...carts, product]);
      toast.success("ITEM WAS ADDED INTO THE CART");
    }
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
        Products
      </p>
      <sup>
        <Button
          style={{ width: "180px", margin: "1rem" }}
          variant="contained"
          onClick={() => navigate("/cart")}
        >
          GO To Cart
        </Button>
      </sup>
      <FormControl sx={{ m: 2, minWidth: 150 }} size="small">
        <InputLabel id="demo-select-small-label">Sort</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={label}
          label="sort"
          onChange={handleChange}
        >
          <MenuItem value={"price"}>Price</MenuItem>
          <MenuItem value={"name"}>name/title</MenuItem>
        </Select>
      </FormControl>
      <div className={products.length && "container"}>
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <div className="card-contaner" key={product.id}>
                <div className="img-container">
                  <img src={product.image} width="120px" height="160px" />
                </div>
                <div className="desc-section">
                  <p id="title">{product.title}</p>
                  <p className="cart-price"><span style={{fontSize: "20px", fontWeight: "600"}}>$ </span><span style={{fontSize: "20px", fontWeight: "600"}}>{product.price}</span></p>
                </div>
                <Button
                  className="btn-cart"
                  variant="outlined"
                  onClick={() => handleCartBtn(product)}
                >
                  Add To Cart
                </Button>
              </div>
            );
          })
        ) : (
          <div className="lodder">
            <CircularProgress style={{ color: "grey" }} />
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
