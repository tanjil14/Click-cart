import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Product from "../pages/Product.jsx";
import ProductList from "../pages/ProductList.jsx";
import Register from "../pages/Register.jsx";
import Success from "../pages/Success.jsx";
import Private from "./Private.js";
const Routing = () => {
  const user = useSelector((state) => state.user.currentUser);
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
          <Route
            path="login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="cart"
            element={
              <Private>
                <Cart />
              </Private>
            }
          />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
