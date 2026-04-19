import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Register from "../Components/Register";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import WishList from "../Pages/WishList";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route index path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/cart" Component={Cart} />
        <Route path="/wishlist" Component={WishList} />
        <Route path="/checkout" Component={Checkout} />
      </Routes>
    </>
  );
};

export default Routing;
