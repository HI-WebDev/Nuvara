import { Link } from "react-router-dom"
import Input from '../Components/helpers/Input';
import shop1 from '../Assets/shop6.png'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
// import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
// import { SiInstagram } from "react-icons/si";


const Login = () => {
    return (
        <div className="login mt-5 mb-5">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="image">
                            <img src={shop1} alt="shoping online" className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-12 col-lg-5 mt-4 mt-lg-0 text-center text-lg-start">
                        <div className="form">
                            <h1 className="fs-2 mb-2 w-bold">Log in to Exclusive</h1>
                            <h1 className="fs-6 mb-4">Enter your details below</h1>

                            <form action="GET" className="mb-4">
                                <div className="inputs mt- d-flex flex-column">
                                    <Input type="email" ariaDesc="emailHelp" ph="email or phone number" />
                                    <Input type="password" ariaDesc="passwordHelp" ph="password" />
                                </div>

                                <div className="buttons m-auto mt-3 d-flex justify-content-between align-items-center">
                                    <input className="submit p-2 ps-5 pe-5 fw-bold" type="submit" value="Log In" />
                                    <Link to="#" className="forget text-danger text-capitalize text-decoration-none pt-2 pb-2 fs-6">
                                        forget password?
                                    </Link>
                                </div>
                            </form>

                            <span className="or position-relative p-0 mb-4 d-flex justify-content-center align-items-center m-auto fw-bold">
                                <b className="d-flex justify-content-center align-items-center "> or</b>
                            </span>

                            <div className="social mt-0 d-flex justify-content-center align-items-center">
                                <Link className="fb fw-bold me-4 fs-4 d-flex justify-content-center align-items-center">
                                    <FaFacebookF />
                                </Link>
                                <Link className="gogle fw-bold me- fs-4 d-flex justify-content-center align-items-center">
                                    <FcGoogle />
                                </Link>
                                {/* <Link className="linke fw-bold me-4 fs-5 d-flex justify-content-center align-items-center">
                                    <FaLinkedinIn />
                                </Link>
                                <Link className="twitter fw-bold fs-5 d-flex justify-content-center align-items-center">
                                    <FaTwitter />
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
