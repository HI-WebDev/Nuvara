import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
// import Button from './helpers/Button';
import Input from './helpers/Input';
import shop1 from '../Assets/shop1.png'


const Register = () => {

    return (
        <div className="sign up mt-5 mb-5">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="image">
                            <img src={shop1} alt="shoping online" className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-12 col-lg-5 mt-4 mt-lg-0 text-center text-lg-start">
                        <div className="form">
                            <h1 className="fs-2 mb-2 w-bold">Create an account</h1>
                            <h1 className="fs-6 mb-4">Enter your details below</h1>
                            <form action="GET">
                                <div className="inputs d-flex flex-column">
                                    <Input type="text" ariaDesc="nameHelp" ph="Name" />
                                    <Input type="email" ariaDesc="emailHelp" ph="email or phone number" />
                                    <Input type="password" ariaDesc="passwordHelp" ph="password" />
                                </div>

                                <div className="buttons m-auto mt-3 d-flex flex-column w- text-center">
                                    <input className="submit pt-2 pb-2 fw-bold" type="submit" value="Create Account" />
                                    <span className="gg pt-2 pb-2 fw-bold btn mt-3 d-flex align-items-center justify-content-center">
                                        <FcGoogle className="me-2 fs-5" />
                                        Sign up with Google
                                    </span>
                                </div>
                            </form>

                            <div className="toLogin d-flex mt-4 justify-content-center">
                                Already have an account?
                                <Link className='ms-2' to="/login">Log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Outlet context={Login} /> */}
        </div>
    )
}

export default Register
