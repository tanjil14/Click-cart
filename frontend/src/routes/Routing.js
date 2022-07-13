import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Product from "../pages/Product.jsx";
import ProductList from "../pages/ProductList.jsx";
import Register from "../pages/Register.jsx";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path=":category" element={<ProductList />} />
            <Route path="find/:id" element={<Product />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
