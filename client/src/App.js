import BuyProduct from "./components/BuyProduct";
import Cart from "./components/Cart";
import Product from "./components/Product";
import RegisterUser from "./components/RegisterUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRegisterUser } from "./components/registerUserContext";

function App() {

  const { access } = useRegisterUser();

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Product />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/order" element={<BuyProduct />}></Route>
          {
            access && <Route exact path="/register" element={<RegisterUser />}></Route>
          }
          <Route exact path="*" element={<div style={{textAlign: "center", marginTop: "20%", fontSize: "28px", fontWeight: "600"}}> 404 PAGE NOT FOUND</div>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
