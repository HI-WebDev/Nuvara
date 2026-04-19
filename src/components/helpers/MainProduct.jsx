import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPrdToCart } from "../../Redux/Api/cartsApi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";

const MainProduct = ({
  prd,
  img,
  bg,
  display,
  discount,
  title,
  oneLine,
  price,
  del,
  dispDel,
  rating,
  count,
  DisColors,
  color1,
  color2,
}) => {
  //handle click
  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setActive(!isActive);
  };

  const handleClick2 = () => {
    setActive2(!isActive2);
  };

  const handleAddPrdToCart = (product) => {
    dispatch(addPrdToCart(product));
  };

  const discountClassName = "discount position-absolute pt-1 pb-1 ps-2 pe-2";
  return (
    <>
      <div className="product">
        <div className="card">
          <div className="image position-relative">
            <img
              src={img}
              className={
                isActive2 ? "card-img-top disable p-5" : "card-img-top p-5"
              }
              alt="product1"
            />
            <span
              className={`${discountClassName} ${display}`}
              style={{ backgroundColor: bg }}
            >
              {discount}
            </span>
            <div className="outils d-flex flex-column position-absolute">
              <span
                className={
                  isActive
                    ? "heart clicked d-flex justify-content-center align-items-center mb-2"
                    : "heart  d-flex justify-content-center align-items-center mb-2"
                }
                onClick={handleClick}
              >
                {isActive ? <FaHeart /> : <FaRegHeart />}
              </span>
              <span
                className="d-flex fs-5 justify-content-center align-items-center"
                onClick={handleClick2}
              >
                {isActive2 ? <IoIosEyeOff /> : <IoMdEye />}
              </span>
            </div>
            <div className="addCart  position-absolute w-100 text-center pt-2 pb-1">
              <h1
                className="fs-6 fw-bold text-capitalize p-0"
                onClick={() => handleAddPrdToCart(prd)}
              >
                add to cart
              </h1>
            </div>
          </div>
          <div className="card-body p-0">
            <h5 className="card-title mt-3">{title}</h5>
            <div className={`${oneLine}`}>
              <p className="card-price d-flex mb-1">
                <span className="fw-bold me-3">${price}</span>
                <del className={`fw-bold ${dispDel}`}>${del}</del>
              </p>
              <p className="card-rate d-flex">
                <span className="me-1 d-flex">{rating}</span>
                {/* <span className="me-1"><FontAwesomeIcon icon={faStar} /></span> */}
                <span className="rating fw-bold">({count})</span>
              </p>
            </div>

            <div className={`colors position-absolute ${DisColors}`}>
              <span
                className="me-1 "
                style={{ backgroundColor: color1 }}
              ></span>
              <span className="p-" style={{ backgroundColor: color2 }}></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProduct;

// const fourProducts = data.data.slice(0, 4);

// {fourProducts.map((product) => (
//     <div key={product.id} className="col">
//       <MainProduct
//         img={product.image}

//         // product={addToCart(product)}
//       />
//     </div>
