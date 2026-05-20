import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPrdToWishlist, deleteFromWishList } from "../Redux/Api/wishlistApi";
import { fetchProducts } from "../Redux/Slices/productSlice";
import { addPrdToCart } from "../Redux/Api/cartsApi";

import { FaHeart, FaStar, FaRegHeart } from "react-icons/fa";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const wishlist = useSelector((state) => state.wishList);

  // NEW: Filter state
  const [selectedCategory, setSelectedCategory] = useState("all");

  // NEW: Extract unique categories from products
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

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
    <>
      {products.loading && <h1>Loading...</h1>}

      <div className="container mt-3 mt-lg-5 mb-5">
        <h3 className="fw-bold fs-6 mb-0 text-black">
          <span className="text-muted">Home</span> / Products
        </h3>

        {/* NEW: Category Filter Section */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="category-filter">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                >
                  {cat === "all" ? "All Categories" : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-4 mt-lg-5">
          {filteredProducts.map((product) => (
            <div
              key={product?.id}
              className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-3"
            >
              <div className="flash-prd">
                <div className="card">
                  <div className="image position-relative">
                    <img
                      src={product.image}
                      className={`card-img-top p-5 ${
                        hiddenProducts.includes(product.id) ? "disable" : ""
                      }`}
                      alt="product1"
                    />
                    <span className="discount position-absolute pt-1 pb-1 ps-2 pe-2">
                      New
                    </span>
                    <div className="outils d-flex flex-column position-absolute">
                      <span
                        className="heart"
                        onClick={() => handleTogglePrdToWishlist(product)}
                      >
                        {wishlist?.find((item) => item?.id === product?.id) ? (
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!products.loading && products.error ? (
        <h1>Error : {products.error}</h1>
      ) : null}
    </>
  );
};

export default Products;
