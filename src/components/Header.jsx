import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdSearch } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [active, setActive] = useState(false);
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishList);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="navbar-discount pt-3 pb-3">
        <div className="container d-flex flex-column flex-lg-row text-center align-items-center">
          <h2 className="disc-title fs-6 lh-base mb-0 ms-auto me-auto">
            Summer Sale on All Swimwear with Free Express Shipping - 50% Off!
          </h2>
          {/* <span className="disc-lang text-light dropdown-toggle">English</span> */}
        </div>
      </div>

      <nav className="navbar sticky navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            NUVARA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleClick}
          >
            {active ? <BsThreeDotsVertical /> : <CgMenuGridO />}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link me-3" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-3" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-3" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-3" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
            <form className="search-form d-flex justify-content-between justify-content-lg-start">
              <div className="form-outline d-flex align-items-center">
                <IoMdSearch className="ms-2" size={26} />
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search for products"
                  aria-label="Search"
                />
              </div>
              <div className="buttons d-flex align-items-center  ms-3">
                <Link
                  className="like fs-6 me-2 text-decoration-none text-black"
                  to="/wishlist"
                >
                  <FiHeart />
                  <span className="ms-1">({wishlist.length})</span>
                </Link>
                <Link
                  className="cart ms-1 text-decoration-none text-black"
                  to="/cart"
                >
                  <FiShoppingCart />
                  <span className="ms-1">({cart.length})</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
