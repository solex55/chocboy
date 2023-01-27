import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Product";
import Chocparty from "./pages/Chocparty";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgotpassword from "./pages/Forgot";
import Brownies from "./pages/Brownies";
import Bread from "./pages/Bread";
import Tuffles from "./pages/Tuffles";
import Breadstick from "./pages/Breadstick";
import Cookie from "./pages/Cookie";
import Contactus from "./pages/Contactus";
import Profile from "./pages/Profile";
import OtPassword from "./pages/OtPassword";
import Resetpassword from "./pages/Resetpassword";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipe" element={<Products />} />
          <Route path="/chocparty" element={<Chocparty />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/chocboy-brownies" element={<Brownies />} />
          <Route path="/chocboy-bread" element={<Bread />} />
          <Route path="/chocboy-tuffles" element={<Tuffles />} />
          <Route path="/chocboy-cookies" element={<Cookie />} />
          <Route path="/chocboy-breadstick" element={<Breadstick />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/otp-password" element={<OtPassword />} />
          <Route path="/reset-password" element={<Resetpassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
