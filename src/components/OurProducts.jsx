import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../Redux/Slices/productSlice";
import { addPrdToWishlist, deleteFromWishList } from "../Redux/Api/wishlistApi";
import { addPrdToCart } from "../Redux/Api/cartsApi";

import { FaHeart, FaStar, FaRegHeart } from "react-icons/fa";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";

import Header from "./Title";
import Arrows from "./Arrows";
import Button from "./Button";
import MainProduct from "./MainProduct";

const OurProducts = () => {
  const { products } = useSelector((state) => state.products);
  const wishlist = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  // Fetch Products
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Destructer Products
  const fourProducts = products?.slice(15, 19);
  const fiveProducts = products?.slice(3, 7);

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

  // Handle Click
  const [isClicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!isClicked);
  };

  return (
    <div className="flash mt-5 mb-5">
      <div className="container">
        <Header title="Our Products" />
        <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center mt-3">
          <h1 className="fs-3 fw-bold">Explore Our Products</h1>
          <Arrows />
        </div>

        <div className="row mt-4 mt-lg-5">
          {fourProducts.loading && <h1>Loading...</h1>}

          {fourProducts?.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-3">
              <MainProduct product={product} />
            </div>
          ))}

          {fiveProducts?.map((product) => (
            <div
              key={product.id}
              className={
                isClicked
                  ? "col-12 col-md-6 col-lg-3 mb-4 mb-lg-3"
                  : "col d-none"
              }
            >
              <MainProduct product={product} />
            </div>
          ))}

          {!products?.loading && products?.error ? (
            <h1>Eroor : {products?.error}</h1>
          ) : null}
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Button
          title={isClicked ? "View Less" : "View All Products"}
          funct={handleClicked}
        />
      </div>
    </div>
  );
};

export default OurProducts;
