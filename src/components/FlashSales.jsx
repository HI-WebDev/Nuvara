import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/Slices/productSlice";
import { addPrdToWishlist } from "../Redux/Api/wishlistApi";
import { addPrdToCart } from "../Redux/Api/cartsApi";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import Header from "./helpers/Title";
import Arrows from "./helpers/Arrows";
import Button from "./helpers/Button";

const FlashSales = () => {
  //flash date
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-31").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  // destruction products
  const { products } = useSelector((state) => state.products);
  const fourProducts = products?.slice(0, 4);
  const fiveProducts = products?.slice(10, 14);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //handle click
  // const [isActive, setActive] = useState(false);
  // const [isActive2, setActive2] = useState(false);
  const [isClicked, setClicked] = useState(false);

  // const handleClick = () => {
  //     setActive(!isActive)
  // }

  // const handleClick2 = () => {
  //     setActive2(!isActive2)
  // }

  const handleClicked = () => {
    setClicked(!isClicked);
  };

  const handleAddPrdToWishlist = (product) => {
    dispatch(addPrdToWishlist(product));
  };

  const handleAddPrdToCart = (product) => {
    dispatch(addPrdToCart(product));
  };

  return (
    <>
      <div className="flash mt-5 mb-5">
        <div className="container">
          <Header title="Todays's" />
          <div className="timing d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <div className="time d-flex flex-column flex-md-row align-items-center">
              <h2 className="fs-3 text-capitalize me-0 me-md-4 fw-bold">
                christmas sales
              </h2>
              <div className="d-flex mb-2 mt-2">
                <span className="days position-relative fs-3 me-4 me-lg-3 fw-bold ms-0 ms-lg-5">
                  {timeLeft.days} :
                </span>
                <span className="hours position-relative fs-3 me-4 me-lg-3 fw-bold">
                  {timeLeft.hours} :
                </span>
                <span className="minutes position-relative fs-3 me-4 me-lg-3 fw-bold">
                  {timeLeft.minutes} :
                </span>
                <span className="seconds position-relative fs-3 fw-bold">
                  {timeLeft.seconds}
                </span>
              </div>
            </div>
            <Arrows />
          </div>

          <div className="row mt-4 mt-lg-5">
            {fourProducts.loading && <h1>Loading...</h1>}

            {fourProducts.map((product) => (
              <div
                key={product.id}
                className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-3"
              >
                <div className={`product `}>
                  <div className="card">
                    <div className="image position-relative">
                      <img
                        src={product.image}
                        className="card-img-top p-5"
                        alt="product1"
                      />
                      <span className="discount position-absolute pt-1 pb-1 ps-2 pe-2">
                        New
                      </span>
                      <div className="outils d-flex flex-column position-absolute">
                        <span
                          className="heart  d-flex justify-content-center align-items-center mb-2"
                          onClick={() => handleAddPrdToWishlist(product)}
                        >
                          <FaHeart />
                        </span>
                        <span className="d-flex fs-5 justify-content-center align-items-center">
                          <IoMdEye />
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

                      {/* <div className={`colors position-absolute`}>
                                                <span className="me-2">{product.rating.count >= 200 ? "" : null}</span>
                                                <span className="sec">{product.rating.count >= 200 ? "" : null}</span>
                                            </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {fiveProducts.map((product) => (
              <div
                key={product.id}
                className={
                  isClicked
                    ? "col-12 col-md-6 col-lg-3 mb-4 mb-lg-3"
                    : "col d-none"
                }
              >
                <div className={`product`}>
                  <div className="card">
                    <div className="image position-relative">
                      <img
                        src={product.image}
                        className="card-img-top p-5"
                        alt="product1"
                      />
                      <span className="discount position-absolute pt-1 pb-1 ps-2 pe-2">
                        New
                      </span>
                      <div className="outils d-flex flex-column position-absolute">
                        <span
                          className="heart  d-flex justify-content-center align-items-center mb-2"
                          onClick={() => handleAddPrdToWishlist(product)}
                        >
                          <FaHeart />
                        </span>
                        <span className="d-flex fs-5 justify-content-center align-items-center">
                          <IoMdEye />
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
                      {/* 
                                            <div className={`colors position-absolute`}>
                                                <span className="me-2">{product.rating.count >= 200 ? "" : null}</span>
                                                <span className="sec">{product.rating.count >= 200 ? "" : null}</span>
                                            </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {!products?.loading && products?.error ? (
              <h1>Eroor : {products?.error}</h1>
            ) : null}
          </div>
        </div>

        <div className="d-flex justify-content-center mt-0">
          <Button
            title={isClicked ? "View Less" : "View All Products"}
            funct={handleClicked}
          />
        </div>
      </div>
    </>
  );
};

export default FlashSales;

{
  /* <div className="row mt-4">
                        <div className="col-3">
                            <Product
                                img={pro1}
                                bg='#db4444'
                                display='d-inline'
                                discount='-40%'
                                title='HAVIT HV-G92 Gamepad'
                                oneLine='d-flex flex-column'
                                price='120'
                                del='160'
                                rating='⭐⭐⭐⭐⭐'
                                count='88'
                            />
                        </div>
                        <div className="col-3">
                            <Product
                                img={pro1}
                                bg='#db4444'
                                display='d-inline'
                                discount='-40%'
                                title='HAVIT HV-G92 Gamepad'
                                oneLine='d-flex flex-column'
                                price='120'
                                del='160'
                                rating='⭐⭐⭐⭐⭐'
                                count='88'
                            />
                        </div>
                        <div className="col-3">
                            <Product
                                img={pro1}
                                bg='#db4444'
                                display='d-inline'
                                discount='-40%'
                                title='HAVIT HV-G92 Gamepad'
                                oneLine='d-flex flex-column'
                                price='120'
                                del='160'
                                rating='⭐⭐⭐⭐⭐'
                                count='88'
                            />
                        </div>
                        <div className="col-3">
                            <Product
                                img={pro1}
                                bg='#db4444'
                                display='d-inline'
                                discount='-40%'
                                title='HAVIT HV-G92 Gamepad'
                                oneLine='d-flex flex-column'
                                price='120'
                                del='160'
                                rating='⭐⭐⭐⭐⭐'
                                count='88'
                            />
                        </div>
                    </div> */
}
