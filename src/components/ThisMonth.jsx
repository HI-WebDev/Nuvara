import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../Redux/Slices/productSlice";
import { addPrdToWishlist, deleteFromWishList } from "../Redux/Api/wishlistApi";
import { addPrdToCart } from "../Redux/Api/cartsApi";

import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

import Header from "./Title";
import Button from "./Button";

const ThisMonth = () => {
  const { products } = useSelector((state) => state.products);
  const wishlist = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  const fourProducts = products?.slice(5, 9);
  const fiveProducts = products?.slice(14, 18);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Handle click
  const [isActive2, setActive2] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const handleClick2 = () => {
    setActive2(!isActive2);
  };

  const handleClicked = () => {
    setClicked(!isClicked);
  };

  // Handle Visibility
  const [prdVisible, setPrdVisible] = useState("");
  const [hiddenProducts, setHiddenProducts] = useState([]);

  const handleProductVisiblity = (product) => {
    setHiddenProducts((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id],
    );
  };

  // Handle Toggle Wishlist And Cart
  const handleTogglePrdToWishlist = (product) => {
    const findProduct = wishlist?.find((item) => item?.id == product?.id);

    if (!findProduct) {
      dispatch(addPrdToWishlist(product));
    } else {
      dispatch(deleteFromWishList(product));
    }
  };

  const handleAddPrdToCart = (product) => {
    dispatch(addPrdToCart(product));
  };

  return (
    <div className="month mt-5 mb-5">
      <div className="container">
        <Header title="This Month" />
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          <h1 className="fs-2 fw-bold text-center mb-3 mb-lg-0">
            Best Selling Products
          </h1>
          <Button
            title={isClicked ? "View Less" : "View All"}
            funct={handleClicked}
          />
        </div>

        {fourProducts.loading && <h1>Loading...</h1>}

        {!fourProducts.loading && fourProducts.length ? (
          <div className="row mt-4 mt-lg-5">
            {fourProducts.map((product) => (
              <div key={product.id} className="col-12 col-md-6 col-lg-3">
                <div className="product">
                  <div className="card">
                    <div className="image position-relative">
                      <img
                        src={product.image}
                        className={`card-img-top p-5 ${hiddenProducts.includes(product.id) ? "disable" : ""}`}
                        alt={product.title}
                      />
                      <span className="discount position-absolute pt-1 pb-1 ps-2 pe-2">
                        New
                      </span>
                      <div className="outils d-flex flex-column position-absolute">
                        <span
                          className="heart mb-2"
                          onClick={() => handleTogglePrdToWishlist(product)}
                        >
                          {wishlist?.find((item) => item?.id == product?.id) ? (
                            <FaHeart className="fill" />
                          ) : (
                            <FaRegHeart className="empty" />
                          )}
                        </span>
                        <span
                          className="visibility fs-5"
                          onClick={() => handleProductVisiblity(product)}
                        >
                          {hiddenProducts.includes(product.id) ? (
                            <IoIosEyeOff />
                          ) : (
                            <IoMdEye />
                          )}
                        </span>
                      </div>
                      <div className="addCart btn position-absolute w-100 text-center pt-2 pb-1">
                        <h1
                          className="fs-6 fw-bold text-capitalize p-0"
                          onClick={() => handleAddPrdToCart(product)}
                        >
                          add to cart
                        </h1>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <h5 className="card-title mt-3">{product.title}</h5>
                      <div>
                        <p className="card-price d-flex mb-1">
                          <span className="fw-bold me-3">${product.price}</span>
                          <del className="fw-bold">
                            ${Math.floor(product.price + 20)}
                          </del>
                        </p>
                        <p className="card-rate d-flex">
                          <span className="me-2 d-flex align-items-center fw-bold">
                            {product.rating.rate}
                            <FaStar className="ms-1" />
                          </span>
                          <span className="rating fw-bold">
                            ({product.rating.count})
                          </span>
                        </p>
                      </div>

                      <div className="colors">
                        <span className="me-2">
                          {product.rating.count >= 200 ? "" : null}
                        </span>
                        <span className="sec">
                          {product.rating.count >= 200 ? "" : null}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {fiveProducts.map((product) => (
              <div
                key={product.id}
                className={
                  isClicked ? "col-12 col-md-6 col-lg-3" : "col d-none"
                }
              >
                <div className="product">
                  <div className="card">
                    <div className="image position-relative">
                      <img
                        src={product.image}
                        className={`card-img-top p-5 ${hiddenProducts.includes(product.id) ? "disable" : ""}`}
                        alt="product1"
                      />
                      <span className="discount position-absolute pt-1 pb-1 ps-2 pe-2">
                        New
                      </span>
                      <div className="outils d-flex flex-column position-absolute">
                        <span
                          className="heart mb-2"
                          onClick={() => handleTogglePrdToWishlist(product)}
                        >
                          {wishlist?.find((item) => item?.id == product?.id) ? (
                            <FaHeart className="fill" />
                          ) : (
                            <FaRegHeart className="empty" />
                          )}
                        </span>
                        <span
                          className="visibility fs-5"
                          onClick={() => handleProductVisiblity(product)}
                        >
                          {hiddenProducts.includes(product.id) ? (
                            <IoIosEyeOff />
                          ) : (
                            <IoMdEye />
                          )}
                        </span>
                      </div>
                      <div className="addCart btn position-absolute w-100 text-center pt-2 pb-1">
                        <h1
                          className="fs-6 fw-bold text-capitalize p-0"
                          onClick={() => handleAddPrdToCart(product)}
                        >
                          add to cart
                        </h1>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <h5 className="card-title mt-3">{product.title}</h5>
                      <div>
                        <p className="card-price d-flex mb-1">
                          <span className="fw-bold me-3">${product.price}</span>
                          <del className="fw-bold">
                            ${Math.floor(product.price + 20)}
                          </del>
                        </p>
                        <p className="card-rate d-flex">
                          <span className="me-2 d-flex align-items-center fw-bold">
                            {product.rating.rate}
                            <FaStar className="ms-1" />
                          </span>
                          <span className="rating fw-bold">
                            ({product.rating.count})
                          </span>
                        </p>
                      </div>

                   <div className="colors">
                        <span className="me-2">
                          {product.rating.count >= 200 ? "" : null}
                        </span>
                        <span className="sec">
                          {product.rating.count >= 200 ? "" : null}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {!products?.loading && products?.error ? (
          <h1>Eroor : {products?.error}</h1>
        ) : null}
      </div>
    </div>
  );
};

export default ThisMonth;
