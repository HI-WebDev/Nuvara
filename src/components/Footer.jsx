import Download from "./Download";
import { FaGooglePlay, FaApple } from "react-icons/fa6";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer me-0 ms-0 ps-0 pe-0 mt-5 pt-5">
      <div className="container">
        <div className="row text-center text-lg-start">
          <div className="col-12 col-md-6 col-lg-3 ">
            <ul className="list-unstyled">
              <li className="fs-5 fw-bold mb-4">exclusive</li>
              <li className="mb-3">Join our newsletter</li>
              <li className="mb-3">Get 10% off your first order</li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <ul className="list-unstyled">
              <li className="fs-5 fw-bold mb-4">support</li>
              <li className="mb-3">Casablanca, Morocco</li>
              <li className="text-lowercase mb-3">support@nuvara.com</li>
              <li className="mb-3">Mon - Sat : 9:00 AM - 6:00 PM</li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <ul className="list-unstyled">
              <li className="fs-5 fw-bold mb-4">quick link</li>
              <li className="mb-3">Terms & Conditions</li>
              <li className="mb-3">Privacy Policy</li>
              <li className="mb-3">Contact Us</li>
              <li className="mb-3">About Us</li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column">
              <span className="fs-5 text-capitalize fw-bold mb-4">
                download app
              </span>
              <span className="mb-3 text-white-50 fw-bold">
                Save $3 with App New User Only
              </span>
              <div className="Qrcode d-flex ms-auto me-auto ms-lg-0 me-lg-0 mb-1">
                <div className="system d-flex flex-column">
                  <Download
                    icon={<FaGooglePlay />}
                    title="Get it on"
                    system="google play"
                  />
                  <Download
                    icon={<FaApple />}
                    title="Download on"
                    system="app store"
                  />
                </div>
              </div>
              <div className="socials m-auto m-lg-0 d-flex">
                <span className="me-4 fs-2">
                  <RiFacebookLine />
                </span>
                <span className="me-4 fs-2">
                  <RiTwitterLine />
                </span>
                <span className="me-4 fs-2">
                  <RiInstagramLine />
                </span>
                <span className=" fs-2">
                  <RiLinkedinLine />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="copyright pt-4 pt-md-3 mb-3 text-white-50 text-center">
              &copy; Copyright Hi Webinator - {date}. All right reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
