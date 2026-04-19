import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";

import { useSelector } from 'react-redux'
// import Home from './Home'
import { Link } from 'react-router-dom'
import { useState } from 'react';
// import { useState } from 'react'


const Header = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active)
    }
    const cart = useSelector((state) => state.cart);
    const wishlist = useSelector((state) => state.wishList)

    return (
        <>
            <div className="discount d-flex flex-column flex-lg-row text-center align-items-center justify-content-evenly p-2">
                <h2 className="fs-6 lh-base mb-0">
                    {/* Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! */}
                    Summer Sale on All Swimwear with Free Express Shipping - 50% Off!
                    <span className="fw-bold text-decoration-underline ms-2 ms-lg-3">ShopNow</span>
                </h2>
                <div className="dropdown mb-0">
                    <button className="btn language text-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        English
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">French</a></li>
                        <li><a className="dropdown-item" href="#">Arabic</a></li>
                        <li><a className="dropdown-item" href="#">Amazigh</a></li>
                    </ul>
                </div>
                {/* <div className="language d-flex align-items-center me-0" onClick={handleClick}>
                    English
                    {active ? <FontAwesomeIcon className='ms-2' icon={faAngleRight} />
                        : <FontAwesomeIcon className='ms-2' icon={faAngleDown} />}
                </div> */}
            </div>
            <nav className="navbar sticky  navbar-expand-lg navbar-light pt-3">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="/home">HI-ECOMMERCE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation" onClick={handleClick}>
                        {active ? <BsThreeDotsVertical /> : <CgMenuGridO />}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold me-3" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold me-3" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold me-3" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/sign">Sign Up</Link>
                            </li>
                        </ul>
                        <form className="d-flex justify-content-between justify-content-lg-start">
                            <div className="form-outline d-flex align-items-center">
                                <FontAwesomeIcon className='ms-2' icon={faMagnifyingGlass} />
                                <input className="form-control " type="search" placeholder="Search for products" aria-label="Search" />
                            </div>
                            <div className="buttons d-flex align-items-center  ms-3">
                                <Link className="like fs-6 me-2 text-decoration-none text-black" to="/wishlist">
                                    <FiHeart />
                                    <span className='ms-1'>({wishlist.length})</span>
                                </Link>
                                <Link className="cart ms-1 text-decoration-none text-black" to='/cart'>
                                    <FiShoppingCart />
                                    <span className='ms-1'>({cart.length})</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <Home /> */}
        </>
    )
}

export default Header
