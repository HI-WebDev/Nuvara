import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../Redux/Api/cartsApi";
import Button from "../components/helpers/Button";
import { HiMiniXMark } from "react-icons/hi2";
import bank from "../Assets/bank.png";

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  // const dispatch = useDispatch();
  const percontageToSubstract = 2.5;

  const subtotal = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const total = subtotal + percontageToSubstract;

  const handleDeleteFromCart = (product) => {
    dispatch(deleteFromCart(product));
  };

  return (
    <div className="checkout mt-5 mb-5 ">
      <div className="container">
        <h3 className="fw-bold fs-6 mb-5 text-black">
          <span className="text-muted">Cart</span> / CheckOut
        </h3>
        <form action="">
          <div className="row d-flex justify-content-center justify-content-lg-between">
            <div className="col-12 col-md-10 col-lg-5 mb-5 mb-lg-0">
              <div className="infos d-flex flex-column">
                <h1 className="text-capitalize text-center text-lg-start fs-2 mb-4">
                  Billing details
                </h1>
                <label
                  htmlFor="fname"
                  className="text-capitalize text-black-50 fw-bold mb-1"
                >
                  first name
                </label>
                <input
                  type="text"
                  id="fname"
                  className="me- mb-3 p-2"
                  required
                />

                <label
                  htmlFor="companyname"
                  className="text-capitalize text-black-50 fw-bold mb-1"
                >
                  company name
                </label>
                <input
                  type="text"
                  id="companyname"
                  className="me- mb-3 p-2"
                  required
                />

                <label
                  htmlFor="streetadress"
                  className="text-capitalize text-black-50 fw-bold mb-1"
                >
                  street address
                </label>
                <input
                  type="text"
                  id="streetadress"
                  className="me- mb-3 p-2"
                  required
                />

                <label
                  htmlFor="apartement"
                  className="text-capitalize text-black-50 fw-bold mb-1"
                >
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  type="text"
                  id="apartement"
                  className="me- mb-3 p-2"
                  required
                />

                <label
                  htmlFor="city"
                  className="text-capitalize text-black-50 fw-bold mb-1"
                >
                  town/city
                </label>
                <input
                  type="text"
                  id="city"
                  className="me- mb-3 p-2"
                  required
                />

                <label
                  htmlFor="phone"
                  className="text-capitalize text-black-50 fw-bold mb-1"
                >
                  phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="me- mb-3 p-2"
                  required
                />

                <label
                  htmlFor="mail"
                  className="text-capitalize text-black-50 fw-bold mb-1"
                >
                  email address
                </label>
                <input
                  type="email"
                  id="mail"
                  className="me- mb-3 p-2"
                  required
                />

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Save this information for faster check-out next time
                  </label>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-10 col-lg-5">
              <div className="payment d-flex flex-column">
                {cart.map((product) => {
                  return (
                    <div
                      key={product}
                      className="prod mb-4 d-flex justify-content-between align-items-center"
                    >
                      <div
                        className="d-flex position-relative"
                        style={{ width: "5.5rem", height: "3rem" }}
                      >
                        <img
                          src={product.image}
                          className="img-fluid"
                          alt="dd"
                        />
                        <span
                          className="delete position-absolute d-flex justify-content-center align-items-center"
                          onClick={() => handleDeleteFromCart(product)}
                        >
                          <HiMiniXMark />
                        </span>
                        <h1 className="quantity m-0 position-absolute fs-6 fw-bold">
                          <HiMiniXMark className="me-0 fw-bold" />
                          {product.quantity}
                        </h1>
                      </div>
                      <h1 className="fs-6 fw-bold">${product.price}</h1>
                    </div>
                  );
                })}

                <div className="line mt-2 pb-2  d-flex justify-content-between align-items-center">
                  <h1 className="fs-6 fw-bold text-capitalize">Subtotal:</h1>
                  <h1 className="fs-6 fw-bold text-capitalize">
                    ${subtotal.toFixed(2)}
                  </h1>
                </div>
                <div className="line mt-4 pb-2  d-flex justify-content-between align-items-center">
                  <h1 className="fs-6 fw-bold text-capitalize">shipping:</h1>
                  <h1 className="fs-6 fw-bold text-capitalize">
                    ${percontageToSubstract}
                  </h1>
                </div>
                <div className="mt-4 mb-4  d-flex justify-content-between align-items-center">
                  <h1 className="fs-6 fw-bold text-capitalize">total:</h1>
                  <h1 className="fs-6 fw-bold text-capitalize">
                    ${total.toFixed(2)}
                  </h1>
                </div>

                <div className="bank form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label d-flex justify-content-between ms-1 fw-bold"
                    htmlFor="flexRadioDefault1"
                  >
                    Bank
                    <span>
                      <img src={bank} alt="" className="img-fluid" />
                    </span>
                  </label>
                </div>

                <div className="bank form-check mb-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label ms-1 fw-bold"
                    htmlFor="flexRadioDefault1"
                  >
                    Cash on delivery
                  </label>
                </div>

                <div className="coupon d-flex justify-content-between mb-4">
                  <input
                    className="col-lg-7"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon Code"
                  />
                  <Button title="Apply coupon" />
                </div>
                <div className="submit mt-1">
                  <input
                    className="text-capitalize fw-bold p-2 ps-4 pe-4"
                    type="submit"
                    value="place order"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
