import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Pay from "../pages/Pay.jsx";
import Success from "../pages/Success.jsx";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/">
          <Route path="pay" element={<Pay />} />
        </Route>
        <Route path="/">
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
